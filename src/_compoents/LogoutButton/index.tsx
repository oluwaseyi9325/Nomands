// src/components/LogoutButton.js
import React from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../store/userStore';

const LogoutButton = () => {
  const navigate = useNavigate();
  const clearUser = useUserStore((state) => state.clearUser);  // Zustand clearUser function

  const handleLogout = () => {
    // Remove token from cookies
    Cookies.remove('token');
    
    // Clear user data from Zustand
    clearUser();

    // Redirect to home page (or login)
    navigate('/');
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;