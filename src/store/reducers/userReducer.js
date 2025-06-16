import { socialAPI } from "../../api/api";

const GET_USERS = 'GET_USERS';
const IS_FETTCHING = 'IS_FETTCHING'
const initState = {
    users : [],
    isFettching : false
}

const usersReducer = (state = initState, action) => {
    switch(action.type){
        case GET_USERS : {
            return {
                ...state,
                users : action.payload
            }
        }
        case IS_FETTCHING :
            return {
                ...state,
                isFettching : action.payload
            }
        default :
            return state
    }
}

 const getUsersAC = (data) => ({type : GET_USERS, payload : data})
 const isFettchingAC = (bool) => ({type : IS_FETTCHING, payload : bool})


export const getUsersThunkCreator = () => {
    return (dispatch) => {
        dispatch(isFettchingAC(true))
        socialAPI.getUsers()
          .then((res) => {
            dispatch(getUsersAC(res.data.items))
            dispatch(isFettchingAC(false))
          })
    }
}

export default usersReducer