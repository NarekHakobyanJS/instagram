import React from 'react'
import userIMG from '../../assets/user.png'
import './UsersCard.css'

const UsersCard = ({user}) => {
    
    
  return (
    <div className='user-card'>
        <h2>{user.name}</h2>
        <img src={user.photos.large ? user.photos.large : userIMG } />
        <button>follow</button>
    </div>
  )
}

export default UsersCard