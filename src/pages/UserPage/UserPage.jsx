import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { profileThunk } from '../../store/reducers/profileReducer';
import userIMG from '../../assets/user.png'

const UserPage = () => {
  const dispatch = useDispatch()
  const {id} = useParams();
  const {profile} = useSelector((state) => state.profilePage)
  useEffect(() => {
    dispatch(profileThunk(id))
  }, [])

  return (
    <div>
      <h2>{profile?.fullName}</h2>
      <h2>{profile?.id}</h2>
      <img src={profile?.photos.large ? profile?.photos.large : userIMG } />
      <button>Edite</button>
    </div>
  )
}

export default UserPage