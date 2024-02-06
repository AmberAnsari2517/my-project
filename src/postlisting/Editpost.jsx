import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const Myeditpost = () => {
  const [saveinput, setsaveinput] = useState(null);
  const [inputEditing, setinputEditing] = useState(false);// input edit

  const [editedData, setEditedData] = useState({ title: '', body: '', userId: '', id: '' });

  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setinputEditing(response.data);
        setEditedData({ title: response.data.title,
           body: response.data.body,
            userId: response.data.userId,
             id: response.data.id });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);
  

//handle edit post
  const handleEditToggle = () => {
   setinputEditing(!inputEditing);
  };
//post converting to input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({ //setEditedData pass data input field
      ...prevData,
      [name]: value,
    }));
  };
//handel save edting data than  save back post
  const handleSave = () => {
    // Perform save logic, update the post on the server
    // For simplicity, this example only updates the local state
    // You should make an API request to update the post on the server

    setsaveinput(editedData); //editedData state pass data setsaveinput
    setinputEditing(false);  //input field false
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card my-3">
            <div className="card-body">
              {/* if condition */}
              {inputEditing ? (
                <>
                  <h2>Edit Post</h2>
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
                    <label htmlFor="editedUserId" className="form-label">ID:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="editedid"
                      name="id"
                      value={editedData.id}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="editedUserId" className="form-label">User ID:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="editedUserId"
                      name="userId"
                      value={editedData.userId}
                      onChange={handleInputChange}
                    />
                  </div>
                  <button className="btn btn-primary" onClick={handleSave}>Save</button>
                </>
              ) 
              : (
                <>
                  <h2 className="card-title">{saveinput?.title}</h2>
                  <p className="card-text">{saveinput?.body}</p>
                  <p className="card-text">Post ID: {saveinput?.id}</p>
                  <p className="card-text">User ID: {saveinput?.userId}</p>
                  <button className="btn btn-warning" onClick={handleEditToggle}>Edit Post</button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
