import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <ButtonHeader />
      <Header title={"Aditya2"} />
    </>
  )
}

function Header({title}){
  
  return <div>
  {`My name is ${title}`}
  </div>
}
function ButtonHeader(){
  const [title, setTitle] = useState("Aditya 1")

  function changetitle(){
    setTitle(Math.random()*1000)
  }
  return <div>
    <button onClick={changetitle}>Change the title</button><br />
  {`My name is ${title}`}
  </div>
}
export default App
