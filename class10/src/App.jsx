import { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [username, setUsername] = useState('')

  const [num, setNum] = useState(0)

  const getData = async () => {
    const response = await axios.get('https://randomuser.me/api/')
    setUsername((response.data.results[0].name.first) + " " + (response.data.results[0].name.last))
  }

  useEffect(function () {
    getData()
  }, [num])

  return (
    <div>
      {username}

      <h1>{num}</h1>
      <button onClick={() => {
        setNum(num + 1)
      }}>click here</button>
    </div>
  )
}

export default App