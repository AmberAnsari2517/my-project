import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Myeditpost = () => {
  const navigate=useNavigate()
  const handleBack = ()=>{
    navigate(-1)

  }
  const [loading , setLoding] = useState(true)
  const [inputEditing, setinputEditing] = useState(false);
  const [editedData, setEditedData] = useState({id:"", userId: '', title: '', body: '' });
  const {id} =useParams();
 
  useEffect(() => {
    // Fetch the post data from the server
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        const postData = response.data;
        // Set the fetched data into the state
        setEditedData(postData);
        setLoding(false)
      })
      .catch((error) => {
        console.error('Error fetching post:', error);
      });
  }, [id]);
  

//handle edit post
  const handleEditToggle = () => {
   setinputEditing(!inputEditing);
  };
//post converting to input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Perform save logic, update the post on the server
    axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, editedData)
      .then((response) => {
        console.log('Post updated successfully:', response.data);
        // Update the post in the local state
        
        setinputEditing(false); // Exit edit mode
        // You don't need to do anything with useParams(id) here, 
        // as you're already updating the post with the correct id.
      })
      .catch((error) => {
        console.error('Error updating post:', error);
      });
  };
  
  if (loading){
    return (
        <div class="d-flex justify-content-center">
       <div class="spinner-border text-success" role="status">
          <span class="sr-only"></span>
        </div>
      </div>
  )
 }

return (
  <div className="container">
      <div style={{marginBottom:10}}>
     
     <button className='btn btn-success' onClick={handleBack}>
     <i class="fa-solid fa-arrow-left" ></i>
     </button>
     </div>
    <div className="row">
      <div className="col-md-12">
        <div className="card my-3">
          <div className="card-body">
            {/* if condition */}
            {inputEditing ? (
              
              
        <>
          <h3>Edit Post</h3>
          <div className="mb-3">
            <label htmlFor="editedTitle" className="form-label">Title:</label>
            <input
              type="text"
              className="form-control"
              id="editedTitle"
              name="title"
              value={editedData.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="editedBody" className="form-label">Body:</label>
            <textarea
              className="form-control"
              id="editedBody"
              name="body"
              value={editedData.body}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="editedBody" className="form-label">Id:</label>
            <textarea
              className="form-control"
              id="editid"
              name="id"
              value={editedData.id}
              onChange={handleInputChange}
            />
          </div>
          <button className="btn btn-primary" onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          {/* Display fetched data */}
          <h1>Title:</h1><p>{editedData.title}</p>
          <p><h3>Body:</h3>{editedData.body}</p>
          <p><h3>Id:</h3>{editedData.id}</p>
          <button className="btn btn-primary" onClick={() => handleEditToggle(true)}>Edit</button>
        </>
      )}
          </div>
        </div>
      </div>
    </div>
  </div>
);
}
