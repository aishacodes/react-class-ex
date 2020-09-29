import React from 'react'

function PersonForm({handleSubmit, handleNumberChange, handleNameChange, nameval, numval}) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
          <h3>Add a new contact</h3>
          <div>
            name: <input value={nameval} type="text"  onChange={handleNameChange} /> </div><br />
            <div>number: <input value = {numval} type="text" onChange={handleNumberChange} /></div>
         
          <div>
            <button type="submit">add</button>
          </div>
        </form>
    </div>
  )
}

export default PersonForm
