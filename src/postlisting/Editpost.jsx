import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const Myeditpost= () => {
  const { id } = useParams();
  const [editpost, seteditpost] = useState(
    { title: '',
     body: ''
    });

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
       seteditpost(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  const handleTitleChange = (e) => {
   seteditpost({...editpost, title: e.target.value})
  };

  const handleBodyChange = (e) => {
    seteditpost({ ...editpost, body: e.target.value });
  };

  const handleSaveEdit = () => {
    // Add your logic to save the edited post, for example, using axios.put()
    console.log('Save edit post logic goes here:', editpost);
  };

  return (
    <div>
      <div className="container card">
       <strong> Titlt</strong> 
      <input
      type='text'
      placeholder='edit title'
      value={editpost.title}
      onChange={handleTitleChange}
      />
        <strong> Boday</strong> 
        <textarea 
          placeholder="Edit Body"
          value={editpost.body}
          onChange={handleBodyChange}
        />
        <p><strong>ID: {editpost.id}</strong></p>
        <button style={{ width: 150 }} onClick={handleSaveEdit}>
          Save Edit Post
        </button>
      </div>
    </div>
  );
}
