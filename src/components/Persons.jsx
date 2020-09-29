import React from 'react'

function Persons({persons}) {
  return (
    <div>
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

export default Persons
