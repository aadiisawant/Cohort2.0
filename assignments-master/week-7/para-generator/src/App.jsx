
import { useState } from 'react'
import './App.css'

function App() {
  const [words, setWords] = useState(0);
  const [para, setPara] = useState("")
  const createPara = ()=>{
    let para = "";
    const numOfWords = words;
    for(let i=0; i<numOfWords; i++){
      let wordLength = Math.floor(Math.random()*9)+1;
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      for(let j=0; j<wordLength; j++){
        para += characters.charAt(Math.floor(Math.random()*characters.length))
      }
      para +=" "
    }
    setPara(para);
  }

  return (
    <div className='conatiner'>
      <h1>Para Generator</h1>
      <div className='action'>
        <input placeholder='No. of Words...' name='words' onChange={(e)=> setWords(e.target.value)} />
        <button onClick={createPara}>Generate</button>
      </div>
      <div className='content'>
      {para}
      </div>
    </div>
  )
}

export default App
