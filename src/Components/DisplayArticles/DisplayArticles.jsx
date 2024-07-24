import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./DisplayArticles.css"

const DisplayArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const url = "http://localhost:8080/getData";
        let response = await axios.get(url);
        setArticles(response.data);
        // console.log("articles:",articles);
      } catch (error) {
        console.error("Error occurred while fetching Articles", error);
      }
    };
    fetchArticles();
  }, []);

  const handleUpdateClick = (id) => {
    window.location.href = `/updateArticle/${id}`;
  };

  const handleDelete = async (id) => {
    try {
      const url = `http://localhost:8080/delete/${id}`;
      await axios.delete(url);
      setArticles(articles.filter(article => article.id !== id));
      alert("Article deleted successfully");
    } catch (error) {
      console.error("Error during deleting Articles:", error);
      alert("An error occurred during deleting Articles");
    }
  };

  if(articles.length===0){
    return(
      <>
      <div className="DisplayArticles">
      <h1>No Present Articles</h1>
      </div>
      </>
    )
  }else{
    
    return (
  
      
      <div className='DisplayArticles'>
        
        <h1>Present Articles</h1>
        <div className="article-wrapper">
        {
          articles.map((article, index) => (
            <div key={index} className='box'>
              <h2>{article.heading}</h2>
              <div className="img">
              <img src={article.image} alt="Article" />
              </div>
              <p>{article.description}</p>
              <div className="btn-wrapper">
              <button onClick={() => { handleUpdateClick(article.id); }}>Update</button>
              <button onClick={() => handleDelete(article.id)}>Delete</button>
              </div>
            </div>
          ))
        }
        </div>
      </div>
    );
  }
};

export default DisplayArticles;
