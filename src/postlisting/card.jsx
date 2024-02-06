
import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { Mycofirmation } from "./cofirmation";
import { MyForm } from './form';


const MyCard = () => {
    //withou axious
    //const [post, setPost] = useState(Mydata)
    // axios calling data
    const [loading , setLoding] = useState(true)
    const [post, setPost] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setPost(response.data);
                setLoding(false)
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);




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
        <>
        <MyForm/>
       
            {post.map((index) => {
                return (
                    <Mycofirmation index={index} post={post} setPost={setPost} />
                )
            })}
        </>
    )


    // const [showConfirmation, setShowConfirmation] = useState(false);
    // const handleDelete = (index) => {
    //     const update = post.filter(post => post.id !== index)
    //     setPost(update)
    //     console.log(update)
    //     setShowConfirmation(false);
    // };

    // const handleCancel = () => {
    //     console.log("Deletion canceled.");
    //     setShowConfirmation(false);
    // };



    //  return(
    //  <>
    //     {post.map((list)=>{
    //         return (

    //             <div key={list.id} className="container card p-3">
    //                 <strong> {list.title}</strong>
    //                 <p>{list.body}</p>
    //                 <p>{list.id}</p>
    //                  <DataDetail list={list} setData={setData} />
    //                 {/* <p><Link to={`/ReadMore/${list.id}`}>Read more</Link></p>
    //                 <button onClick={() => setShowConfirmation(true)}>Delete Post</button>
    //                 {showConfirmation && (
    //                     <div>
    //                         <p>Are you sure you want to delete this blog post?</p>
    //                         <button className="btn-primary" onClick={() => handleDelete(list.id)}>Yes</button>
    //                         <button className="btn-primary" onClick={handleCancel}>No</button>
    //                     </div>
    //                 )} */}



    //             </div>
    //         )

    //     })}

    //  </>
    //  )

}

export default MyCard;
