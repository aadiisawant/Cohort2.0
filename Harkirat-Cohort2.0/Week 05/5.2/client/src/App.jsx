import { useState } from 'react'
import './App.css'
import TodoApp from './components/TodoApp'
import CreateTodo from './components/CreateTodo'

function App() {
  return (
    <>
    <CreateTodo />
    <TodoApp />
    </>
  )
}

export default App
