import React from 'react'
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from '../../Auth/auth';

const ProtectedRoute = ({children}) => {
    if(!isLoggedIn()){
        return <Navigate to="/login" />;
    }
  return children;
}

export default ProtectedRoute
