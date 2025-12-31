import  { useEffect, useState } from 'react'
import axios from 'axios'
import User from './components/User'

const App = () => {

  const [allData, setAllData] = useState([])

  const getData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    setAllData(response.data)
  }

  useEffect(function(){
    getData()
  },[])

  return (
    <div>
      
      <div className='all-cards'>
        {allData.map(function (elem, idx) {
          return <div key={idx}>
            <User elem={elem} />
          </div>
        })}
      </div>
    </div>
  )
}

export default App