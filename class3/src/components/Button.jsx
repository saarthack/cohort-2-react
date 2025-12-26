import React from 'react'

const Button = (props) => {

    return (
        <div className='w-fit text-lg font-bold bg-emerald-700 px-5 py-2 rounded m-2 text-white'>
            {props.text}
        </div>
    )
}

export default Button