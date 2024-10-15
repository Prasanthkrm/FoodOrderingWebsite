import React, { useRef } from 'react'
import "./Finder.css"
import { menu_list } from './frontend_assets/assets';


export const Finder = ({Category,setCategory}) => {
    const imageContainerRef = useRef(null); 


  const scrollLeft = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollBy({
        left: -500,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollBy({
        left: 500, 
        behavior: 'smooth' 
      });
    }
  };
  return (
    <>
    <div id="body">
      <div id="content1">
        <div className="button-control">
          <h2 className='h2'>What's on your mind? </h2>
          <button className="scroll-btn left-btn" onClick={scrollLeft}>&#60;</button>
          <button className="scroll-btn right-btn" onClick={scrollRight}>&#62;</button>
        </div>
        <div className="image" ref={imageContainerRef}>
          {menu_list.map((item,index)=>(
          <div onClick={()=>{setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}} key={index}>
            <img className={Category===item.menu_name?"active img":"img"} src={item.menu_image} alt={item.menu_name} />
            <h3 className='finder_foodname'>{item.menu_name}</h3>
          </div>))}
        </div>  
      </div>
    </div>
    </>
  )
}
