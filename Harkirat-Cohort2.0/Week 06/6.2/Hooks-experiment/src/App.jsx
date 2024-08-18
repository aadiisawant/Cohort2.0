
import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { useEffect } from 'react';
import FetchTodo from './FetchTodo';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todos")
    .then((res)=>{
      setTodos(res.data.todos);
    })
  },[])
  return (
    <div>
      {/* {todos.map(todo => ( <Todo key={todo.id} title={todo.title} description={todo.description}/>
      ))} */}
      <h1>Fetch Todo with ID</h1>
      <FetchTodo />
    </div>
    
  )
}

function Todo({title , description}){
  return <div>
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
}

export default App
