import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div>
      <CustomBtn count={count} setCount={setCount}/>
    </div>
  )
}

function CustomBtn({count, setCount}){

  function counter(){
    setCount(count+1);
  }
  return (
    <>
      <button onClick={counter}>Count : {count}</button>
    </>
  )

}
export default App
