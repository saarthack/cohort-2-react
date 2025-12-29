import React from 'react'
import Upper from './Upper'
import Lower from './Lower'

const Card = (props) => {


    
  return (
    <div className='card'>
        <Upper cardData={props.cardData} />
        <Lower cardData={props.cardData} />
        
    </div>
  )
}

export default Card