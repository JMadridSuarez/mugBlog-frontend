import { Global } from '../../helpers/Global';
import React from 'react'

export const IndexArticles = ({article}) => {
  const url = "https://mugblock-backend.onrender.com";

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
