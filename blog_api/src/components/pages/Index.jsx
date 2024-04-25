import React, { useEffect, useState } from 'react'

import { useCookies } from 'react-cookie';
import { IndexArticles } from './IndexArticles';


export const Index = () => {
  const [cookies,setCookie, removeCookie]=useCookies();
  const [articles, setArticles] = useState([]);
  const email = cookies.Email;
  const url = import.meta.env.VITE_BACKEND_URL;
  
  
  const handleArticles = async()=>{
    try {
      const selectArticles =  await fetch(`${url}/api/v1/articles`)
      const selectArticlesJson = await selectArticles.json();
      setArticles(selectArticlesJson);
    } catch (error) {
      console.log(error)
    }
  }

  const authToken = cookies.AuthToken;
  useEffect(()=>{
    if(authToken){
      handleArticles()
    }
    
  },[]);

  
  const sortArticles = articles?.sort((a,b)=>new Date(b.date) - new Date(a.date))
  
  return (
    
      <div>
        {sortArticles?.map((article)=><IndexArticles key={article.article_id} article={article} handleArticles={handleArticles}/>)}
      </div>

      
      
    
    
  )
}
