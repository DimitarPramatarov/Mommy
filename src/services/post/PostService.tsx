import axios from 'axios';
import { getAllPostsUrl, createPostUrl, getPostDetailsUrl, updatePostUrl } from '../../constants/HttpCalls';

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

export const addPost = async (title:string, description: string, token: string) : Promise<string> => {

    let result: any;
    await axios.post<any>(createPostUrl, {
      title:title,
      description: description,
    }, 
    {
      headers:{"Authorization" : `Bearer ${token}`}
    })
    .then(await function(response) {
      result = response.data;
    })

    return result;
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

export const updatePost = async (token: string, postId:string, description:string) : Promise<boolean> => {
  let result: any;
  await axios.put<any[]>(updatePostUrl, {
    postId:postId,
      description: description,
    }, 
    {
      headers:{"Authorization" : `Bearer ${token}`}
    })
    .then(await function(response) {
      result = response.data
    })

    return result;
}

const PostService = {
  GetAllPosts,
  addPost,
  getPostDetails,
  myPosts,
  updatePost,
}

export default PostService 