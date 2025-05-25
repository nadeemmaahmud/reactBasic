import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function User() {
    let [name, setName] = useState("")
    let [age, setAge] = useState("")

    let handleForm = (event) => {
        event.preventDefault()
        alert(`Your name is : ${name} & Age : ${age}`)
        setName('')
        setAge('')
    }

    let handleName = (event) => {
        setName(event.target.value)
    }

    let handleAge = (event) => {
        setAge(event.target.value)
    }

    return (
        <div>
        <form className='form-control' onSubmit={handleForm}>
            <input className='form-control mb-2' value={name} type='text' placeholder='Enter your name' onChange={handleName}/>
            <input className='form-control mb-2' value={age} type='number' placeholder='Enter your age' onChange={handleAge}/>
            <button type='submit' className='btn btn-info'>Display Info</button>
        </form>
        </div>
    )
}

export default User
