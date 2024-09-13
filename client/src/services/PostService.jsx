import React from "react";

const baseUrl = 'https://localhost:5001/api/Post';

export const getAllPosts = () => {
  return fetch(baseUrl) 
    .then((res) => res.json())
};

export const addPost = (singlePost) => { 
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(singlePost),
  });
};

export const searchPosts = (query, sortDesc) => {
  return fetch(`https://localhost:5001/api/Post/search?q=${query}&sortDesc=${sortDesc}`)
  .then((res) => res.json())
};