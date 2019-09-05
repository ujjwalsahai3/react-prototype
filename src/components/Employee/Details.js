import React from 'react'
import {connect} from 'react-redux'
import {getEmployeeById} from '../../store/Actions/employeeAction'
import {Redirect} from 'react-router-dom'

const Details = props => {
    
    const employeeId=props.match.params.id
    props.getEmployee(employeeId)
   
    if(props.profile.id === undefined)
        return <Redirect to='/login' />
    
    // if(props.employee.id === undefined)
    //     return <Redirect to='/employees' />

    const employeeData = props.employee
    return (
        <div className='section row'>
            <div className='card z-depth-0'>
                <div className='card-content'>
                    <span className='valign-wrapper'>
                        <span>
                            <img src={employeeData.picture} className='responsive-img circle left-align' alt={employeeData.firstName} />
                        </span>
                        <span className='card-title ' style={{paddingLeft:20}}>
                            {employeeData.firstName+" "+ employeeData.lastName}
                        </span>
                    </span>
                </div>
                <div className='card-content col s12 m12'>
                    <p>
                        <h5>About</h5>
                        <article>{employeeData.about}</article>
                    </p>
                </div>
                <div className='card-content col s12 m6'>
                    <p>
                        <h5>Company</h5>
                        <article>{employeeData.company}</article>
                    </p>
                </div>
                <div className='card-content col s12 m6'>
                    <p>
                        <h5>Email</h5>
                        <article>{employeeData.email}</article>
                    </p>
                </div>
                <div className='card-content col s12 m6'>
                    <p>
                        <h5>Phone</h5>
                        <article>{employeeData.phone}</article>
                    </p>
                </div>
                <div className='card-content col s12 m6'>
                    <p>
                    <h5>Address</h5>
                        <article>{employeeData.address}</article>
                    </p>
                </div>
                <div class="card-content col s12 m12">
                   <small className='blue-text'>Created On {employeeData.createdOn}</small> 
                </div>
            </div>
            
        </div>
    )
}

const mapStateToProps = (state,componentProp) =>{
    return {
        employee : state.employees.selectedEmployee,
        profile : state.users.authenticatedUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getEmployee : (id) => {dispatch(getEmployeeById(id))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Details)