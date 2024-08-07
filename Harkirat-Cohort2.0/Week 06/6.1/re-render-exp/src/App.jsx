import React, { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState("Aditya 1")

  function changetitle(){
    setTitle(Math.random()*1000)
  }
  return (
    <div>
      <button onClick={changetitle}>Change the title</button><br />
      <Header title={title}/><br />
      <Header title="Aditya2" />
      <Header title="Aditya2" />
      <Header title="Aditya2" />
      <Header title="Aditya2" />
    </div>
  )
}

const Header = React.memo(function Header({title}){
  return <div>
  {`My name is ${title}`}
  </div>
})


export default App
