
import './App.css'

function App() {

  return (
    <>
      <div className='card'>
        <h2>Aditya Sawant</h2>
        <p>A student of cohort 2.0 and a React developer.</p>
        <h3>Interests</h3>
        <li className='interests'>
          <li>one</li>
          <li>two</li>
          <li>three</li>
        </li>
        {/* <ul className='interests'>
          <li>one</li>
          <li>two</li>
          <li>three</li>
        </ul> */}
        <div className='profile-btn'>
          <button className='scl-btn'>LinkedIn</button>
          <button className='scl-btn'>Twitter</button>
        </div>
      </div>
    </>
  )
}

export default App
