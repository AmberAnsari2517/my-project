import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Link, NavLink } from 'react-router-dom';
import Routers from './Routers';





function App() {
  return (
    <div>
      <div className='bg-secondary py-3'>
        <header className='container d-flex justify-content-between align-items-center'>
          <a href='#'>Logo</a>
          <nav>
            <ul className='list-unstyled d-flex justify-content-between align-item-center mb-0'>
              <li ><NavLink to='/'>Task1</NavLink ></li>
              <li><Link to='about' >Task2</Link></li>
              <li><Link to='question'>Task3</Link></li>
            </ul>
          </nav>
        </header>
        <Routers />
      </div>
    </div>

  );
}

export default App;
