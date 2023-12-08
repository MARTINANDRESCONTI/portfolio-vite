import React from 'react'

import style from './About.module.css'
import Me from '../assets/Me.jpg'
import knowledges from '../knowledges' 
import Knowledge from '../components/Knowledge'



export default function About() {
 
  const knowArray = knowledges.map(e => {
    return <Knowledge className={style.knowcontainer}
              key={e.source}
              source={e.source}
              knowledge={e.knowledge}
              icons={e.icons}    
    />
  })

  return (
    <div className={style.container}>
      <div className={style.aboutcontainer}>
        <div className={style.imgcontainer}>
          <div className={style.mask}>Full Stack</div>
          <img className={style.img} src={Me} alt='photo of me' />
          <h2 className={style.hi}>Hi, I'm<br/>Martín Conti</h2>
        </div>
        <p>
          I'm a Full Stack web developer.<br></br>
          I’ve always been curious about understanding new research areas and new technologies. And I like to be self-taught.
        </p>
      </div>
      <div className={style.knowledgecontainer}>
        {knowArray}
      </div>
    </div>
  )
}
