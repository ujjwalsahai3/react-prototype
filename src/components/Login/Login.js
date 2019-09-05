import React, {useState} from 'react'
import {connect} from 'react-redux'
import {authenticateUser} from '../../store/Actions/userActions'
import {Redirect} from 'react-router-dom'
import {GlobalConst} from '../../constants/globalConstants'

const Login = props => {
    const [state, setState] = useState({
        email: null,
        password : null
    })

    const onChangeHandler = (event) =>{
        const {name, value}= event.target;
        setState({
            ...state,
            [name]: value
        })
    }

    const onSubmitHandler = (event) =>{
        event.preventDefault()
        props.authenticateUser(state)
    }

    if(props.profile.id !== undefined){
        const getAuthProfile=JSON.parse(localStorage.getItem(GlobalConst.profile)) 
        if(getAuthProfile === null)
            localStorage.setItem(GlobalConst.profile, JSON.stringify(props.profile))

        return <Redirect to='/' />
    }
        

    return (
        <div className='container white'>
            <form onSubmit={onSubmitHandler}> 
                <h5 className='orange-text text-darken-2'>Login..</h5>
                <div className='input-field'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' name='email' autoFocus  onChange={onChangeHandler} required />
                </div>
                <div className='input-field'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' name='password' autoFocus  onChange={onChangeHandler} required />
                </div>
                <div className='input-feild'>
                    <span className='red-text'>{props.errorMessage}</span>
                </div>
                <button type='submit' className='btn orange lighten-2 z-depth-0'>Login</button> 
            </form>
        </div>
    )  
}

const mapStateToProps = (state) => {
    return {
        errorMessage: state.users.authenticationError,
        profile: state.users.authenticatedUser
    }
}

const mapDispatchToProps= (dispatch) => {
    return {
        authenticateUser: (credentials) => {dispatch(authenticateUser(credentials))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
