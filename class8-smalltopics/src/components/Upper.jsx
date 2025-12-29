import React from 'react'

const Upper = (props) => {

    console.log(props.cardData);
    
    return (
        <div className='upper'>
            <img src={props.cardData.profile} alt="" />
        </div>
    )
}

export default Upper