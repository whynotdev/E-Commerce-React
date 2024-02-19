import React from 'react'
import { Link } from 'react-router-dom'

function Home(props) {
  return (
    <>
     <div><div>
      <h1>
        <Link to="/Login" >Login</Link>
        </h1>
        <hr/>
        <h1>
        <Link to="/SignUp" >SignUp</Link>
        </h1>
      </div></div>
    </>
   
  )
}
export default Home