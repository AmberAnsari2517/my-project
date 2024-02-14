import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Myeditpost = () => {
  const [errorMsg, setErrorMsg] = useState();
  const [loading, setLoading] = useState(true); // Initialize loading state to true
  const [editedData, setEditedData] = useState({ id: "", userId: '', title: '', body: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the post data from the server
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        const postData = response.data;
        // Set the fetched data into the state
        setEditedData(postData);
        setLoading(false); // Set loading to false after successful data fetch
      })
      .catch((error) => {
        console.error('Error fetching post:', error);
        setLoading(false); // Set loading to false if there's an error during data fetch
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when save button is clicked

    // Validation
    if (editedData.title.trim().length === 0 || editedData.title.trim().length <= 3) {
      setErrorMsg('Title should be more than three characters');
      setLoading(false); // Set loading to false when validation fails
      return;
    } else if (editedData.body.trim().length === 0 || editedData.body.trim().length <= 3) {
      setErrorMsg('Body should contain minimum three characters');
      setLoading(false); // Set loading to false when validation fails
      return;
    } else if (editedData.body.trim().length >= 500) {
      setErrorMsg('Body should contain maximum 500 characters');
      setLoading(false); // Set loading to false when validation fails
      return;
    } else if (editedData.userId.length === 0) {
      setErrorMsg('UserId should be a must not empty');
      setLoading(false); // Set loading to false when validation fails
      return;
    } else if (editedData.id.length === 0) {
      setErrorMsg('ID should be a must not empty');
      setLoading(false); // Set loading to false when validation fails
      return;
    } else if (editedData.id <= 0) {
      setErrorMsg('ID should be a positive number not a negative number');
      setLoading(false); // Set loading to false when validation fails
      return;
    } else {
      setErrorMsg('submit success');
    }

    // Perform save logic, update the post on the server
    axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, editedData)
      .then((response) => {
        console.log('Post updated successfully:', response.data);
        setLoading(false); // Set loading to false after successful update
        // Navigate back to the main post page
        navigate('/');
      })
      .catch((error) => {
        console.error('Error updating post:', error);
        setLoading(false); // Set loading to false if there's an error during update
      });
  };

  return (
    <div className="container">
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-success" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-12">
            <div className="card my-3">
              <div className="card-body">
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
                  <label htmlFor="editedUserId" className="form-label">User ID:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="editedUserId"
                    name="userId"
                    value={editedData.userId}
                    onChange={handleInputChange}
                    onKeyDown={(e) => e.key === 'e' && e.preventDefault()} // Prevent 'e' key
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="editedId" className="form-label">ID:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="editedId"
                    name="id"
                    value={editedData.id}
                    onChange={handleInputChange}
                    onKeyDown={(e) => e.key === 'e' && e.preventDefault()} // Prevent 'e' key
                  />
                </div>
                <button className="btn btn-primary" onClick={handleSave}>Save</button>
                <p>{errorMsg}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
