import React from 'react'
import { useLocation } from 'react-router-dom'

export const Datashow = () => {
  const { state } = useLocation()
  console.log('location',useLocation())
  console.log(state)

  return (
    <div>
      <div className="container card ">
       <strong> {state.key.title}</strong>
        <h2 >{state.key.head}</h2>
        <p>{state.key. body}</p>
        <p>{state.key.id}</p>
        <p>{state.key2}</p>

        {/*  <p className="card-text">{state.userId}</p> */}
      </div>
    </div>


  );
}
