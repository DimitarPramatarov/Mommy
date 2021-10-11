import React, {useState, useEffect, useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import VoteService, { getTotalVotesService, plusVoteService, minusVoteService } from '../../services/vote/VoteService';
import UserContext from '../../Context';

interface IProps {
    id: string,
}

const Vote = (props: IProps) => {
    const [votes, setVotes] = useState(0)

    const context = useContext(UserContext);

    const totalVotes = async () => {

        if(props.id == undefined){
            return;
        }

            let getVotes = await getTotalVotesService(context.user.token, props.id);
            if(getVotes != 0){
                setVotes(getVotes);
        }
    }

    const handleUpVote = async () => {
        let result = await plusVoteService(context.user.token, props.id)

        if(result != "You already voted!"){
            totalVotes();
        }
    }

    const handleDownVote = async () => {
        let result = await minusVoteService(context.user.token, props.id);
        if(result != "You already voted!"){
            totalVotes();
        }
    }

    useEffect(() => {
       totalVotes();
    }, [votes, props.id != undefined])


    return(
        <View>
            <Text>{votes}</Text>
            <TouchableOpacity onPress={handleUpVote}>
                <Text>Up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDownVote}>
                <Text>Down</Text>
            </TouchableOpacity>
        </View>
    )
}



export default Vote

