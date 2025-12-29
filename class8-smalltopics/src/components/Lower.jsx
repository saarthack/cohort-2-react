import React from 'react'

const Lower = (props) => {
    return (
        <div className='lower'>
            <h2>{props.cardData.username}</h2>
            <h4>{props.cardData.email}</h4>
            <h3>{props.cardData.role}</h3>
        </div>
    )
}

export default Lower