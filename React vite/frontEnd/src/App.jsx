import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './component/Login/Login';
import SignUp from './component/SingUp/SingUp';
import ConfirmPass from './component/ConfirmPass/ConfirmPass';
import VerifCode from './component/VerifCode/VerifCode';
import VerifEmail from './component/forgotPass/VerifEmail';
import NavBar from './component/NavBar/NavBar'


function App() {
 

  return (
    <BrowserRouter>
    <Routes>

    <Route path="/login" element={<Login />} />
    <Route path="/Signup" element={<SignUp />} />
    <Route path="/ConfirmPass" element={<ConfirmPass />} />
    <Route path="/VerifCode" element={<VerifCode />} />
    <Route path="/VerifEmail" element={<VerifEmail />} />
    <Route path="/" element={<NavBar />} />
    
      
    </Routes>
  </BrowserRouter>
  )
}

export default App
