import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <h1>MyGram</h1>
        <nav>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/login'>Login</NavLink>
        </nav>
    </header>
  )
}

export default Header