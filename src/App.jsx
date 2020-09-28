import React from 'react';
import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'

import './App.css';

function App() {
    const course = 'Half Stack application development'

    const part1 = {
      name: 'Fundamentals of React', 
      exercises: 10
    }
    const part2 ={
        name:'Using props to pass data',
        exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }

    return (
      <div>
        <Header courses = { course } />
        <Content />
        <Total ex1={exercises1} ex2 = {exercises2} ex3 = {exercises3} />
        
      </div>
    )
}

export default App