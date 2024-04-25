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
                <Route path='https://mugblog-frontend.onrender.com/' element={<Index/>}/>
                <Route path='https://mugblog-frontend.onrender.com/home' element={<Index/>}/>
                <Route path='https://mugblog-frontend.onrender.com/my-articles' element={<Articles/>}/>
                <Route path='https://mugblog-frontend.onrender.com/article' element={<Article/>}/>
                <Route path='https://mugblog-frontend.onrender.com/create-art' element={<CreateArticle />}/>
                <Route path='https://mugblog-frontend.onrender.com/edit-art' element={<EditArticle/>}/>
                <Route path='https://mugblog-frontend.onrender.com/search/:search_field' element={<SearchResult/>}/>
                <Route path='https://mugblog-frontend.onrender.com/signup' element={<Index/>}/>
                <Route path='https://mugblog-frontend.onrender.com/login' element={<Index/>}/>
                <Route path='https://mugblog-frontend.onrender.com/error' element={<Error/>}/>
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
