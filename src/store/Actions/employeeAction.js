import {ActionTypes} from '../../constants/actions'
import {employeesData} from '../../data/employeeData'

export const employees = () => {
const empsData= getEmployeeData('firstName','DESC');
return {type:ActionTypes.Employees_Data, payload: empsData}
}

export const getEmployeeById = (id) => {
    const selectedEmployee = employeesData.filter(employee => (employee.id === id))
    return {type:ActionTypes.Employee_Data_By_Id, payload: selectedEmployee[0]}
}

export const getEmployeeDataByFilter = (tag,orderBy) => {
    const empsData= getEmployeeData(tag,orderBy);
    return {type:ActionTypes.Employees_Data, payload: empsData}
}

const getEmployeeData =(sortBy, orderBy) => {
    if(orderBy === 'DESC')
    {
        return employeesData.sort((a,b)=> { 
            let keyA=a[sortBy]
            let keyB = b[sortBy]
            return ((keyA < keyB) ? -1 : ((keyA > keyB) ? 1 : 0));
        });

    }
    else {
        return employeesData.sort((a,b)=> { 
            let keyA=a[sortBy]
            let keyB = b[sortBy]
            return ((keyA > keyB) ? -1 : ((keyA < keyB) ? 1 : 0));
        });
    }
}

