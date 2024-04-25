import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Index } from '../components/pages/Index'
import { Articles } from '../components/pages/Articles'
import {Article} from '../components/pages/Article'
import { Header } from '../components/layout/Header'
import { CreateArticle } from '../components/pages/CreateArticle'
import { Footer } from '../components/layout/Footer'
import { SideBar } from '../components/layout/SideBar'
import { EditArticle } from '../components/pages/EditArticle'
import { SearchResult } from '../components/pages/SearchResult'
import { Error } from '../components/pages/Error'



export const MainRouter = () => {
  const url = import.meta.env.VITE_BACKEND_URL;
  return (
    <BrowserRouter>
        
        {/*LAYOUT*/}
        
          <Header/>
        <section className='center-container'>
            <div className='sideBar-container'>
              <SideBar/>
            </div>

            <div className='routes-container'>
            {/*Content and routes*/}
            <Routes>
                <Route path='/' element={<Index/>}/>
                <Route path='/home' element={<Index/>}/>
                <Route path='/my-articles' element={<Articles/>}/>
                <Route path='/article' element={<Article/>}/>
                <Route path='/create-art' element={<CreateArticle />}/>
                <Route path='/edit-art' element={<EditArticle/>}/>
                <Route path='/search/:search_field' element={<SearchResult/>}/>
                <Route path='/signup' element={<Index/>}/>
                <Route path='/login' element={<Index/>}/>
                <Route path='/error' element={<Error/>}/>
                <Route path='*' element={
                    <div className='error-direct-container'>
                        <h1>Error 404</h1>
                    </div>
                }/>
            </Routes>
            </div>
        </section>
    </BrowserRouter>
  )
}
