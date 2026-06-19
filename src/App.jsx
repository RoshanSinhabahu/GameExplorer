import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import DetailedPage from './pages/DetailedPage'
import { BrowserRouter, Route, Routes } from 'react-router'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {
  return (
    <div className='app-container'>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/details' element={<DetailedPage/>}/>
          <Route path='/privacy' element={<PrivacyPolicy/>}/>
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
