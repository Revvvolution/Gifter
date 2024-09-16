import React, { useState, useEffect } from "react";
import { getPostsByUserId } from "../services/PostService";
import { Post } from "./Post";
import { useParams } from "react-router-dom";

const UserPosts = () => {
  const [userPosts, setUserPosts] = useState([]);
  const { id } = useParams();

  const getPosts = () => {
    getPostsByUserId(id).then(allUserPosts => setUserPosts(allUserPosts)); 
  };

  useEffect(() => {
    getPosts();
  }, []); 
  return (
    <>
    <h1 style={{margin: '2rem 0 2rem 0'}}>{userPosts[0]?.userProfile.name}'s Posts</h1>
    <div className="container">
      <div className="row justify-content-center">
        <div className="cards-column">
          {userPosts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default UserPosts;