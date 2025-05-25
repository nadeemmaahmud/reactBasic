import React from 'react'
import Child from './components/Child'
import User from './components/User'
import Feedback from './components/Feedback'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className='container mt-5'>
      <h1 className='text-center'>Counter App</h1>
      <hr/>
      <Child/>
      <hr/>
      <hr/>
      <h1 className='text-center'>User Response</h1>
      <hr/>
      <User/>
      <hr/>
      <hr/>
      <h1 className='text-center'>Feedback Hub</h1>
      <hr/>
      <Feedback/>
    </div>
  )
}

export default App
