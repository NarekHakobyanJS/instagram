import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersThunkCreator } from '../../store/reducers/userReducer'


import './UsersPage.css'
import UsersCard from '../../components/UsersCard/UsersCard'

const UsersPage = () => {
  const dispatch = useDispatch()

  const { users, isFettching } = useSelector((state) => state.usersPage)

  useEffect(() => {
   dispatch(getUsersThunkCreator())
  }, [])

  return (
    <div>

      <div className='users-card'>
        {
          isFettching
            ? <h1>Loading..</h1>
            : users?.map((user) => {
              return <UsersCard user={user} key={user.id} />
            })
        }
      </div>
    </div>
  )
}

export default UsersPage