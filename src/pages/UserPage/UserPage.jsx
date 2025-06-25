import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { profileThunk } from '../../store/reducers/profileReducer';

const UserPage = () => {
  const dispatch = useDispatch()
  const {id} = useParams();

  useEffect(() => {
    dispatch(profileThunk(id))
  }, [])

  return (
    <div>UserPage</div>
  )
}

export default UserPage