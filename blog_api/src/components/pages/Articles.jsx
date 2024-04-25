import React, { useEffect, useState } from 'react'
import { Article } from './Article';
import { useCookies } from 'react-cookie';



export const Articles = () => {
  const [cookies] = useCookies(null);
  const [articles, setArticles] = useState();
  const url = import.meta.env.VITE_BACKEND_URL || "http://localhost:7000";
  const email = cookies.Email;
  const authToken = cookies.AuthToken;

  const handleArticles = async()=>{
      
    try {
      const selectArticles =  await fetch(`${url}/api/v1/article/${email}`,{
        method: 'GET'
      });
      console.log(selectArticles)
      let selectArticlesJson = await selectArticles.json();
      setArticles(selectArticlesJson);
    } catch (error) {
      console.log(error)
    }
  }

  
  useEffect(()=>{
    if(authToken){
      handleArticles()
    }
  },[]);


  const sortArticles = articles?.sort((a,b)=>new Date(b.date) - new Date(a.date))
  
  return (
    
      <div>
        {sortArticles?.map((article)=><Article key={article.article_id} article={article} handleArticles={handleArticles}/>)}
      </div>

      
      
    
    
  )
}
