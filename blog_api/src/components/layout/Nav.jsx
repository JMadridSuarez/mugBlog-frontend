import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export const Nav = () => {
  const [cookies,setCookie,removeCookie] = useCookies();
  const [entry,setEntry]=useState();
  const navigate = useNavigate()

  const search = async(e)=>{
    e.preventDefault();
    navigate(`/search/${entry}`, {replace: true});
  }

  const signout = ()=>{
    removeCookie('Email');
    removeCookie('AuthToken');
    window.location.reload()
  }
  return (
    <div className='nav-container'>
        <nav>
            <ul>
                <li><NavLink to="/home">Home</NavLink> </li>
                <li><NavLink to="/my-articles"> My Articles</NavLink></li>
                <button onClick={signout}>Sign Out</button>
            </ul>
            <div className="search-container">
              <form onSubmit={search}>
                <input className='search-text' onChange={(e)=>setEntry(e.target.value)} type="text" placeholder='Write something' />
                <input className='search-button' type="submit" value='Search'/>
              </form>
            </div>
        </nav>
    </div>
  )
}
