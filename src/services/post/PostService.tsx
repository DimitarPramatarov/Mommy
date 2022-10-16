import axios from 'axios';
import { 
  getAllPostsUrl, createPostUrl,
   getPostDetailsUrl, updatePostUrl,
    myPostsUrl, deletePostUrl, getUserPostUrl } from '../../constants/HttpCalls';

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

export const getMyPosts = async (token: string): Promise<any[]> => {

  let result: any;

  await axios.get(myPostsUrl, {
    headers:{"Authorization" : `Bearer ${token}`}
  })
  .then(await function (response) {
    result = response.data;
  })

  return result;
}

export const getUserPosts = async (token: string, username: string): Promise<any[]> => {
  
  let result: any;

  await axios.get(getUserPostUrl, {
    
    params: {
      token: token,
      username: username,
    },
    headers:{"Authorization": `Bearer ${token}`}
  })
  .then(await function (response){
    result = response.data;
  })

  return result;
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

export const deletePost = async (token:string, postId:string) : Promise<boolean> => {
  let result: any;
  await axios.post(deletePostUrl, {
    id: postId,
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
  getMyPosts,
  updatePost,
  deletePost,
}

export default PostService 