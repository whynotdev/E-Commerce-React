import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignUp() {
  return (
    <div className="container mt-5 ">
      <div className="card ">
        <div className="card-body">
          <h1 className="card-title mb-4">Sign Up</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputUsername" className="form-label">Username</label>
              <input type="text" className="form-control" id="exampleInputUsername" placeholder="Enter username" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword" placeholder="Password" />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck" />
              <label className="form-check-label" htmlFor="exampleCheck">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
      <p className="mt-3">Already have an account? <a href="/Login">Login</a></p>
    </div>
  );
}

export default SignUp;
