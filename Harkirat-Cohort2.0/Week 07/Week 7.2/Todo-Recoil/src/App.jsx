
import { RecoilRoot } from 'recoil'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoDisplay from './components/TodoDisplay'
import TodoSearch from './components/TodoSearch'

function App() {

  return (
    <>
    <div>
    <RecoilRoot>
      <h1>Todo App</h1>
      <TodoCreate />
      <h3>Search Todo</h3>
      <div><TodoSearch /></div>
      <h3>Todo List</h3>
      <TodoDisplay />
    </RecoilRoot>
    </div>
    </>
  )
}

export default App
