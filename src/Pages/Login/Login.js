import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Login/Login.css';
import InputController from '../Input/InputController.js';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Connectiondb/firebase';
import myimg from '../imagesSt/Login.png';

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = () => {
    if (!values.email || !values.password) {
      setErrorMsg('Fill all Fields!!!');
      return;
    }

    setErrorMsg('');

    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(() => {
        // Successfully logged in
        navigate('/Home');
      })
      .catch((error) => {
        // Handle login error
        setErrorMsg(error.message);
      });
  };

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-sm-12 mt-5'>
            <img src={myimg} alt='Your Image' className='img-fluid' />
          </div>
          <div className='col-md-6 col-sm-12'>
            <div className='innerCard'>
              <h1 className='heading '>Hey! <br />Welcome Back!!</h1>

              <InputController
                label='Email'
                type='email'
                placeholder='Enter email address'
                onChange={(event) => setValues({ ...values, email: event.target.value })}
              />
              <InputController
                label='Password'
                type='password'
                placeholder='Enter Password'
                onChange={(event) => setValues({ ...values, password: event.target.value })}
              />

              <div className='footer'>
                <button onClick={handleLogin}>Login</button>
                <p>
                  Don't have an account?{' '}
                  <span>
                    <Link to='/SignUp'>Sign Up</Link>
                  </span>
                </p>
                {errorMsg && <p className='error'>{errorMsg}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
