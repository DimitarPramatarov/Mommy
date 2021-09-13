import React, {useContext} from 'react';
import axios, { AxiosResponse } from 'axios';
import { getAllPosts } from '../../constants/HttpCalls';
import { AndroidManifest } from 'expo-constants';

export const  GetAllPosts = async () : Promise<any[]> => {
    
  let posts: any;

  await axios.get<any[]>(getAllPosts)
  .then(await function (response) {
      posts = response.data
  })
  console.log(posts);
  return posts;
  
}

const PostService = {
    GetAllPosts,
}


export default PostService 