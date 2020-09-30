import React, { useState, useEffect } from 'react'
import Search from './components/Search'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import './App.css';
import Axios from 'axios';

export const generateId = () => Math.random().toString(36).substring(2, 6)


  const App = () => {
    const [ persons, setPersons ] = useState([
      // {id:1, name: 'Arto Hellas', phoneNumber: '040-123456' },
      // {id:2, name: 'Ada Lovelace', phoneNumber: '39-44-5323523' },
      // {id:3, name: 'Dan Abramov', phoneNumber: '12-43-234345' },
      // {id:4, name: 'Mary Poppendieck', phoneNumber: '39-23-6423122' }
    ]) 
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ filtered, setFiltered ] = useState('')




    const addNewContact = (e) => {
      e.preventDefault();

      if(persons.some(person => person.name.toLowerCase() === newName.trim().toLowerCase()))
         {
        setNewName('')
        setNewNumber('')
        return window.alert(`${newName} is already added to phonebook` )
      }
      const newInput = {
          id: generateId(),        
          name : newName,
          phoneNumber : newNumber
      }
      setPersons(persons =>[...persons, newInput])
      setNewName('')
      setNewNumber('')
    }

    const search = (ev) => {
      console.log(ev)
      ev.preventDefault()
      const query = ev.target.value
      if(!query.trim()) setFiltered(()=> null)
      setFiltered(
        persons.filter(person => {
         return person.name.toLowerCase().trim().indexOf(query.trim().toLowerCase()) >-1
        })
      )
  
    }

    useEffect(() => {
      
      Axios.get('http://localhost:3030/persons')
            .then(res=>{
              setPersons(res.data)
            })
            .catch(err => alert(err))

    }, [])


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