import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Child() {
    let [count, setCount] = useState(0)

    return (
        <div>
            <h2>Counter : {count}</h2>
            <button className='btn btn-primary me-2' onClick={() => {setCount(count + 1)}}>Count by One</button>
            <button className='btn btn-danger' onClick={() => {setCount(0)}}>Reset</button>
        </div>
    )
}

export default Child
