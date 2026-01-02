import React from 'react'
import { useParams } from 'react-router-dom'

const AnyCourse = () => {

    const params = useParams()

    return (
        <div>
            <h1 className='capitalize whitespace-nowrap text-5xl underline font-bold fixed left-[50vw] -translate-x-1/2'>
                {params.courseId} Course Page
            </h1>
        </div>
    )
}

export default AnyCourse