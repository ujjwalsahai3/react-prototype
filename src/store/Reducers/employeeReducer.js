import {ActionTypes} from '../../constants/actions'

const initialState = {
    allEmployees: [],
    selectedEmployee: {}
}

const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.Employees_Data : {
            return {
                ...state,
                allEmployees: action.payload
            }
        }
        case ActionTypes.Employee_Data_By_Id : {
            return {
                ...state,
                selectedEmployee: action.payload
            }
        }
        default : {
            return state
        }
    }
}

export default employeeReducer