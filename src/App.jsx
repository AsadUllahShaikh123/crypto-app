import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import CoinPage from './Pages/CoinPage'
import HomePage from './Pages/HomePage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className='bg-gray-800 text-white h-screen'>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/coins/:id' element={<CoinPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
