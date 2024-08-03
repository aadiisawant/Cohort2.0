import React, { useEffect, useState } from 'react'
import UpdateTodo from './UpdateTodo';

function TodoApp({todos, setTodos}) {
    const [currentTodo, setCurrentTodo] = useState({});
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
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
      fetchTodos();
    }, [setTodos]);
  
    async function deleteTodo(id){
      try {
        const response = await fetch(`http://localhost:3000/todos/delete/${id}`, {
          method: "DELETE"
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }else{
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
        alert(`Todo updated...`)
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
    }

  return (
    <div>
      {todos.length ? (
        todos.map((todo) => (
          <div key={todo.id}>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
            <button>{todo.completed ? 'Done' : 'Mark as done'}</button>
            <button onClick={() => { setCurrentTodo(todo); setIsEdit(true); }}>Update</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No todos available.</p>
      )}
      { isEdit && (<UpdateTodo 
      currentTodo={currentTodo}
      setTodos={setTodos}
      setIsEdit={setIsEdit}
      />)}
    </div>
  )
}

export default TodoApp
