import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { lazy, Suspense } from 'react'
const Landing = lazy(() =>import('./components/Landing'))
const Dashboard = lazy(() =>import('./components/Dashboard'))

function App() {
  
  return (
    <div>
      
    <BrowserRouter>
    <AppBar></AppBar>
      <Routes>
        <Route path='/' element={<Suspense fallback={"loading..."}><Landing /></Suspense>}/>
        <Route path='/home' element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
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
