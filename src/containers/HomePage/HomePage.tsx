import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import axiosApi from '../../axiosApi.ts';

const HomePage = () => {
  const [allPosts, setPost] = useState([])

  const fetchAllPostData = useCallback(async ()=>{
    const {data:value} = await axiosApi.get("/posts.json")

  },[])

  useEffect(() => {
    void fetchAllPostData()
  }, []);

  return (
    <div className="mt-5">
      <p>HomePage</p>
    </div>
  );
};

export default HomePage;