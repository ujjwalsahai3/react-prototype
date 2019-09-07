import React , {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import Preloader from '../Utility/Loader'
import Table from '../Utility/Table'
import {employees, getEmployeeDataByFilter} from '../../store/Actions/employeeAction'

const Employees = props => {
    const [isLoading, setIsLoading]= useState(true)
    const [employeeData, setEmployeeData] = useState ([])


    useEffect(()=>{
        console.log("fire",props.employees)
        if(employeeData.length===0)
            props.getAllEmployees()
        setIsLoading(true);
        if(props.employees.length){
            setEmployeeData(props.employees)
            setIsLoading(false)
        }
    },[props.employees,isLoading])

    
    if(props.profile.id === undefined)
            return <Redirect to='/login' />

    const headerContent = [{title:'Name', tags:'firstName'}, {title:'Company',tags:'company'}, {title:'Email', tags:'email'}, {title: 'Phone',tags:'phone'}]
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

    const fnFilter = (obj) =>{
        //console.log(obj)
        props.getEmployeeByFilter(obj.tag,obj.order)
        setIsLoading(true)
    }
    

    const dynamicContent = isLoading ? <Preloader /> : <Table tableheader={headerContent} tablebody={bodyContent} redirectToRoute="/employee/" fnFilter={fnFilter} />
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
        getAllEmployees: () => {dispatch(employees())},
        getEmployeeByFilter: (tag,orderBy) => {dispatch(getEmployeeDataByFilter(tag,orderBy))}

    }
}


Employees.propTypes  = {
    profile: PropTypes.object,
    employees: PropTypes.array,
    getEmployeeByFilter: PropTypes.func
}

export default connect(mapStateToProps,mapDispatchToProps)(Employees)
