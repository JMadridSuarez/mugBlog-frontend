import React, { useEffect, useState } from 'react'

export const EditArticle = () => {


  //PROBLEMA IDENTIFICANDO EL ID DEL ARTICULO A EDITAR!!!!!!!!!!!!!!!
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [image, setImage] = useState();
  const date = new Date().toISOString(Date.now());
  const url = import.meta.env.VITE_BACKEND_URL;
  const intUrl = "https://mugblock-backend.onrender.com";
  
  const updateArticle = async(e)=>{
    e.preventDefault();
    try {
      if(!title && !content){
        console.log('Insert title and content');
      }else{
        const selectArticles =  await fetch(`${url}/api/v1/articles`)
        const selectArticlesJson = await selectArticles.json();
        const lastestArticle =  selectArticlesJson[selectArticlesJson.length -1];
        const id = lastestArticle.article_id;

        const updateArticleResponse = await fetch(`${url}/api/v1/articles/${id}`,{
          method: 'PUT',
          headers:{"Content-Type": "application/json"},
          body: JSON.stringify({title, content, date})
        });
        updateArticleResponse.json()
        if(updateArticleResponse.status === 200){
          uploadImage();
          window.location.href=`/my-articles`;
          console.log(updateArticleResponse.status)
         }
        
      }
    } catch (error) {
      console.error(error)
    }
  }
  

///upload image///////////
const uploadImage = async()=>{
  /////////////////////////////////////////////
      try {
        const selectArticles =  await fetch(`${url}/api/v1/articles`)
        const selectArticlesJson = await selectArticles.json();
        const lastestArticle =  selectArticlesJson[selectArticlesJson.length -1];
        const id = lastestArticle.article_id;
        
        
        const formData = new FormData();
        formData.append('file0',image);
        try {
          const response = await fetch(`${url}/api/v1/upload/${id}`,{
          method: 'POST',
          body: formData
        })
        console.log('Respuesta del servidor:', response);
        } catch (error) {
          console.error(error)
        }
        // Manejar la respuesta si es necesario
        //const responseData = await response.json();
        
      } catch (error) {
        console.log(error)
      }
  
      //////////////////////////////////////
      
    }

  return (
    <div className='create-container'>
      <div className='create-container-box'>
        <form className='article-form' action="">
          <input name='title' onChange={(e)=>setTitle(e.target.value)}  className='article-input'  type="text" />
          <textarea  name='content' onChange={(e)=>setContent(e.target.value)}  className='article-input article-textarea' rows="10" cols="50" placeholder='Enter the content' minLength="100" type="text" />
          <label htmlFor="file">Upload Image</label>
            <input className='image-upload' type="file" onChange={(e)=>setImage(e.target.files[0])} name='file0' id='file' />
          <input onClick={updateArticle} type="submit" className='article-input article-post' value="Post" />
        </form>
      </div>
    </div>
  )
}
