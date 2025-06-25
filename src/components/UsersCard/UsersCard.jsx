import React from 'react'
import userIMG from '../../assets/user.png'
import './UsersCard.css'
import { NavLink } from 'react-router-dom'

const UsersCard = ({user}) => {
    
    
  return (
    <div className='user-card'>
        <NavLink to={`/users/${user.id}`}>{user.name}</NavLink>
        <img src={user.photos.large ? user.photos.large : userIMG } />
        <button>follow</button>
    </div>
  )
}

export default UsersCard