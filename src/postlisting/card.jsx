import { Mydata } from "./listdata";
import { Link } from "react-router-dom";
import React from 'react'
import { useState } from "react";


function MyCard() {
    const [post, setPost] = useState(Mydata)
    const [showConfirmation, setShowConfirmation] = useState(false);
    const handleDelete = (index) => {
        //  console.log(id)
        const update = post.filter(post => post.id !== index)
        setPost(update)
        console.log(update)
        setShowConfirmation(false);
    };

    const handleCancel = () => {
        // Handle cancellation logic or close the confirmation message
        console.log("Deletion canceled.");
        setShowConfirmation(false);
    };



    const showData = post.map(index => {
        const { id, title, body, head } = index;
        return (
            <div key={id} className="container card p-3">
                <h3>{title}</h3>
                <strong>{head}</strong>
                <p>{body}</p>
                <p>{id}</p>

                <p><Link to={`/ReadMore/${id}`}>Read more</Link></p>
                <button onClick={() => setShowConfirmation(true)}>Delete Post</button>
                {showConfirmation && (
                    <div>
                        <p>Are you sure you want to delete this blog post?</p>
                        <button onClick={() => handleDelete(id)}>Yes</button>
                        <button onClick={handleCancel}>No</button>
                    </div>
                )}



            </div>
        )
    })

    return (
        <>
            <section className="card-section">
                {showData}
            </section>
        </>
    )
}

export default MyCard;
