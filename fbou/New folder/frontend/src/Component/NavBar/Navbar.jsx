import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Navbar({ filterData }) {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    if (filterData) {
      const newFilteredData = filterData.filter((item) =>
        item.post_name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredData(newFilteredData);
    }
  }, [filterData, searchText]);
  

  const handleSearchTextChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
  };

  const handleSearchIconClick = () => {
    console.log(filteredData);
  };
const handelNavigate = () =>{
  navigate('/AddData')
}
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by product name"
            value={searchText}
            onChange={handleSearchTextChange}
            className="search-input"
          />
          <FaSearch className="search-icon" onClick={handleSearchIconClick} />
         
        </div>
      </div>
      <p className = 'hiii'onClick={handelNavigate}>Add data</p>
    </nav>
  );
}

export default Navbar;
