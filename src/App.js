
import React from 'react';
import './App.css';
import { Route } from "react-router-dom"
import { Routes } from 'react-router-dom';
import { Datashow } from './postlisting/showdata';
import { Banneer } from './postlisting/banner';
import { Nav } from './postlisting/Navbar';



function App() {
  return (


    <div>
      {/* <MyRouters/> */}
    <Nav/> 
      
      <Routes>


        <Route path="/" element={<Banneer />} />
        <Route path='/ReadMore/:id' element={<Datashow />} />

      </Routes>
    </div>





  );
}

export default App;
