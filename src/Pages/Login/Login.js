import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Login/Login.css';

import InputController from '../Input/InputController.js';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <div className='container'>
        <div className='innerCard'>
          <h1 className='heading text-warning'>Login</h1>

          <InputController label="Email" placeholder="Enter email address" />
          <InputController label="Password" placeholder="Enter Password" />

          <div className='footer'>
            <button>Login</button>
            <p>
              Don't have an account?{" "}
              <span>
                <Link to="/SignUp">Sign Up</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
