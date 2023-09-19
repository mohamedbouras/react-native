import React, { useState } from 'react'
import './ConfirmPass.css'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

function ConfirmPass() {
  const [newpassword,setNewPassword]=useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  const [message,setMessage]= useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const email = location.state?.email
  console.log('email5',email)
  const HandelPass = (event)=>{
setNewPassword(event.target.value)
  }
  

  const handelP = (event)=>{
    setConfirmPassword(event.target.value)
  }
  const HandelRes = () =>{
    if (newpassword !== confirmPassword){
setMessage('please add the same password')
return;
    }
    axios.put('http://localhost:3000/api/changePassword',{email,password:newpassword})
    .then((response)=>{
      console.log(response.data)
      setMessage('password changed')
      setTimeout(function(){
navigate('/')
      },1000)
    }).catch((err)=>{
      console.log(err)
    })
    
  }

  return (
    <div className='Pass'>
        <h3>
            Confirm your new password
        </h3>
        <input type='password' placeholder='New password' onChange={HandelPass} value={newpassword}></input>
        <input type = 'password' placeholder='Confirm your password'onChange={handelP} value={confirmPassword}></input>
        <p>{message}</p>
        <button type='submit'onClick={HandelRes}>Confirm</button>
    </div>
  )
}

export default ConfirmPass