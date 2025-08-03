'use client'
import { useEffect, useState } from 'react';
import { getPosts } from '../studio/sanity/lib/getPosts';
import PostsWithClientWrapper from "./components/PostWithClientWrapper";


const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getPosts();
      setPosts(data);
      setLoading(false); 
    };

    fetchData();
  }, []);



  return (
    <div className="container mx-auto mt-[50px] md:mt-[96px]">
        <PostsWithClientWrapper posts={posts} loading={loading} />

    </div>
  );
};

export default PostsList;
