import React, { useEffect, useState } from 'react'
import UpdateTodo from './UpdateTodo';
import './TodoApp.css'

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
        alert(`Todo deleted...`)
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
    }

    async function toggleComplete(todo){
      try{
      const updatedTodo = {...todo, completed: !todo.completed};
      const response = await fetch(`http://localhost:3000/todos/update/${todo.id}`,
        {
          method: "PUT",
          body: JSON.stringify(updatedTodo),
          headers: {
            "content-type":'application/json',
          }
        }
      )
      if(!response.ok){
        throw new Error('Network response was not ok');
      }else{
        setTodos(prevTodos => prevTodos.map(t => t.id === todo.id ? updatedTodo: t))
      }
    }
    catch(error){
      console.error(error)
    }
    }
  return (
    <div className='todos-container'>
      {todos.length ? (
        todos.map((todo) => (
          <div key={todo.id} className='show-todos'>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
            <div className='crud-btns'>
            <button onClick={()=> toggleComplete(todo)}>{todo.completed ? 'Done' : 'Mark as done'}</button>
            <button onClick={() => { setCurrentTodo(todo); setIsEdit(true); }}>Update</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
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
