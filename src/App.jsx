import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './routes/Home'
import About from './routes/About'
import Contact from './routes/Contact'
import Projects from './routes/Projects'
import Navbar from './components/navbar/Navbar'

import style from './App.module.css'

 
 export default function App() {
   return (
     <>       
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
     </>
   )
 }
