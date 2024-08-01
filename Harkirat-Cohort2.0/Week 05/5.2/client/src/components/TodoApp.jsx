import React, { useState } from 'react'

function TodoApp() {
    const [todos, setTodos] = useState([]);
    async function fetchTodos(){
        try {
            const response = await fetch('http://localhost:3000/todos/gettodos');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setTodos(data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }
  return (
    <div>
      <button onClick={fetchTodos}>Fetch</button>
      { todos && todos.map((todo) => {
        return <div key={todo.id}>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
            <button>{todo.completed ? 'Done' : 'Mark a done'}</button>
        </div>
      })}
    </div>
  )
}

export default TodoApp
