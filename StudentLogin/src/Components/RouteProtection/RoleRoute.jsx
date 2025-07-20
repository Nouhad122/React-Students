import React from 'react'
import { Navigate } from 'react-router-dom';
import { isLoggedIn, getUserInfo } from '../../Auth/auth';

const RoleRoute = ({ allowedRoles, children}) => {
    if(!isLoggedIn()) return <Navigate to="/login" />;

    const user = getUserInfo();
    if(!user ||!allowedRoles.includes(user.role)) 
        return <Navigate to="/unauthorized" />;

    return children;
}

export default RoleRoute
