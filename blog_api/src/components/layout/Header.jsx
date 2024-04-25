import React from 'react'
import { Nav } from './Nav'

export const Header = () => {
  
  return (
    <div className='header-container'>
        <div className='header-container-box'>
          <div className='logo-container'>
            <a href="https://mugblog-frontend.onrender.com/home">
          <svg 
          className='mug'
          width="79px"
          height="60px"
            fill="#000000" 
            viewBox="0 0 32 32" 
            xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" 
                stroke-width="0">
              </g>
              <g 
                id="SVGRepo_tracerCarrier" 
                stroke-linecap="round" 
                stroke-linejoin="round">
              </g><g id="SVGRepo_iconCarrier">
                <path d="M 12 2 L 12 6 L 14 6 L 14 2 Z M 16 3 L 16 6 L 18 6 L 18 3 Z M 6 7 L 6 25 C 6 26.644531 7.355469 28 9 28 L 21 28 C 22.644531 28 24 26.644531 24 25 L 24 20 L 26 20 C 27.644531 20 29 18.644531 29 17 L 29 14 C 29 12.355469 27.644531 11 26 11 L 24 11 L 24 7 Z M 8 9 L 22 9 L 22 25 C 22 25.554688 21.554688 26 21 26 L 9 26 C 8.445313 26 8 25.554688 8 25 Z M 24 13 L 26 13 C 26.554688 13 27 13.445313 27 14 L 27 17 C 27 17.554688 26.554688 18 26 18 L 24 18 Z">
                </path>
          </g></svg>
          <p className='logo-text'>MUGBLOG</p>
            </a> 
          </div>
         
        
            <Nav/>
        </div>
    </div>
  )
}
