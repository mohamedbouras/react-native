import React, { useState } from 'react';
import './Login.css'
import axios from 'axios'
import { setUserId } from '../../action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login= () => {
  const [username, setUsername] = useState('');
  const [email, setUseremail] = useState('');
  const [password, setUserassword] = useState('');
  const [message , setMessage] = useState('')
  // const userId = useSelector((state) => state.Users.userId);
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const handleSignUpClick = () => {
    const container = document.getElementById('container');
    container.classList.add('right-panel-active');
  };

  const handleSignInClick = () => {
    const container = document.getElementById('container');
    container.classList.remove('right-panel-active');
  };
  const handleNameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setUseremail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setUserassword(event.target.value);
  };
  const handelRegister = (event) => {
    event.preventDefault()
    axios.post('http://localhost:3000/api/register',{username,email,password}).then((response)=>{
      console.log('register success',response.data)
      navigate('/home')
      // dispatch(setUserId(response.data.userId));

    }).catch((err)=>{
      console.log(err)
    })
  }

const handelLogin = (event) => {
  event.preventDefault();
  axios
    .post('http://localhost:3000/api/login', { email, password })
    .then((response) => {
      console.log('welcome', response.data);
      navigate('/home')

      // dispatch(setUserId(response.data.userId));

    })
    .catch((error) => {
      console.log(error);
      if (error.response && error.response.status === 401) {
        const errorMessage = error.response.data.message;
        if (errorMessage === 'Invalid email or password') {
          console.log(setMessage)
          setMessage('Invalid email or password. Please try again.');
        } else {
          setMessage('An error occurred. Please try again later.');
        }
      } else {
        setMessage('An error occurred. Please try again later.');
      }
    });
};

const handelNavigate = () =>{
  navigate ("/VerifEmail")
}

  

  return (
    <div className='body'>
    <div className="container" id="container">
      <div className="form-container sign-up-container">
        <form action="#" onSubmit={(event)=>handelRegister(event)}>
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" onChange={handleNameChange} />
          <input type="email" placeholder="Email" onChange={handleEmailChange}/>
          <input type="password" placeholder="Password"  onChange={handlePasswordChange}/>
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#" onSubmit={(event)=>handelLogin(event)}>
          <h1>Sign in</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your account</span>
          <input type="email" placeholder="Email" onChange={handleEmailChange}/>
          <input type="password" placeholder="Password" onChange={handlePasswordChange}/>
           <p className='error-Message' color='red'>{message}</p>
          <a href="#" onClick={handelNavigate}>Forgot your password?</a>
          <button >Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" onClick={handleSignInClick}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start your journey with us</p>
            <button className="ghost" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
   
    </div>
    </div>
  );
};

export default Login;


