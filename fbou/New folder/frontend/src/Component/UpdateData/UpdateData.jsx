import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './UpdateData.css'
function UpdateData({ onUpdated }) {
  const { idposts } = useParams();
  console.log(idposts);

  const [post_name, setName] = useState('');
  const [post_image, setImage] = useState('');
  const [post_description, setDescription] = useState('');
  const [post_price, setPrice] = useState('');
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFile = (e) => {
    setFile(e.target.files[0]);
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
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    try {
      const image = await uploadImage();

      const updatedProductData = {
        idposts,
        post_name,
        post_image: image,
        post_description,
        post_price,
      };
      console.log(updatedProductData);

      const response = await axios.put(
        `http://localhost:3000/api/posts/${idposts}`,
        updatedProductData
      );

      console.log('Update Response:', response.data);

    
      onUpdated(updatedProductData);

      navigate('/home');
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div className='update-container'>
    <div className='update-class'>
      <div className='card'>
      <input
      className='up-inp'
        type="text"
        placeholder="Name"
        value={post_name}
        onChange={(e) => setName(e.target.value)}
      />
      <input 
      className='up-inp'
      type="file" onChange={handleFile} />
      <textarea
        placeholder="Description"
        value={post_description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <input
      className='up-inp'
        type="text"
        placeholder="Price"
        value={post_price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleUpdate}>Update Product</button>
      </div>
    </div>
    </div>
  );
}

export default UpdateData;
