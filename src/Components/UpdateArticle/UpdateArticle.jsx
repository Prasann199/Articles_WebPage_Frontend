import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateArticle = () => {
  const { id } = useParams(); // Get the dynamic parameter
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [heading, setHeading] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/article/${id}`);
        setArticle(response.data);
        setHeading(response.data.heading);
        setImgUrl(response.data.image);
        setDescription(response.data.description);
      } catch (error) {
        setError('Error fetching article data');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  const handleSubmit = async () => {
    try {
      let updatedArticle={
        heading:heading,
        image: imgUrl,
        description:description,
      }
      await axios.put(`http://localhost:8080/articles/${id}`,updatedArticle );
      navigate('/getData'); // Navigate back to the list or any other desired route after updating
    } catch (error) {
      console.error("Error updating article", error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!article) return <p>No article found</p>;

  return (
    <div className='UpdateArticle'>
      <h1>Update Article {id}</h1>
      <label htmlFor="heading">Heading</label>
      <input
        type="text"
        placeholder='Please Enter Heading of Article'
        value={heading}
        onChange={(e) => setHeading(e.target.value)}
      />
      <label htmlFor="image">Image Url</label>
      <input
        type="text"
        placeholder='please enter the public img url'
        value={imgUrl}
        onChange={(e) => setImgUrl(e.target.value)}
      />
      <label htmlFor="description">Description</label>
      <textarea
        placeholder='Enter the description of Article'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleSubmit}>Update Article</button>
    </div>
  );
};

export default UpdateArticle;
