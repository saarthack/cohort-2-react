import React from 'react'
import Card from './components/Card'


const App = () => {

  const users = ['Anubhav','Sarthak','Harsh','Chetan']


  return (
    <div className='p-3 h-screen text-red-600 bg-black'>
      {users.map(function(elem){
        return <Card user={elem} />
      })}
    </div>
  )
}

export default App