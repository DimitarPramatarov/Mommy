import axios from 'axios';
import {myProfileUrl} from '../../constants/HttpCalls';

interface IProfile {
    userName: string,
    answers: string,
    follows: number,
    mainPhotoUrl: string,
    description: string,
    posts: string,
}

export const getMyProfileService = async (token: string) : Promise<IProfile> => {

    const result = await axios.get(myProfileUrl, {
        headers: {"Authorization" : `Bearer ${token}`}
    });

    let myProfile: IProfile = {
        userName: result.data.userName,
        answers: result.data.answers,
        follows: result.data.follows,
        mainPhotoUrl: result.data.mainPhotoUrl,
        description: result.data.description,
        posts: result.data.posts,
    };

    return myProfile;
}

export const getUserProfileService = async (token: string, username: string) : Promise<IProfile> => {
    
    const result = await axios.get('https://localhost:44306/Profile/ProfileDetails', {
        params: {
          username: username
        },
        headers:{"Authorization" : `Bearer ${token}`}
      })

    let userProfile: IProfile = {
        userName: result.data.userName,
        answers: result.data.answers,
        follows: result.data.follows,
        mainPhotoUrl: result.data.mainPhotoUrl,
        description: result.data.description,
        posts: result.data.posts,
    };

    return userProfile
}

const ProfileService = {
    getMyProfileService,
    getUserProfileService,
}

export default ProfileService