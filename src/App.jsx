import React from 'react';
import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'

import './App.css';

function App() {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
  
    return (
      <div>
        <Header courses = { course } />
        <Content parts = {part1} exercise= {exercises1} />
        <Content parts = {part2} exercise= {exercises2} />
        <Content parts = {part3} exercise= {exercises3} />
        <Total ex1={exercises1} ex2 = {exercises2} ex3 = {exercises3} />
        
      </div>
    )
}

export default App