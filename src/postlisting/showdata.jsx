import React from 'react'
import { useParams } from 'react-router-dom';
import { Mydata } from './listdata';

export const Datashow = () => {
 let {id} = useParams();
 const postData= Mydata.find(postData => String (postData.id) === id)
  return (
    <div>
       <div key={id} >
      <div className="container card ">
        <h3>{postData.title}</h3>
        <p>{postData.body}</p>
       
        </div>

        {/*  <p className="card-text">{state.userId}</p> */}
      </div>
     
    </div>
    


  );
}
