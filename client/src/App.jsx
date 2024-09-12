import React from "react";
import "./index.css";
import PostList from "./components/PostList";
import { BrowserRouter } from 'react-router-dom'
import PostForm from "./components/PostForm.jsx";

function App() {
 return (
<>
<BrowserRouter>
    <PostForm />
    <PostList />
  </BrowserRouter>
</>
)
}

export default App;
