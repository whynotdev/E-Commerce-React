import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../Connectiondb/firebase';
import { Link, useNavigate } from 'react-router-dom';
import InputController from '../Input/InputController';
import myimg from '../imagesSt/signup.png';

function SignUp() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleInputChange = (key, value) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all Fields!!!");
      return;
    }

    setErrorMsg(" ");
    setSubmitButtonDisabled(true);

    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        const user = res.user;
        await updateProfile(user, { displayName: values.name });
        navigate("/Home");
        console.log(user);
      })
      .catch((err) => {
        if (err.code === "auth/email-already-in-use") {
          setErrorMsg("Email is already in use. Please choose a different email.");
        } else {
          setErrorMsg(err.message);
        }
      })
      .finally(() => setSubmitButtonDisabled(false));
  };

  return (
    <>
      <div className='container '>
        <div className='row'>
          <div className='col-md-6 col-sm-12 mt-5'>
            {/* SVG image goes here */}
            <img src={myimg} alt="Your Image" className="img-fluid" />
          </div>
          <div className='col-md-6 col-sm-12'>
            <div className='innerCard '>
              <h1 className='heading '>SignUp</h1>
              <InputController
                label="Name"
                placeholder="Enter Fullname"
                onChange={(event) => handleInputChange("name", event.target.value)}
              />
              <InputController
                label="Email"
                placeholder="Enter Email "
                onChange={(event) => handleInputChange("email", event.target.value)}
              />
              <InputController
                label="Password"
                placeholder="Enter Password"
                onChange={(event) => handleInputChange("pass", event.target.value)}
              />
              <div className='footer'>
                <b className='error'>{errorMsg}</b>
                <button className='btn btn-primary' onClick={handleSubmission} disabled={submitButtonDisabled}>
                  SignUp
                </button>
                <p>
                  Already have an account?{" "}
                  <span>
                    <Link to="/Login">Login</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
