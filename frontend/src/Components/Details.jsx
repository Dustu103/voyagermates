import React from 'react'
import Navbar from './Navbar'
import './css/Register.css'
import Navbarplace from './PlaceDetails/Navbarplace'
import {
  Link,
  Outlet
} from "react-router-dom";

function Details() {
  return (
    <>
    {/* <Router> */}
    <div className=' relative text-white'>
        <div className="fixed w-64 h-64 bg-white opacity-20 rounded-full filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="fixed w-64 h-64 bg-pink-300 opacity-20 rounded-full filter blur-xl animate-blob animation-delay-4000"></div>
        <div className="fixed w-64 h-64 bg-yellow-300 opacity-20 rounded-full filter blur-xl animate-blob"></div>
      <Navbar/>
      <div class="bg-gray-800 p-4 rounded-lg shadow-md max-w-7xl mx-auto mt-4 lg:p-6 xl:p-10">
        <h2 class="text-2xl font-semibold mb-3">Leave a Review</h2>
        <p class="mb-4">Have you already visited this place? We'd love to hear about your experience!</p>
        <div>Are You already Visit this place?<Link className='text-cyan-500' to="/hi/review"> leave a review</Link></div>
        </div>
        
      <div class="flex-1 p-6 md:p-8 lg:p-12 xl:p-16">
      <div class="bg-gray-800 p-4 rounded-lg shadow-md max-w-7xl mx-auto mt-4 lg:p-6 xl:p-10 sticky top-0 z-50">
         <Navbarplace/>   
      </div>
      <Outlet/>
    
    </div>
    </div>
    {/* </Router> */}
    </>
  )
}

export default Details
