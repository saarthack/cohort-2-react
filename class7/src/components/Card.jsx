import React from 'react'

const Card = (props) => {
    return (
        <div className='lg:w-[23vw] md:w-[30vw] sm:w-[45vw] rounded-xl py-8 px-8 flex items-center flex-col text-center bg-white text-black'>
            <img className='h-24 w-24 rounded-full object-center object-cover' src={props.elem.imageURL} alt="" />
            <h1 className='text-2xl mt-2 font-bold'>{props.elem.userName}</h1>
            <h5 className=' text-blue-500 text-lg font-semibold my-2'>{props.elem.userRole}</h5>
            <p className='text-sm font-medium leading-tight'>{props.elem.userDesc}</p>
            <button onClick={() => {
                props.deleteHandler(props.idx)
            }} className='px-4 py-2 rounded text-xs cursor-pointer active:scale-95 bg-red-600 text-white font-semibold mt-3'>Remove</button>
        </div>
    )
}

export default Card