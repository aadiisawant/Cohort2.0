
import { RecoilRoot } from 'recoil'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoDisplay from './components/TodoDisplay'
import TodoSearch from './components/TodoSearch'

function App() {

  return (
    <>
    <RecoilRoot>
      <TodoCreate />
      <TodoSearch />
      <TodoDisplay />
    </RecoilRoot>
    </>
  )
}

export default App
