import React from "react";
import "./index.css";
import PostList from "./components/PostList";
import { BrowserRouter } from 'react-router-dom'
import PostForm from "./components/PostForm.jsx";
import SearchPosts from "./components/SearchPost.jsx";

function App() {
 return (
<>
<BrowserRouter>
    <PostForm />
    <SearchPosts />
    <PostList />
  </BrowserRouter>
</>
)
}

export default App;
