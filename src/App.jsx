import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import Projects from './views/Projects'
import Navbar from './components/Navbar'

import style from './App.module.css'
 
 export default function App() {
   return (
     <div className={style.container}>       
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>        
     </div>
   )
 }
