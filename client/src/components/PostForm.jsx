import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { addPost, getAllPosts } from '../services/PostService.jsx';
import { useNavigate } from 'react-router-dom';

const PostForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    imageUrl: '',
    caption: '',
    userProfileId: '',
    dateCreated: new Date().toISOString()
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    addPost(formData);
    getAllPosts().then(() => {
      setFormData({
        title: '',
        imageUrl: '',
        caption: '',
        userProfileId: '',
        dateCreated: new Date().toISOString()
      });
      window.alert("Post added successfully");
      navigate("/");
    });
    
  };

  return (
    <>
    <h1 className='newPost-header' style={{ marginBottom: '3rem'}}>Add A New Post</h1>
    <Form onSubmit={(e) => { handleSubmit(e); } }>
      <FormGroup>
        <Label for="title">Title</Label>
        <Input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
          required />
      </FormGroup>
      <FormGroup>
        <Label for="imageUrl">Image URL</Label>
        <Input
          type="text"
          name="imageUrl"
          id="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          required />
      </FormGroup>
      <FormGroup>
        <Label for="caption">Caption</Label>
        <Input
          type="text"
          name="caption"
          id="caption"
          value={formData.caption}
          onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="userProfileId">User Profile ID</Label>
        <Input
          type="number"
          name="userProfileId"
          id="userProfileId"
          value={formData.userProfileId}
          onChange={handleChange}
          required />
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
    </>
  );
};

export default PostForm;
