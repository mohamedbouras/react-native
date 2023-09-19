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
    <div className='content' >
      <h3>
        confirm your email 
      </h3>
      <p>please add your correct email</p>
      <input placeholder='email' required onChange={handelChange}></input>
      <p>{message}</p>
      <button type="submit" onClick={handelSendEmail}>confirm</button>

    </div>
  )
}

export default VerifEmail