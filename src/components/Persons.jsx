import React from 'react'

function Persons({persons}) {
  return (
    <div>
       <p>{
          persons.map(person => <p key={person.id}><span>{person.name}</span>&nbsp;<span>{person.phoneNumber}</span></p>)
          }
        </p>
    </div>
  )
}

export default Persons
