import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './work/Task2'
import About from './work/Task1'
import Contact, { Task4 } from './work/Task3'
import { Qus1 } from './work/Qno1'
import Task1 from './work/Task1'
import Task3 from './work/Task3'
import Task2 from './work/Task2'
import { Qno2 } from './work/Qno2'



const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Task1 />} />
            <Route path='about' element={<Task2 />} />
            <Route path='question' element={<Task3 />} />

        </Routes>
    )
}

export default Routers