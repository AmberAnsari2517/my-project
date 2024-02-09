import React from 'react'
import { rightimg } from '../assets'
import { Mydata } from './listdata'
import MyCard from './card'
export const Mybaner = () => {

  return (
    <div className=' bg-light' >
      <div className='row  container' >
        <div className="content col-lg-6 bg-light" style={{ padding: 60 }}>
         <div style={{text:'bold'}}>
         <h1>Artical for</h1>
          <h2 style={{ color: "green" , text:'bold'}}>front-end-dev</h2>
         </div>
          <h3 style={{color:'gray'}}>Artical on web proformance, resposnive web design and more
          </h3>
        </div>
        <div className="content col-lg-6 bg-light" style={{ }}>
          <img src={rightimg} style={{ height: 400, width: 650 }} />
        </div>
      </div>
      <MyCard />

    </div>
  )
}
