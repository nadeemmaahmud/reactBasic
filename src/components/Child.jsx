import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Child() {
    let [count, setCount] = useState(0)

    return (
    <div>
      <h1>Counter App</h1>
      <hr/>

      <h3>Counted : {counter}</h3>
      <button type='submit' className='btn btn-primary me-2' onClick={() => {setCount(counter + 1)}}>Count++</button>
      <button type='submiy' className='btn btn-warning me-2' onClick={() => {setCount(counter - 1)}}>Count--</button>
      <button type='submiy' className='btn btn-danger' onClick={() => {setCount(0)}}>Reset</button>
    </div>
  )
}

export default Child
