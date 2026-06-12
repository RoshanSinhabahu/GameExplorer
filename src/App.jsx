import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import DetailedPage from './pages/DetailedPage'

function App() {
  return (
    <div className='app-container'>
      <NavBar />
      {/* <Home /> */}
      <DetailedPage />
    </div>
  )
}

export default App
