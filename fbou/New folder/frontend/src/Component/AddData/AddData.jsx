import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddData.css';

function AddData({ addNewPost }) {
  const [post_name, setName] = useState('');
  const [post_image, setImage] = useState('');
  const [post_description, setDescription] = useState('');
  const [post_price, setPrice] = useState('');
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFile = (e) => {
    setFile(e.target.files[0])
  };

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'mohamed');
  
    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dmyit8zek/image/upload',
        formData
      );
      return response.data.secure_url; 
    } catch (error) {
      console.error(error);
      return null; 
    }
  };
  
  const handleSubmit = async () => {
    try {

      const uploadedImage = await uploadImage();
  
  
      const postData = {
        post_name,
        post_image: uploadedImage, 
        post_description,
        post_price,
      };
 
      addNewPost(postData); 
  
      console.log('postData:', postData);
  
      const response = await axios.post('http://localhost:3000/api/posts', postData);
      console.log('Server Response:', response.data);
      navigate('/home');
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  

  return (
    <div className='myNewData'>
      <div className="container-Add">
        <div className="card">
          <input className='inpAdd'
            type="text"
            placeholder="Name"
            value={post_name}
            onChange={(e) => setName(e.target.value)}
          />
          <input type="file" onChange={handleFile} className='inpAdd' />
          <textarea
            placeholder="Description"
            value={post_description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <input className='inpAdd'
            type="text"
            placeholder="Price"
            value={post_price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button onClick={handleSubmit} className='btn-add'>Add New Post</button>
          {post_image && <img src={post_image} alt="Uploaded" />}
        </div>
      </div>
    </div>
  );
}

export default AddData;
