import React from 'react'
import { Link } from 'react-router-dom'


export const SideBar = () => {

  return (
    <div className='sideBar-container'>
      <div className="sideBar-container-box">
          <Link  href='/create-art' className='create-button'>Create article</Link>
      </div>
    </div>
  )
}
