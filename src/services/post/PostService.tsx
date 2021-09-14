import axios from 'axios';
import { getAllPosts, createPost } from '../../constants/HttpCalls';

export const  GetAllPosts = async (token: string) : Promise<any[]> => {
    
  let posts: any;
  await axios.get<any[]>(getAllPosts, {
    headers:{"Authorization" : `Bearer ${token}`}
  })
  .then(await function (response) {
      posts = response.data
  })
  console.log(posts);
  return posts;
  
}

export const addPost = async (title:string, description: string, token: string) => {
    await axios.post(createPost, {
      headers:{
        "Authorization" : `Bearer ${token}`},
      body:{
        title: title,
        description: description
      }
    })
    .then(await function(response) {
      console.log(response);
    })
}

const PostService = {
  GetAllPosts,
  addPost,
}

export default PostService 