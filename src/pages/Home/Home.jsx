import React from 'react'
import './Home.css'
import Login from '../../components/Login/Login'
import { useSelector } from 'react-redux'
import {Navigate} from 'react-router-dom'

const Home = () => {
  const {userId} = useSelector((state) => state.auth)

  if(userId){
    return <Navigate to={`/users/${userId}`}/>
  }

  return (
    <h1>
      <Login />
    </h1>
  )
}

export default Home