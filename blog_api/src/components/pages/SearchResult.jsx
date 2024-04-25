import React, { useEffect, useState } from 'react'
import { Article } from './Article';
import { useNavigate, useParams } from 'react-router-dom';

//Crear un componente nuevo para mostar como busqueda
export const SearchResult = () => {
  const [articles, setArticles] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const url = import.meta.env.VITE_BACKEND_URL || "http://localhost:7000";
  const handleArticles = async()=>{
    try {
      const selectArticles =  await fetch(`${url}/api/v1/search/${params.search_field}`)
      const selectArticlesJson = await selectArticles.json();
      
      if(selectArticlesJson.length >= 1){
        setArticles(selectArticlesJson);
      }else{
        setArticles([]);
      }
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    
    handleArticles()
  },[]);

  useEffect(()=>{
    
    handleArticles()
  },[params]);

  
  const sortArticles = articles?.sort((a,b)=>new Date(b.date) - new Date(a.date))
  
  return (
          
      <div>{sortArticles?.map((article)=><Article key={article.article_id} article={article} handleArticles={handleArticles}/>)}</div>

      
      
    
    
  )
}
