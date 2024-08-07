
import './App.css'

function App() {


  return (
    <div>
      <WrapperComponent InnerComponent={<InnerComp />} />
    </div>
  )
}
function InnerComp(){
  return <div>
    Hey There!
  </div>
}
function WrapperComponent({InnerComponent}){
  return <div className='wrapper-container'>
    {InnerComponent}
  </div>
}

export default App
