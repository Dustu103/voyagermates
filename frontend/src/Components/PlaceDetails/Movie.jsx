import React from 'react'
import { useState } from 'react';
import '../css/Register.css'

function Movie({item}) {
    const[like,setLike]=useState(false)
  return (
    <div>
       <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative m-8 p-2 glowing-shadow">
                {/* <img src="" alt="" /> */}
                <img className="w-full h-auto block"
                  src={item.img} alt='img'
                />                        
                
              </div>
    </div>
  )
}

export default Movie