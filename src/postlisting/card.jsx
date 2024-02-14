
import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { Mycofirmation } from "./cofirmation";
import { MyForm } from './form';
import { Link } from 'react-router-dom';


const MyCard = () => {
    //withou axious
    //const [post, setPost] = useState(Mydata)
    // axios calling data
    const [start , setStart]=useState(0);
    const [limit, setLimit]=useState(10);
    const [loading , setLoading] = useState(true)
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`)
            .then((response) => {
                setPost(previouPost => previouPost.concat(response.data)); // Concatenating new data to previous data
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [start, limit]);

    const handleNextPage = () => {
        setStart(start + limit);
    }
     
   const  handelLimit =(e)=>{
    setLimit(parseInt(e.target.value))
    setStart(0)
   } 




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
        <div className='container fluid'>
        <p ><Link to={`/AddList/id`}>Add post</Link></p>
                <div>
                    <select value={limit} onChange={handelLimit}>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={30}>30</option>
                        <option value={40}>40</option>
                        <option value={50}>50</option>
                        <option value={60}>60</option>
                        <option value={70}>70</option>
                        <option value={80}>80</option>
                        <option value={90}>90</option>
                        <option value={100}>100</option>

                    </select>
                </div>
       
            {post.map((index) => {
                return (
                    <Mycofirmation index={index} post={post} setPost={setPost} />
                )
            })}
           <button className='btn btn-primary' onClick={handleNextPage}>Next Post</button>
           </div>
        
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
