import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePageAC, getUsersThunkCreator } from '../../store/reducers/userReducer'


import './UsersPage.css'
import UsersCard from '../../components/UsersCard/UsersCard'

const UsersPage = () => {
  const dispatch = useDispatch()

  const { users, isFettching, totalPageCount, totalCount, page } = useSelector((state) => state.usersPage)


  const btnCounts = Math.ceil(totalCount/totalPageCount)

  let pages = []
  for(let i = 1; i <= btnCounts; i++){
    pages.push(i)
  }
  
  useEffect(() => {
   dispatch(getUsersThunkCreator(page))
  }, [page])


  const cp = (p) => {
    dispatch(changePageAC(p))
  }
  return (
    <div>
      {
        pages.map((page) => {
          return <button key={page} onClick={() => cp(page)}>{page}</button>
        })
      }
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