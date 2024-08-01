import { useState } from 'react'
import './App.css'
import TodoApp from './components/TodoApp'
import CreateTodo from './components/CreateTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CreateTodo />
      <TodoApp />
    </>
  )
}

export default App
