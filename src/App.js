
import React from 'react';
import './App.css';
import { Route } from "react-router-dom"
import { Routes } from 'react-router-dom';
import { Datashow } from './postlisting/showdata';
import { Mybaner } from './postlisting/banner';
import { Nav } from './postlisting/Navbar';
import { Fetch } from './postlisting/Fetch';



function App() {
  return (


    <div>
      {/* <MyRouters/> */}
    <Nav/> 
      
      <Routes>


        <Route path ='/' element ={<Mybaner/>}/>
        <Route path='/ReadMore/:id' element={<Datashow />} />

      </Routes>
      {/* <Fetch/> */}
    </div>





  );
}

export default App;
