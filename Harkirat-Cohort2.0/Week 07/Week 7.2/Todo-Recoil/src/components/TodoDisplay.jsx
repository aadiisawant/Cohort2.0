import React from 'react'
import { FilterTodos, todoAtom } from '../store/atoms/todoAtom';
import { useRecoilValue } from 'recoil';

function TodoDisplay() {
  const todo = useRecoilValue(FilterTodos);
  return (
    <div>
      {todo.length > 0?(
        todo.map(todo =>(
          <div key={todo.id}>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
          </div>
        ))
      ):(
        <p>No Matches Found</p>
      )}
    </div>
  )
}

export default TodoDisplay
