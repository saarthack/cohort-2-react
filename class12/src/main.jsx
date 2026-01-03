import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { Outlet } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App/>
  </>
)
