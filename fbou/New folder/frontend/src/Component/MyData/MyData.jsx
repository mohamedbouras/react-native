import React, { useState } from 'react';
import axios from 'axios';
import './MyData.css';
import { useNavigate } from 'react-router-dom';

function MyData({ filterData }) {
  const navigate = useNavigate();
  const [filteredData, setFilteredData] = useState(filterData);

  const handleDelete = (idposts) => {
    console.log("Deleting post with ID:", idposts);
    axios
      .delete(`http://localhost:3000/api/posts/${idposts}`)
      .then((res) => {
        console.log("Delete response:", res.data);
        setFilteredData((prevData) =>
          prevData.filter((post) => post.idposts !== idposts)
        );

        console.log('delete success');
      })
      .catch((err) => {
        console.error("Delete error:", err);
      });
  };

  const updateNavigate = (idposts) => {
 
    navigate(`/UpdateData/${idposts}`);
  };

  return (
    <div className='data-container'>
        
      {filteredData.map((e, i) => (
        <div key={i} className='card-container'>
          <img src={e.post_image} alt={`Post ${i}`} />
          <h4>{e.post_name}</h4>
          <p>{e.post_description}</p>
          <h4 className='price'>{e.post_price}</h4>
          <button onClick={() => handleDelete(e.idposts)}>delete</button>
          <button onClick={() => updateNavigate(e.idposts)}>update</button>
        </div>
      ))}
    </div>
  );
}

export default MyData;
