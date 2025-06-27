import { socialAPI } from "../../api/api"

const LOGIN = "LOGIN"
const initState = {
    userId : null
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                userId : action.payload
            }
        default :
            return state
    }
}

const loginAC = (data) => ({type : LOGIN, payload : data});

export const loginThunk = (body) => {
    return (dispatch) => {
        socialAPI.login(body)
            .then((res) => {
                console.log(res);
                dispatch(loginAC(res.data.data.userId))
            })

    }
}
export default authReducer;