import axios from 'axios';
import { getAllPosts } from '../../constants/HttpCalls';

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

const PostService = {
    GetAllPosts,
}


export default PostService 