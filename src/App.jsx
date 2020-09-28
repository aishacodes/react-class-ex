import React, { useState } from 'react'

import './App.css';

export const generateId = () => Math.random().toString(36).substring(2, 6)


  const App = () => {
    const [ persons, setPersons ] = useState([
      { name: 'Arto Hellas' }
    ]) 
    const [ newName, setNewName ] = useState('')
  
    const addName = (e) => {
      console.log(e)
      e.preventDefault()
      const newInput = {}
      newInput[generateId()] = {
          name : newName
      }
      setPersons({
        ...persons,
        ...newInput
        
      })
      setNewName('')
    }



    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={e => addName(e)}>
          <div>
            name: <input value={newName}  onChange={e => setNewName( e.target.value ) } />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        <p>{
            Object.keys(persons).map(
              personId => {
               const person = persons[personId] 

              return <p key={personId}>{person.name}</p>
              }
              )
          }
        </p>
      </div>
    )
  }
  

export default App