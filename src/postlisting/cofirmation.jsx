import { Mydata } from "./listdata";
import { Link } from "react-router-dom";
import React from 'react'
import { useState } from "react";
import axios from "axios";


export const Mycofirmation = ({ index, post, setPost }) => {


    const [showConfirmation, setShowConfirmation] = useState(false);
    const handleDelete = (index) => {
        console.log("index", index)
        //using api use delte method (delte list)
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${index}`)
            .then((response) => {
                console.log("res---", response)

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
                <h3>{index.title}</h3>
                <strong>{index.head}</strong>
                <p>{index.body}</p>
                <p>{index.id}</p>
                <p>{index.userId}</p>
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



            </div>



        </>
    )
}
