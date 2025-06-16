import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <h1>MyGram</h1>
        <nav>
            <NavLink to='/users'>Users</NavLink>
        </nav>
    </header>
  )
}

export default Header