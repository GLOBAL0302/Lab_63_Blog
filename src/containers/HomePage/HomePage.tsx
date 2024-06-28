import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import axiosApi from '../../axiosApi.ts';
import { ApiPosts, Post } from '../../types.ts';
import Posts from '../../components/Posts/Posts.tsx';
import posts from '../../components/Posts/Posts.tsx';

const HomePage = () => {
  const [allPosts, setPost] = useState<Post[]>([]);

  const fetchAllPostData = useCallback(async () => {
    const response = await axiosApi.get<ApiPosts | null>('/posts.json');

    const postsResponse = response.data;
    if (postsResponse !== null) {
      const posts = Object.keys(response.data).map((id: string) => ({
        ...response.data[id],
        id,
      }));
      setPost(posts);
    }
  }, [posts]);

  useEffect(() => {
    void fetchAllPostData();
  }, [fetchAllPostData]);

  return allPosts.length > 0 ? (
    <div className="mt-5">
      <Posts posts={allPosts} />
    </div>
  ) : (
    <div className="p-5 bg-dark text-center">
      <h3 className="text-danger">No data</h3>
    </div>
  );
};

export default HomePage;
