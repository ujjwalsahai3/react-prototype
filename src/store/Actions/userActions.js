import {userInfo, userCredentials} from '../../data/userData'
import {ActionTypes} from '../../constants/actions'
import {Errors} from '../../constants/errors'

export const authenticateUser = (userInput) => {
    const fetchUserData = userInfo.filter(user =>{
        return (user.email.toLowerCase() === userInput.email)
    });
    if(fetchUserData.length){
        const {id} = fetchUserData[0];
        const checkPassword = userCredentials.filter(credentials => {
            return (credentials.userId === id && credentials.password === userInput.password)
        })
        if(checkPassword.length)
            return {type: ActionTypes.User_Authenticate, payload: fetchUserData[0]}
        else
            return {type: ActionTypes.User_Authentication_Error, payload: Errors.Password_Invalid}
    }
    else
        return {type: ActionTypes.User_Authentication_Error, payload: Errors.Email_Invalid}
}

export const updateUserFromLocalStorage = (userInfo) => {
    return {type:ActionTypes.User_Update_From_LocalStorage, payload: userInfo}
}

export const logoutUser = () => {
    return {type: ActionTypes.User_Logout}
}