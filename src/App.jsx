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
    const [ filtered, setFiltered ] = useState('')
    



    const addNewContact = (e) => {
      e.preventDefault();
      let newName = e.target.name.value
      let  newNumber = e.target.phoneNumber.value
          console.log(newName)
      if(persons.some(person => person.name.toLowerCase().trim() === newName.trim().toLowerCase()))
         {
          window.alert(`${newName} has been added to phonebook before`)
          e.target.reset()
          return null
                   
      }
      const newInput = {
          id: generateId(),        
          name : newName,
          phoneNumber : newNumber
      }
      Axios.post('http://localhost:3030/persons',newInput)
            .then( res => {
              newName =''
              newNumber=''
              setPersons(persons.concat(res.data))
              alert('Contact has been added successfully!')
            })
            .catch(err => alert(err))


      // setPersons(persons =>[...persons, newInput])
      // setNewName('')
      // setNewNumber('')
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
        <PersonForm handleSubmit = {e => addNewContact(e)} />
        <h2>Numbers</h2>
       <Persons persons = {filtered || persons} />
      </div>
    )
  }
  

export default App