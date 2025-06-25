import { socialAPI } from "../../api/api"

const GET_PROFILE = 'GET_PROFILE'

const initState = {
    profile : null
}

const profileReducer = (state = initState, action) => {
    switch(action.type){
        case GET_PROFILE : 
            return {
                ...state,
                profile : action.payload
            }

        default: 
            return state
    }
}

const profileAC = (data) => ({type : GET_PROFILE, payload : data})

export const profileThunk = (id) => {
    return (dispatch) => {
        socialAPI.getUser(id)
            .then((res) => {
                dispatch(profileAC(res.data))
            })
    }
}

export default profileReducer