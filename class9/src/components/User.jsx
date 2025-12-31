import React from 'react'

const User = (props) => {

    const clr1 = Math.floor(Math.random()*256)
    const clr2 = Math.floor(Math.random()*256)
    const clr3 = Math.floor(Math.random()*256)

  return (
    <div style={{backgroundColor:`rgb(${clr1},${clr2},${clr3})`}} className='user-card'>
        <h2>{props.elem.name}</h2>
        <p>{props.elem.website}</p>
    </div>
  )
}

export default User