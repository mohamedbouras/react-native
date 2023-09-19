import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store';
import Login from './Component/Login/Login';
import Navbar from './Component/NavBar/Navbar';
import VerifEmail from './Component/ForgotPass/VerifEmail';
import VerifCode from './Component/VerifCode/VerifCode';
import ConfirmPass from './Component/ConfirmPass/ConfirmPass';
import MyData from './Component/MyData/MyData';
import ScrollToTopButton from './Component/ScrollToTopButton/ScrollToTopButton';
import AddData from './Component/AddData/AddData';
import UpdateData from './Component/UpdateData/UpdateData';
import Footer from './Component/Footer/Footer';
import axios from 'axios';

function App() {
  // const [filterData, setFilterData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios.get('http://localhost:3000/api/posts')
  //     .then((res) => {
  //       setFilterData(res.data);
  //       setLoading(false); 
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setLoading(false);
  //     });
  // }, []); 

  
  // const addNewPost = (newPost) => {
  //   setFilterData((prevData) => [...prevData, newPost]);
  // };
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/api/posts')
      .then((res) => {
        setFilterData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const addNewPost = (newPost) => {
    setFilterData((prevData) => [...prevData, newPost]);
  };

  const updatePost = (updatedPost) => {
    // Find the index of the post to be updated
    const index = filterData.findIndex((post) => post.idposts === updatedPost.idposts);

    if (index !== -1) {
      // Update the post in the state
      setFilterData((prevData) => {
        const newData = [...prevData];
        newData[index] = updatedPost;
        return newData;
      });
    }
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/VerifEmail" element={<VerifEmail />} />
          <Route path="/VerifCode" element={<VerifCode />} />
          <Route path="/ConfirmPass" element={<ConfirmPass />} />
          <Route path="/AddData" element={<AddData addNewPost={addNewPost} />} />

          <Route path="/Nav" element={<Navbar filterData={filterData || []} />} />
          <Route path="/mydata" element={<MyData filterData={filterData} />} />
          <Route path="/UpdateData/:idposts" element={<UpdateData onUpdated={updatePost}/>} />

          <Route
            path="/home"
            element={
              <>
                <Navbar filterData={filterData || []} />
                <MyData filterData = {filterData}/>
                <ScrollToTopButton />
             
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
