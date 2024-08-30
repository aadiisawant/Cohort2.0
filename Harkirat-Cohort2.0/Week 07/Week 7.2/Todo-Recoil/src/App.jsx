
import { RecoilRoot } from 'recoil'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoDisplay from './components/TodoDisplay'

function App() {

  return (
    <>
    <RecoilRoot>
      <TodoCreate></TodoCreate>
      <TodoDisplay />
    </RecoilRoot>
    </>
  )
}

export default App
