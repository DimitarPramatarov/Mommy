import React, {useContext} from 'react';
import axios from 'axios';
import { getAllPosts } from '../../constants/HttpCalls';

export const  GetAllPosts = async () : Promise<string[]> => {

    let posts: string[] = [];
     await axios.get(getAllPosts)  
    .then(await function (response){
       posts = response.data;
       console.log(posts);
  })
  .catch(function (error) {
    // handle error
    console.warn(error);
  }) 

  return posts;
}

const PostService = {
    GetAllPosts,
}


export default PostService 