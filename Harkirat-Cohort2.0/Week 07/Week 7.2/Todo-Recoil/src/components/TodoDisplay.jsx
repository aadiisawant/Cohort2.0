import React from 'react'
import { todoAtom } from '../store/atoms/todoAtom';
import { useRecoilValue } from 'recoil';

function TodoDisplay() {
  const todo = useRecoilValue(todoAtom);
  return (
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
    </div>
  )
}

export default TodoDisplay
