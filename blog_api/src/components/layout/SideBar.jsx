import React from 'react'
import { NavLink } from 'react-router-dom'


export const SideBar = () => {

  return (
    <div className='sideBar-container'>
      <div className="sideBar-container-box">
          <NavLink  href='/create-art' className='create-button'>Create article</NavLink>
      </div>
    </div>
  )
}
