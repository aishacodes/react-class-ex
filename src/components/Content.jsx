import React from 'react'
import Part from './Part'

function Content({parts, exercise}) {

  
  return (
    <div>
      <Part parts = {part1} exercise= {exercises1}/>
      <Part parts = {part2} exercise= {exercises2}/>
      <Part parts = {part3} exercise= {exercises3}/>
    </div>
  )
}

export default Content
