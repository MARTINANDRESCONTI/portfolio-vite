import React from 'react'

import style from './Knowledge.module.css'

export default function Knowledges({knowledge, source, icons}) {
  
  return (
    <div className={style.mask}>
      <div className={style.container}>
        <h2>{source}</h2>
        <ul className={style.knows}>
          {knowledge.map(e => <li key={e}>{e}</li>)}
        </ul>
        <ul className={style.icons}>
          {icons.map((e,ind) => <li key={ind}>{e}</li>)}
        </ul>          
      </div>
    </div>
  )
}
