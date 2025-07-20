import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'
import { logout, isLoggedIn } from '../../Auth/auth'

const Navbar = () => {
    const items = [
      !isLoggedIn() && (
        {
          label: <Link to="/login">Login</Link>,
          key: 'login',
        }
      ),
        {
            label: <Link to="/students">Students</Link>,
            key: 'students',
          },
          isLoggedIn() && (
          {
            label: <Link to="/login" onClick={logout}>Logout</Link>,
            key: 'logout',
          }
          )
    ];

  return (
    <nav className={classes['navbar']}>
      <div className={classes['navbar__logo']}>
        <h1><Link to="/">React Students</Link></h1>
      </div>
        <Menu 
         mode="horizontal" 
         items={items} 
         className={classes['navbar__custom-menu']}
         theme='dark'
        />
    </nav>
  )
}

export default Navbar
