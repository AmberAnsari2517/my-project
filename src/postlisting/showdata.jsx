import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const Datashow = () => {
  const [showdata, setshowdata] = useState([]);
  let{id} =useParams();
  // const param=useParams()
  // console.log(param,"params")
  useEffect(() => {

    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setshowdata(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  // withou api calling show daata
//  let {id} = useParams();
//  const postData= Mydata.find(postData => String (postData.id) === id)
  return (
    <div>
       {/* <div key={id} > */}
      <div className="container card ">
        <h3>{showdata.title}</h3>
        <p>{showdata.body}</p>
        <p>{showdata.id}</p>
       
        </div>

        {/*  <p className="card-text">{state.userId}</p> */}
      </div>
     
  
    


  );
}
