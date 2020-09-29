import React, { useState } from 'react'
import Search from './components/Search'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import './App.css';

export const generateId = () => Math.random().toString(36).substring(2, 6)


  const App = () => {
    const [ persons, setPersons ] = useState([
      { name: 'Arto Hellas', phoneNumber: '040-123456' },
      { name: 'Ada Lovelace', phoneNumber: '39-44-5323523' },
      { name: 'Dan Abramov', phoneNumber: '12-43-234345' },
      { name: 'Mary Poppendieck', phoneNumber: '39-23-6423122' }
    ]) 
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ filtered, setFiltered ] = useState('')




    const addNewContact = (e) => {
      e.preventDefault();

      if(Object.keys(persons).some(personId => 
        {
          const person = persons[personId]
         return person.name.toLowerCase() === newName.trim().toLowerCase()
        } ))
          {
        setNewName('')
        setNewNumber('')
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
      setNewNumber('')
    }

    const search = (ev) => {
      console.log(ev)
      ev.preventDefault()
      const query = ev.target.value
      if(!query.trim()) setFiltered(()=> null)
  
      // setFiltered(() => Object.keys(persons).filter( personId => {
      //     const person = persons[personId]
      //     console.log(query)
      // return person.name.toLowerCase().indexOf(query.toLowerCase().trim()) > -1
  
      // }))

      const filtered = {}
    Object.keys(persons).forEach(personId => {
      const person = persons[personId]

      if (person.name.trim().toLowerCase().indexOf(query.trim().toLowerCase()) > -1) 
      filtered[personId] = person
    })

    if (Object.keys(filtered).length) {
      setFiltered(filtered);
    } else {
      setFiltered(null);
    }
  
    }

    return (
      <div>
        <h2>Phonebook</h2>
        <Search handlesearch = {search}/>
        <PersonForm nameval={newName} numval= {newNumber} handleSubmit = {e => addNewContact(e)} handleNumberChange={e => setNewNumber(e.target.value) } handleNameChange={e => setNewName( e.target.value ) } />
        <h2>Numbers</h2>
       <Persons persons = {filtered || persons} />
      </div>
    )
  }
  

export default App