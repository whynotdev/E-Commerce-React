
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './Connectiondb/firebase';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await signOut(auth);
        navigate('/Login');
      } catch (error) {
        console.error('Error during logout:', error.message);
        // Handle errors if necessary
      }
    };

    handleLogout();
  }, [navigate]);

  return (
    <div>
      <h1></h1>
      <p>Logging out...</p>
    </div>
  );
}

export default Logout;

