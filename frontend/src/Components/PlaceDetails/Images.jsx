import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import Movie from "./Movie";




function Row({rowId }) {
  const sideleft =()=>{
    var slider = document.querySelector('#slider'+rowId)
    slider.scrollLeft-=300
    
  }
  const sideright =()=>{
    var slider = document.querySelector('#slider'+rowId)
    slider.scrollLeft+=300
  }

  const items = [
    {
      name: "Sup3r-Us3r",
      img: "https://pbs.twimg.com/profile_images/830533062807191552/TbkWKnnv_400x400.jpg",
      text: "\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam!\""
    },
    {
      name: "Sup3r-Us3r",
      text: "\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam!\""
    }, 
    {
        name: "Sup3r-Us3r",
        img: "https://pbs.twimg.com/profile_images/830533062807191552/TbkWKnnv_400x400.jpg",
        text: "\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam!\""
      },
      {
        name: "Sup3r-Us3r",
        text: "\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam!\""
      },
      {
        name: "Sup3r-Us3r",
        img: "https://pbs.twimg.com/profile_images/830533062807191552/TbkWKnnv_400x400.jpg",
        text: "\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam!\""
      },
      {
        name: "Sup3r-Us3r",
        img: "https://pbs.twimg.com/profile_images/830533062807191552/TbkWKnnv_400x400.jpg",
        text: "\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam!\""
      },
      {
        name: "Sup3r-Us3r",
        img: "https://pbs.twimg.com/profile_images/830533062807191552/TbkWKnnv_400x400.jpg",
        text: "\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam!\""
      },
    // ... (other items)
  ];

  return (
    <>
     
      <div className="relative flex items-center group m-12">
      <FaAngleLeft onClick={sideleft}  className="bg-slate-500 opacity-60 rounded-full absolute hover:opacity-100 hidden cursor-pointer z-10 g group-hover:block left-0" size={30} />
        <div id={"slider"+rowId} className="flex overflow-x-scroll scrollbar-hide w-full h-full">
        
          {items.map(
            (item, id) => (
              <Movie key={item?.id} item={item}/>
            )
          )}
        </div>
        <FaAngleRight onClick={sideright} className="bg-slate-500 right-0 opacity-60 rounded-full absolute hidden hover:opacity-100 cursor-pointer z-10 group-hover:block" size={30} />
      </div>
    </>
  );
}

export default Row;
