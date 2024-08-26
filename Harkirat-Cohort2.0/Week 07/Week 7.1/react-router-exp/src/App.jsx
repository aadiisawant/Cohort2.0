import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { Landing } from './components/Landing'
import { Dashboard } from './components/Dashboard'

function App() {
  
  return (
    <div>
      
    <BrowserRouter>
    <AppBar></AppBar>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/home' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

function AppBar(){
  const navigate = useNavigate();
  return (
    <div>
        <button onClick={()=>{
          navigate("/home")
        }}>Dashboard</button>
        <button onClick={()=>{
          navigate("/")
        }}>Landing Page</button>
      </div>
  )
}

export default App
