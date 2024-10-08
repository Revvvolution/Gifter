import React, { useState } from 'react';
import { searchPosts } from '../services/PostService.jsx';
import { Post } from "./Post";


const SearchPost = () => {
  const [query, setQuery] = useState('');
  const [sortDesc, setSortDesc] = useState(false);
  const [results, setResults] = useState([]);

  const handleSearch = (q, order) => {
    
        searchPosts(q, order).then((post) => (
           setResults(post)
        ))
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search posts..."
      />
      <label>
        <span style={{marginLeft: '9px'}}></span>
        <input
          type="checkbox"
          checked={sortDesc}
          onChange={() => setSortDesc(!sortDesc)}
        />
        Sort Descending
      </label>
      <button 
        style={{backgroundColor: 'lightblue', margin: '8px 0 10px 8px'}} 
        onClick={() => {handleSearch(query, sortDesc)}}
        >Search</button>
      <div className="container">
        <div className="row justify-content-center">
            <div className="cards-column">
            {results.map((post) => (
                <Post key={post.id} post={post} />
            ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPost;
