import React from 'react'

import style from './Home.module.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className={style.container}>
      <div className={style.img}></div>
      {/* <div className={style.homecontainer}>
        <h1 className={style.title}>Hi, I am Martín Conti</h1>
        <h2 className={style.subtitle}>Web Developer</h2>
        <div className={style.linkcontainer}>        
          <Link to='/projects' className={style.btnprojects}>Projects</Link>      
          <Link to='/contact' className={style.btncontact}>Contact</Link>        
        </div> 
      </div> */}
    </div>
  )
}
