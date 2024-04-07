import React from 'react'

import style from './ProjectCard.module.css'
import { IoLogoGithub } from "react-icons/io";

export default function Project({ img, title, description, website, github }) {
  return (
    <div className={style.container}>
      <div >
        <a href={website} target='_blank' >
          <img className={style.img} src={img} />
          <div className={style.mask}>
          </div>
        </a>
      </div>
      <div className={style.containerbody}>
        <h2 className={style.title}>{title}</h2>
        <p className={style.description}>{description}</p>
        <div className={style.buttoncontainer}>
          <a className={style.website}
          href={website}
          target='_blank'
          >
            Website
          </a>
          <a className={style.github}
          href={github}
          target='_blank'
          >
            Go to 
            <IoLogoGithub className={style.icon}/>
          </a>
        </div>  
      </div>
    </div>
  )
}
