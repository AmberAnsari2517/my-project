import React from 'react'
import { rightimg } from '../assets'
import MyCard from './card'

export const Banneer = () => {

  return (
    <div>
      <div className='row bg-light' style={{ marginBottom: 80 }}>
        <div className="content col-lg-5 bg-light" style={{ marginLeft: 30, padding: 80 }}>
          <h1>Artical for</h1>
          <h2 style={{ color: "green" }}>front-end-dev</h2>
          <p>Artical on web proformance, resposnive web design and more
          </p>
        </div>
        <div className="content col-lg-5 bg-light" style={{ padding: 10 }}>
          <img src={rightimg} style={{ height: 300, width: 500 }} />
        </div>
      </div>
    <MyCard/>

    </div>
  )
}
