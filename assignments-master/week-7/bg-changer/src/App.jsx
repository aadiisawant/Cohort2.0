
import './App.css'

function App() {

  const setBgColor = (color)=>{
    document.body.style.backgroundColor = color
    // document.getElementById('root').style.backgroundColor = color
  }

  return (
    <div className='btns'>
      <div className='color-bg'><button onClick={() => setBgColor("red")} style={{backgroundColor: "red"}}>Red</button></div>
      <div className='color-bg'><button onClick={() => setBgColor("blue")} style={{backgroundColor: "blue"}}>Blue</button></div>
      <div className='color-bg'><button onClick={() => setBgColor("pink")} style={{backgroundColor: "pink"}}>Pink</button></div>
      <div className='color-bg'><button onClick={() => setBgColor("green")} style={{backgroundColor: "green"}}>Green</button></div>
      <div className='color-bg'><button onClick={() => setBgColor("black")} style={{backgroundColor: "black", color: "white"}}>Black</button></div>
    </div>
  )
}

export default App
