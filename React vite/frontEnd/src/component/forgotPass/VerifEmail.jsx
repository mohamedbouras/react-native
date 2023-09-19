import React, { useState } from 'react'
import './VerifEmail.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import VerifCode from '../VerifCode/VerifCode'
function VerifEmail() {
  const [email,setEamil] = useState('')
  const [message,setMessage] = useState('')
  const navigate = useNavigate()
  const handelSendEmail = ()=>{
    axios.post('http://localhost:3000/forget-password-email',{email})
    .then((response)=>{
      console.log(response.data)
      setMessage('Email sent successfully')
      setTimeout(function(){
navigate('/VerifCode',{state:{email}})
      },1000)
      
    }).catch((err)=>{
      console.log("error",err)
        setMessage('Could not send email')
    })
  }
  const handelChange = (event)=>{
    setEamil(event.target.value)

  }
  return (
    <div className="confirmation-container">
    <div className="card">
      <h3>Confirm Your Email</h3>
      <p>Please add your correct email</p>
      <input
        placeholder="Email"
        required
        onChange={handelChange}
        value={email}
      />
      <p>{message}</p>
      <button type="submit" onClick={handelSendEmail}>
        Confirm
      </button>
    </div>
  </div>
  )
}

export default VerifEmail