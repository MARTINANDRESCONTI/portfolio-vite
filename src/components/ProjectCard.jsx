import React from 'react'

import style from './ProjectCard.module.css'
import { IoLogoGithub } from "react-icons/io";


export default function Project({ img, title, description, website, github }) {
  return (
    <div className={style.mask}>

      <div className={style.container}>
        <div >
          <img className={style.img} src={img} />
        </div>
        <div className={style.containerbody}>
          <h2 className={style.title}>{title}</h2>
          <p className={style.description}>{description}</p>
          <div className={style.buttoncontainer}>
            <a className={style.website}
            href={website}
            >
              Website
            </a>
            <a className={style.github}
            href={github}
            >
              Go to 
              <IoLogoGithub className={style.icon}/>
            </a>
          </div>  
        </div>
      </div>
    </div>
  )
}
