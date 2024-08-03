import { useState } from 'react'
import './App.css'
import TodoApp from './components/TodoApp'
import CreateTodo from './components/CreateTodo'

function App() {
  const [todos, setTodos] = useState([])
  return (
    <div className='app-container'>
    <CreateTodo setTodos={setTodos}/>
    <TodoApp todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
