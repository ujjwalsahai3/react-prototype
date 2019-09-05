import {combineReducers} from 'redux'
import userReducer from './userReducer'
import employeeReducer from './employeeReducer'


const rootReducer = combineReducers({
    users: userReducer,
    employees: employeeReducer
})

export default rootReducer