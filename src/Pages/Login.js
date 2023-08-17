import React, { useState } from 'react';
import LoginForm from '../Components/LoginForm';
import SignupForm from '../Components/SignupForm';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate=useNavigate();
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleSignup = () => {
    // You can implement further functionality here if needed
    // like storing signup details in your database
    console.log('Signup successful');
  };

  const [login, setlogin] = useState('login')
  const [signup, setsignup] = useState('')
  const [btnstyle, setbtnstyle] = useState({
    top: '0',
    left: '0',
    position: 'absolute',
    width: '10rem',
    height: '100%',
    background: 'linear-gradient(to right, #3581f4, #9be8ec)',
    borderRadius: '20px',
    transition: '.5s',
  })

  const loginClick = () => {
    setlogin('login')
    setsignup('')
    setbtnstyle({
      top: '0',
      left: '0',
      position: 'absolute',
      width: '10rem',
      height: '100%',
      background: 'linear-gradient(to right, #3581f4, #9be8ec)',
      borderRadius: '20px',
      transition: '.5s',
    })

  }

  const signupClick = () => {
    setsignup('signup')
    setlogin('')
    setbtnstyle({
      top: '0',
      left: '10rem',
      position: 'absolute',
      width: '10rem',
      height: '100%',
      background: 'linear-gradient(to right, #3581f4, #9be8ec)',
      borderRadius: '20px',
      transition: '.5s',
    })
  }

  return (
    <div className="App">
      {isLoggedIn ? 
        navigate('/dashboard')
      : (
        <div className='container'>
          <div className="button-box">
            <div id="btn" style={btnstyle}></div>
            <button type='button' className='toggle-btn' onClick={loginClick}>Login</button>
            <button type='button' className='toggle-btn' onClick={signupClick}>Signup</button>
          </div>
          <div className="login-signup">
            <div id={`${signup}`}><LoginForm handleLogin={handleLogin} /></div>
            <div id={`${login}`}><SignupForm handleSignup={handleSignup} /></div>
          </div>

        </div>
      )}
    </div>
  );
}

export default Login;
