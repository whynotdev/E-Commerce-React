import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../SignUp/SignUp.css';
import InputController from '../Input/InputController';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
  <> <div className='container'>
  <div className='innerCard'>
    <h1 className='heading text-warning'>SignUp</h1>
    <InputController label="Name" placeholder="Enter Fullname" />
    <InputController label="Email" placeholder="Enter Email " />
    <InputController label="Password" placeholder="Enter Password" />
    

    <div className='footer'>
      <button>Login</button>
      <p>
       Already have an account?{" "}
        <span>
          <Link to="/Login">Login</Link>
        </span>
      </p>
    </div>
  </div>
</div>
 
  </>
  );
}

export default SignUp;
