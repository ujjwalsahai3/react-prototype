import React , {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {employees} from '../../store/Actions/employeeAction'
import Preloader from '../Utility/Loader'
import Table from '../Utility/Table'

const Employees = props => {
    const [isLoading, setIsLoading]= useState(true)
    const [employeeData, setEmployeeData] = useState ([])


    useEffect(()=>{
        setIsLoading(true);
        if(props.employees.length){
            setEmployeeData(props.employees)
            setIsLoading(false)
        }
    },[props.employees])

    props.getAllEmployees()
    if(props.profile.id === undefined)
            return <Redirect to='/login' />

    const headerContent = [{title:'Name'}, {title:'Company'}, {title:'Email'}, {title: 'Phone'}]
    const bodyContent = employeeData.map(employee =>{
        return {
            uniqueKey: employee.id,
            column1: <span className='valign-wrapper'>
            <span style={{paddingLeft:5}}><img className="responsive-img circle left-align" src={employee.picture} alt={employee.firstName} /></span>
            <span style={{paddingLeft:10}}>{employee.firstName+ " "+ employee.lastName}</span> 
            </span>,
            column2: employee.company,
            column3: employee.email,
            column4: employee.phone
        }
    })

    

    const dynamicContent = isLoading ? <Preloader /> : <Table tableheader={headerContent} tablebody={bodyContent} redirectToRoute="/employee/" />
    return (
        <div className='section white employees-container'>
                <h5>Employee Details</h5>
                {dynamicContent}
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        profile : state.users.authenticatedUser,
        employees: state.employees.allEmployees
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllEmployees: () => {dispatch(employees())}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Employees)
