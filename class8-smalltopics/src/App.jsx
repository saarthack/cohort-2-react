import React from 'react'
import Card from './components/Card'

const App = () => {

  const cardData1 = {
    username:'Anubhav',
    role:'Engineer',
    email:'anu@gmail.com',
    profile:'https://images.unsplash.com/photo-1761934797418-f8670e41268a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
  const cardData2 = {
    username:'Danish',
    role:'Mentor',
    email:'danish@gmail.com',
    profile:'https://plus.unsplash.com/premium_photo-1766746551190-2f186c2f2360?q=80&w=850&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }

  return (
    <>
      <Card cardData={cardData1} />
      <Card cardData={cardData2} />
    </>
  )
}

export default App