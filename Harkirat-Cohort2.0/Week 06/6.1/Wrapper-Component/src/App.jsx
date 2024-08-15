
import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const[todos, setTodos] = useState([])
  useEffect(()=>{
    setInterval(()=>{
      fetch('https://sum-server.100xdevs.com/todos')
      .then(async (res)=>{
        const json = await res.json();
        setTodos(json.todos);
      })
    },10000) 
  },[])
  async function fetchTodos(){
    const response = await fetch('https://sum-server.100xdevs.com/todos')
    const data = await response.json();
    console.log(data.todos);
    
    setTodos(data.todos);
  }
  return (
    <div>
      <WrapperComponent InnerComponent={<WrapperComponent InnerComponent={<InnerComp data={todos} fetchTodos={fetchTodos}/>} />} />
      
    </div>
  )
}
function InnerComp({data, fetchTodos}){
  return <div>
    Hey There!
    {/* <button onClick={fetchTodos}>Fetch</button> */}
    {data.map(todo => (
      <div key={todo.id}>
        {todo.title}
        {todo.description}
      </div>
    ))}
  </div>
}
function WrapperComponent({InnerComponent}){
  return <div className='wrapper-container'>
    {InnerComponent}
  </div>
}

export default App
