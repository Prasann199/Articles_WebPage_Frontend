import React, { useState } from "react";
import "./AddArticles.css";
import axios from "axios";

const AddArticles = () => {
  const [heading, setHeading] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/add", {
        heading: heading,
        image: imgUrl,
        description: description,
      });
      if (response.data === "Article Added Sucessfully") {
        alert("Article added Successfully");
        window.location.href = "/getData";
      } else {
        alert("Adding Article failed");
      }
    } catch (error) {
      console.error("Error during adding Articles:", error);
      alert("An error occurred during adding Articles");
    }
  };

  return (
    <div className="AddArticles">
      <div className="wrapper">
      <h2>Add Article</h2>
        <label htmlFor="heading">Heading</label>
        <input
          type="text"
          placeholder="Please Enter Heading of Article"
          value={heading}
          onChange={(e) => {
            setHeading(e.target.value);
          }}
        />
        <label htmlFor="image">Image Url</label>
        <input
          type="text"
          placeholder="please enter the public img url"
          value={imgUrl}
          onChange={(e) => {
            setImgUrl(e.target.value);
          }}
        />
        <label htmlFor="description">Description</label>
        <textarea
          type="text"
          placeholder="Enter the description of Article"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <button onClick={handleSubmit}>Add Article</button>
      </div>
    </div>
  );
};

export default AddArticles;
