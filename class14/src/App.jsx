import Navbar from './components/Navbar'
import Footer from './components/footer'
import Sections from './components/Sections'

const App = () => {
  return (
    <div className='app-div'>
      <Navbar />
      <Sections />
      <Footer />
    </div>
  )
}

export default App