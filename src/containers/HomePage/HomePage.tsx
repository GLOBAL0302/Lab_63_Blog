import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import axiosApi from '../../axiosApi.ts';
import { ApiPosts, Post } from '../../types.ts';
import Posts from '../../components/Posts/Posts.tsx';

const HomePage = () => {
  const [allPosts, setPost] = useState<Post[]>([])

  const fetchAllPostData = useCallback(async ()=>{
    const response = await axiosApi.get<ApiPosts | null>("/posts.json")

    const postsResponse = response.data
    if(postsResponse !==null){
      const posts = Object.keys(response.data).map((id:string)=>({
        ...response.data[id],
        id,
      }))

      setPost(posts)
    }

  },[])

  useEffect(() => {
    void fetchAllPostData()
  }, []);

  return (
    <div className="mt-5">
      <Posts posts={allPosts}/>
    </div>
  );
};

export default HomePage;