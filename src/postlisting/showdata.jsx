import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Datashow = () => {
  const [loading , setLoding] = useState(false)
  const [showdata, setshowdata] = useState([]);
  let { id } = useParams();
  const navigate=useNavigate()
  const handleBack = ()=>{
    navigate(-1)
  }
  // const param=useParams()
  // console.log(param,"params")
  useEffect(() => {
    setLoding(true)
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setLoding(false)
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
    <div className='container fluid'>    
      <div style={{marginBottom:10}}>   
      <button className='btn btn-success' onClick={handleBack}>
      <i class="fa-solid fa-arrow-left" ></i>
      </button>
      </div>   
      {/* <div key={id} > */}
      <div className="container card ">
        <h3>Title:{showdata.title}</h3>
        <p>Body:{showdata.body}</p>
        <p>id:{showdata.id}</p>      
        <p>userId:{showdata.userId}</p>
        {loading && (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border text-success" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                )}
      </div>  

      {/*  <p className="card-text">{state.userId}</p> */}
    </div>





  );
}
