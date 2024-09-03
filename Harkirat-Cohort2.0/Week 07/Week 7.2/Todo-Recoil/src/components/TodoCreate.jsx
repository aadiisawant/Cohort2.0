import React, { useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { todoAtom } from '../store/atoms/todoAtom'

function TodoCreate() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const setTodos = useSetRecoilState(todoAtom);

  const handleAddTodo = ()=>{
    if(title.trim() && description.trim()){
      setTodos((oldTodos) => [
        ...oldTodos,
        {
          id: Date.now(),
          title,
          description,
          completed: false,
        }
      ]);
      setTitle("");
      setDescription("")
    }
  }
  return (
    <div>
      <input 
      placeholder='Title'
      name='title'
      onChange={(e) => setTitle(e.target.value)}
      value={title}
      required
      /><br>
      </br>
      <input 
      placeholder='Description'
      name='description'
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      required
      /><br></br>
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  )
}

export default TodoCreate
