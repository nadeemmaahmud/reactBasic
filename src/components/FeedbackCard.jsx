import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function FeedbackCard({name, message}) {
  return (
    <div className='card mb-3'>
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <p className='card-text'>{message}</p>
      </div>
    </div>
  )
}

export default FeedbackCard
