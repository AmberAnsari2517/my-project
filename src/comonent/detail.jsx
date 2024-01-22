import React from 'react'
import { useParams } from 'react-router-dom' 

  

export const Detail = () => {
const{name} = useParams();


  return(
  <p>My name is {name}</p>
  )
}
