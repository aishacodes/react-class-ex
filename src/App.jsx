import React, { useState } from 'react'

import './App.css';

export const generateId = () => Math.random().toString(36).substring(2, 6)


  const App = () => {
    const [ persons, setPersons ] = useState([
      { name: 'Arto Hellas', phoneNumber: '08143694373'}
    ]) 
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
  
    const addNewContact = (e) => {
      e.preventDefault();

      if(Object.keys(persons).some(personId => 
        {
          const person = persons[personId]
         return person.name.toLowerCase() === newName.trim().toLowerCase()
        } ))
          {
        setNewName('')
        return window.alert(`${newName} is already added to phonebook` )
      }

      const newInput = {}
      newInput[generateId()] = {
          name : newName,
          phoneNumber : newNumber
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
        <form onSubmit={e => addNewContact(e)}>
          <div>
            name: <input value={newName}  onChange={e => setNewName( e.target.value ) } /> </div><br />
            <div>number: <input value = {newNumber} onChange={e => setNewNumber(e.target.value) } /></div>
         
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        <p>{
            Object.keys(persons).map(
              personId => {
               const person = persons[personId] 

              return <p key={personId}><span>{person.name}</span>&nbsp;<span>{person.phoneNumber}</span></p>
              }
              )
          }
        </p>
      </div>
    )
  }
  

export default App