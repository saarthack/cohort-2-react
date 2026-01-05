import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [theme, setTheme] = useState('light')

  const changeTheme = (u)=>{
    setTheme(u)
  }

  return (
    <div>

      <h1>Theme is {theme}</h1>
      <Navbar changeTheme={changeTheme} />
      
    </div>
  )
}

export default App