import React, { useEffect, useState } from 'react'
import UpdateTodo from './UpdateTodo';

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [currentTodo, setCurrentTodo] = useState({});
    const [isEdit, setIsEdit] = useState(false);

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
    useEffect(() => {
      fetchTodos();
  }, []);
    async function deleteTodo(id){
      try {
        const response = await fetch(`http://localhost:3000/todos/delete/${id}`, {
          method: "DELETE"
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }else{
        fetchTodos()
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
    }

  return (
    <div>
      {/* <button onClick={fetchTodos}>Fetch</button> */}
      { todos && todos.map((todo) => {
        return <div key={todo.id}>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
            <button>{todo.completed ? 'Done' : 'Mark a done'}</button>
            <button onClick={() => {
              setCurrentTodo(todo);
              setIsEdit(true);
            }}>update</button>
            <button onClick={()=> deleteTodo(todo.id)}>delete</button>
        </div>
      })}
      { isEdit && <UpdateTodo currentTodo={currentTodo}/>}
    </div>
  )
}

export default TodoApp
