
import React from 'react';
import './App.css';
import { Route } from "react-router-dom"
import { Routes } from 'react-router-dom';
import { Nav } from './postlisting/nav';
import { Banneer } from './postlisting/banner';
import { Datashow } from './postlisting/showdata';
import { Readmore } from './postlisting/readmore';
import { Mydata } from './postlisting/listdata';





function App() {
  return (
    <div>

      <Nav />
      <Routes>
        <Route path='/' element={<Banneer />} />
        <Route path="/Datashow/:val" element={<Datashow />} />
      </Routes>


    </div>

  );
}

export default App;
