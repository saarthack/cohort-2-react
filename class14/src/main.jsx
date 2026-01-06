import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PostContext from './context/PostContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <PostContext>
    <App />
  </PostContext>
)
