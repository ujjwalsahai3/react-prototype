import {ActionTypes} from '../../constants/actions'

const initialState = {
    authenticatedUser:{},
    authenticationError: null,
    isAuthenticated: false
}


const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.User_Authenticate : {
            return {
                ...state,
                authenticatedUser: action.payload,
                authenticationError: null,
                isAuthenticated: true
            }
        }
        case ActionTypes.User_Authentication_Error : {
            return {
                ...state,
                authenticatedUser: {},
                authenticationError: action.payload,
                isAuthenticated:false
            }
        }
        case ActionTypes.User_Update_From_LocalStorage : {
            return {
                ...state,
                authenticatedUser: action.payload,
                authenticationError: null,
                isAuthenticated: true
            }
        }
        case ActionTypes.User_Logout : {
            return {
                ...state,
                authenticatedUser: {},
                authenticationError: null,
                isAuthenticated: false
            }
        }
        default : {
            return state
        }
    }
}

export default userReducer