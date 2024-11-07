import React from 'react'
import Navbar from './Navbar'
import './css/Register.css'
import Cards from './Cards'

function Home() {
  return (
    <>
    <div>
        <div className="absolute inset-0 w-full h-full">
        <div className="absolute w-64 h-64 bg-white opacity-20 rounded-full filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute w-64 h-64 bg-pink-300 opacity-20 rounded-full filter blur-xl animate-blob animation-delay-4000"></div>
        <div className="absolute w-64 h-64 bg-yellow-300 opacity-20 rounded-full filter blur-xl animate-blob"></div>
      </div>
      <div className='sticky top-0 z-[100] opacity-100'>
      <Navbar/>
      </div>      
    <Cards/>
    </div>
    </>
  )
}

export default Home
