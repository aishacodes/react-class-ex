import React from 'react'

function PersonForm({handleSubmit}) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
          <h3>Add a new contact</h3>
          <div>
            name: <input name="name" type="text" required /> </div><br />
            <div>
              number: <input name="phoneNumber" type="text" required />
            </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
    </div>
  )
}

export default PersonForm
