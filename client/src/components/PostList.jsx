import React, { useState, useEffect } from "react";
import { getAllPosts } from "../services/PostService";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    getAllPosts().then(allPosts => setPosts(allPosts)); 
  };

  useEffect(() => {
    getPosts();
  }, []); 



  return (  
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <img src={post.imageUrl} alt={post.title} />
          <p>
            <strong>{post.title}</strong>
          </p>
          <p>{post.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;