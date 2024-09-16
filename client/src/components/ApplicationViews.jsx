import React from "react";
import { Routes, Route, Navigate} from "react-router-dom";
import PostList from "./PostList";
import PostForm from "./PostForm";
import SearchPost from "./SearchPost.jsx";
import { PostDetails } from "./PostDetails.jsx";
import UserPosts from "./UserPosts.jsx";


const ApplicationViews = () => {

return (
     <Routes>
     
        <Route path="/" element= {<PostList />} />
        
        <Route path="/posts/add" element={<PostForm />} />

        <Route path="/posts/search" element={<SearchPost />} />
        
        <Route path="/posts/:id" element={<PostDetails /> } />

        <Route path="/users/:id" element={<UserPosts /> } />
                
        <Route path="*" element={<p>Whoops, nothing here...</p>} />
     
     </Routes>
    
    )
  

};

export default ApplicationViews;
