import React, { useState } from 'react'
import FeedbackCard from './FeedbackCard'
import 'bootstrap/dist/css/bootstrap.min.css'

function Feedback() {
    let [feedbacks, setFeedBacks] = useState([])
    let [formData, setFormData] = useState({
        name:"",
        message:""
    })

    let handleChange = (e) => {
        let {name, value} = e.target
        
        setFormData((prev) => ({
            ...formData,
            [name]: value
        }))
    }

    let handleForm = (e) => {
        e.preventDefault()
        if (formData.name.trim() === '' && formData.message.trim() === '') return
        setFeedBacks(prev => [...prev, formData])
        setFormData({name:'', message:''})
    }

    let handleClearAll = (e) => {
        e.preventDefault()
        setFeedBacks([])
    }

    return (
        <div>
            <form onSubmit={handleForm} className='form-control'>
                <input type='text' name='name' value={formData.name} placeholder='Enter your name' onChange={handleChange} className='form-control mb-2'/>
                <textarea name='message' value={formData.message} placeholder='Enter your feedback here' onChange={handleChange} className='form-control mb-2'/>
                <button type='submit' className='btn btn-primary me-2'>Submit</button>
                <button type='submit' className='btn btn-danger' onClick={handleClearAll}>Clear All</button>
            </form>
            <hr/>
            <div className='row'>
                {
                    feedbacks.length > 0 ? (
                        feedbacks.map((feedbacks, index) => (
                            <div className='col-md-6' key={index}>
                                <FeedbackCard name={feedbacks.name} message={feedbacks.message}/>
                            </div>
                        ))
                    ) : (<h4>No feedback was given!</h4>)
                }
            </div>
        </div>
    )
}

export default Feedback
