import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Detail } from './detail';




import { Link, NavLink } from 'react-router-dom';
import { Notdefine } from './Notdefine';
import Task1 from '../pages/Task1'
import Task3 from '../pages/Task3'
import { Students } from '../pages/students';
import ItemList from '../practice/itemdata';
import ItemDetail from '../practice/itemdetai';


const MyRouters = () => {
  return (
    <div>
      <div className='bg-secondary py-3'>
        <header className='container d-flex justify-content-between align-items-center'>
          <a href='/' style={{ textDecoration: "none", color: 'red', fontSize: 20 }}>Logo</a>
          <nav>
            <ul className='list-unstyled d-flex justify-content-between align-items-center mb-0'
            >
              {/* <li className='me-3' ><NavLink to='/'>Home</NavLink ></li>
              <li className='me-3'><Link to='/about' style={{ textDecoration: "none", color: "red", fontSize: 20 }}>About</Link></li>
              <li className='me-3'><Link to='/contect' style={{ textDecoration: "none", color: "red", fontSize: 20 }}>Contect</Link></li>
              <li className='me-3'><Link to="fake/" style={{ textDecoration: "none", color: 'red', fontSize: 20 }}>Fake</Link></li>
              <li className='me-3'><Link to="students/" style={{ textDecoration: "none", color: 'red', fontSize: 20 }}>Student Detail</Link></li> */}
              <li className='me-3'><Link to="item/" style={{ textDecoration: "none", color: 'red', fontSize: 20 }}>Detail</Link></li>


            </ul>
          </nav>
        </header>
      </div>

      <Routes>
        {/* <Route path='/' element={<Navigate to='/about' />} />
        <Route path='about' element={<Task1 />} />
        <Route path='contect' element={<Task3 />} />
        <Route path='*' element={<Notdefine />} />
        <Route path='/students' element={<Students />} />
        <Route path='/students/:name' element={<Detail />} /> */}
        <Route path='/item' element={<ItemList />} />
        <Route path='/item/:key' element={<ItemDetail />} />


      </Routes>
    </div>
  )
}

export default MyRouters