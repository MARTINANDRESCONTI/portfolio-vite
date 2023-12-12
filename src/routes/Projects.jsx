import React from 'react'

import ProjectCard from '../components/ProjectCard'
import style from './Projects.module.css'
import data from '../cardsData'

export default function Projects() {
  return (
    <div className={style.container}>
      {data.map((e,ind) => {
        return (
          <ProjectCard 
            key={ind}
            img={e.img}
            title={e.title} 
            description={e.description} 
            website={e.website} 
            github={e.github}
          />    
        )
      })}
       
    </div>
  )
}
