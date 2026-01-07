import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

    return (
        <div className='home'>
            <h1>This is Home Page</h1>
            <button
                className='cta'
                onClick={() => {
                    navigate('/products')
                }}>
                Explore All Products
            </button>
        </div>
    )
}

export default Home