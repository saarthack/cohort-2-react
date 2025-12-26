import React from 'react'

const Card = (props) => {

    console.log(props);
    
    
    return (
        <div className='bg-white border-2 border-red-500 m-2 rounded h-20 px-5 py-3 w-40 '>
            <h1 className='text-2xl font-semibold'>
                {props.user}
            </h1>
        </div>
    )
}

export default Card