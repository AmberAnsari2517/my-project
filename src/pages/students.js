import React from 'react'
import { Link } from 'react-router-dom'
export const Students = () => {
    const student=['amber', 'maria', 'faiza']
  return (
    <>
     {student.map((data)=>
     <Link to={data}><h1>{data}</h1></Link>
     )}
    </>
   
  )
}
