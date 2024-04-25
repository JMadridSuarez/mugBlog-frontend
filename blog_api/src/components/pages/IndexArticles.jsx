import { Global } from '../../helpers/Global';
import React from 'react'

export const IndexArticles = ({article,handleArticles}) => {
  const url = import.meta.env.VITE_BACKEND_URL || "http://localhost:7000";
  const deleteArticle =async(e)=>{
    e.preventDefault();
    try {
      const deleteArticle = await fetch(`${url}/api/v1/articles/${article.article_id}`,{
        method: 'DELETE'
      });
      if(deleteArticle.status === 200){
        handleArticles();
      }
      
    } catch (error) {
      console.error(error);
    }
  }

  

  return (
    <div className='article-container'>
      <div className='article-container-box'>
      <h2 className='title'>{article.title}</h2>
        <div className='content-container'>
            <p className='content'>{article.content}</p>
            <div className='image-container'>
              {article.image && <img className='article-image' src={Global.url+`/image/${article.image}`}/>}
            </div>

        </div>
        
        <p className='date'>{article.date}</p>

      </div>
    </div>
  )
}
