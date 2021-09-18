import axios from 'axios';
import { getAllPostsUrl, createPostUrl, getPostDetailsUrl } from '../../constants/HttpCalls';

export const  GetAllPosts = async (token: string) : Promise<any[]> => {
    
  let posts: any;
  await axios.get<any[]>(getAllPostsUrl, {
    headers:{"Authorization" : `Bearer ${token}`}
  })
  .then(await function (response) {
      posts = response.data
  })
  return posts;
  
}

export const addPost = async (title:string, description: string, token: string) => {
    await axios.post(createPostUrl, {
      title:title,
      description: description,
    }, 
    {
      headers:{"Authorization" : `Bearer ${token}`}
    })
    .then(await function(response) {
      console.log(response);
    })
}

export const getPostDetails = async(postId: string, token: string) : Promise<any[]> => {
  let post: any;
  await axios.get<any[]>(getPostDetailsUrl, {
    params: {
      postId: postId
    },
    headers:{"Authorization" : `Bearer ${token}`}
  })
  .then(await function (response){
    post = response.data;
  })

  return post;
}

export const myPosts = async (token: string) => {
  await axios.get("url", {
    headers:{"Authorization" : `Bearer ${token}`}
  })
}

const PostService = {
  GetAllPosts,
  addPost,
  getPostDetails,
  myPosts,
}

export default PostService 