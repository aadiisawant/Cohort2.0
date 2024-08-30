import React from 'react'

function TodoCreate() {
  return (
    <div>
      <input 
      placeholder='enter the title'
      name='title'
      required
      /><br>
      </br>
      <input 
      placeholder='enter the description'
      name='description'
      required
      />
    </div>
  )
}

export default TodoCreate
