import Review from './Review'
import Images  from './Images'

import React from 'react'

function Overview() {
  return (
    <div class="max-w-7xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg ">
      <h1 class="text-3xl md:text-4xl font-bold mb-4">Plan Your Next Adventure to [Place Name]</h1>
      <p class="mb-6 text-lg md:text-xl">Uncover the hidden gems and breathtaking beauty of [Place Name]. Whether you’re a nature lover or simply seeking a peaceful retreat, this destination offers unparalleled charm and serenity.</p>
  
  <div class="bg-white p-4 rounded-lg shadow-md mb-4">
    <h2 class="text-xl font-semibold text-gray-700 mb-2">See What Others Are Saying</h2>
  </div>
      <Review/>     
      <Images rowId={1}/>
      <Review/>     
      <Images rowId={2}/>
      </div>
  )
}

export default Overview
