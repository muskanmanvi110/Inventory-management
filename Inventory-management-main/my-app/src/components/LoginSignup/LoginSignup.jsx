import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ ADD THIS
import './LoginSignup.css';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const LoginSignup = () => {
  const [action, setAction] = useState("SignUp");
  const navigate = useNavigate(); // ✅ INIT NAVIGATION

  const handleLogin = () => {
    // Here you can add validation or API call
    // For now, just navigate to /home
    navigate('/home');
  };

  return (
    <div className='container'>
      <div className="inputform">
        <div className="title">{action}</div>

        {action === "SignUp" && (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Enter name" />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="text" placeholder='Enter email' />
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder='Enter password' />
        </div>

        {action === "Login" && (
          <div className="forgotpassword">
            <div className="text">Forgot password?</div>
            <div className="click"><button>Click here</button></div>
          </div>
        )}

        <div className="buttons">
          <div className="button">
            <button 
              onClick={() => {
                setAction("Login");
                if (action === "Login") handleLogin(); // ✅ Navigate only if already in Login mode
              }}
            >
              Login
            </button>
          </div>
          <div className="button">
            <button onClick={() => setAction("SignUp")}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;

