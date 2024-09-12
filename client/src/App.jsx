import React from "react";
import "./index.css";
import PostList from "./components/PostList";
import { BrowserRouter } from 'react-router-dom'

function App() {
 return (
<>
<BrowserRouter>
    <PostList />
  </BrowserRouter>
</>
)
}

export default App;
