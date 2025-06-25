import { socialAPI } from "../../api/api";

const GET_USERS = 'GET_USERS';
const IS_FETTCHING = 'IS_FETTCHING';
const CHANGE_PAGE = 'CHANGE_PAGE';
const TOTAL_COUNT = 'TOTAL_COUNT';

const initState = {
    users: [],
    isFettching: false,
    totalCount: 1000,
    totalPageCount: 100,
    page: 1
}

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_USERS: {
            return {
                ...state,
                users: action.payload
            }
        }
        case IS_FETTCHING:
            return {
                ...state,
                isFettching: action.payload
            }
        case CHANGE_PAGE:
            return {
                ...state,
                page: action.payload
            }
        case TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.payload
            }
        default:
            return state
    }
}

const getUsersAC = (data) => ({ type: GET_USERS, payload: data })
const isFettchingAC = (bool) => ({ type: IS_FETTCHING, payload: bool })
const totalAC = (count) => ({type : TOTAL_COUNT, payload : count })
export const changePageAC = (page) => ({ type: CHANGE_PAGE, payload: page })

export const getUsersThunkCreator = (page) => {
    return (dispatch) => {
        dispatch(isFettchingAC(true))
        socialAPI.getUsers(page)
            .then((res) => {
                dispatch(getUsersAC(res.data.items))
                dispatch(isFettchingAC(false))
                dispatch(totalAC(res.data.totalCount))
            })
    }
}

export default usersReducer