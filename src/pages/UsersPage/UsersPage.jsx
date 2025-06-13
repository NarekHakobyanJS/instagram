import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { socialAPI } from '../../api/api'
import { getUsersAC } from '../../store/reducers/userReducer'


import './UsersPage.css'
import UsersCard from '../../components/UsersCard/UsersCard'

const UsersPage = () => {
  const dispatch = useDispatch()

  const {users} = useSelector((state) => state.usersPage)

  useEffect(() => {
    socialAPI.getUsers()
      .then((res) => dispatch(getUsersAC(res.data.items)))
  }, [])

  return (
    <div>

      <div className='users-card'>
        {
          users?.map((user) => {
            return <UsersCard user={user} key={user.id}/>
          })
        }
      </div>
    </div>
  )
}

export default UsersPage