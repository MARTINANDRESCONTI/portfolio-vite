import React from 'react'

export default function Knowledges({knowledge, source, icons}) {
  return (
    <div>
      <h2>{knowledge}</h2>
      <p>{source}</p>
      <p>{icons}</p>                
    </div>
  )
}
