import React from 'react'
import { useRecoilValue } from 'recoil'
import { todoAtom } from '../store/atoms/todoAtom'

function TodoCreate() {
  return (
    <div>
      <input 
      placeholder='Title'
      name='title'
      required
      /><br>
      </br>
      <input 
      placeholder='Description'
      name='description'
      required
      /><br></br>
      <button>Add Todo</button>
    </div>
  )
}

export default TodoCreate
