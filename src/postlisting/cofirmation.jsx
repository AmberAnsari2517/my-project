import { Mydata } from "./listdata";
import { Link } from "react-router-dom";
import React from 'react'
import { useState } from "react";
import axios from "axios";


export const Mycofirmation = ({ index, post, setPost }) => {

    const [loading, setLoding] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const handleDelete = (index) => {
        setLoding(true);
        console.log("index", index)
        //using api use delte method (delte list)
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${index}`)
            .then((response) => {
                console.log("res---", response)
                setLoding(false)

            })
        const update = post.filter(post => post.id !== index)
        setPost(update)
        console.log(update)
        setShowConfirmation(false);
    };

    const handleCancel = () => {
        console.log("Deletion canceled.");
        setShowConfirmation(false);
    };

    return (
        <>



            <div key={index.id} className="container card p-3">
                <h3>Title:{index.title}</h3>  
                <p>Body: {index.body}</p>
                <p>Id:{index.id}</p>
                <p>UserId:{index.userId}</p>
                <p><Link to={`/ReadMore/${index.id}`}>Read more</Link></p>

                <div style={{ width: 200, marginRight: 20 }}>
                    <p><Link to={`/editpost/${index.id}`} type="btn"> Edit post</Link></p>
                    <button className="btn-success" onClick={() => setShowConfirmation(true)}>Delete Post</button>

                </div>
                {showConfirmation && (
                    <div>
                        <p>Are you sure you want to delete this blog post?</p>
                        <button className="btn-success" onClick={() => handleDelete(index.id)}>Yes</button>
                        <button className="btn-success" onClick={handleCancel}>No</button>

                    </div>
                )}
                {loading && (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border text-success" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                )}



            </div>



        </>
    )
}
