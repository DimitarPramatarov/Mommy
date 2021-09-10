import axios from 'axios';
import Post from '../../components/Post';
import { getAllPosts } from '../../constants/HttpCalls';

export const GetAllPosts = async ()  => {
    
    await axios.get(getAllPosts) 
    .then(function (response) : string {
    // handle success\
    return response.data;
  })
  .catch(function (error) {
    // handle error
    console.warn(error);
  })
}

const PostService = {
    GetAllPosts,
}


export default PostService 