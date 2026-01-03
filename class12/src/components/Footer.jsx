import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate()

    return (
        <div className='footer'>
            <h3>Footer</h3>
            <button
                onClick={() => {
                    navigate('/courses')
                }}>Explore courses</button>
        </div>
    )
}

export default Footer