import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import OnSignedIn from './OnSignedIn'
import OnSignedOut from './OnSignedOut'
import {updateUserFromLocalStorage, logoutUser} from '../../store/Actions/userActions'
import {GlobalConst} from '../../constants/globalConstants'

const Navbar = (props) => {
    if (props.profile.id === undefined){
        const getAuthProfile=JSON.parse(localStorage.getItem(GlobalConst.profile)) 
        if(getAuthProfile !== null)
            props.updateUserFromLS(getAuthProfile)
    }

    const dynamicContent=props.profile.id !== undefined? <OnSignedIn profile={props.profile} userLogout={props.userLogout} /> : <OnSignedOut />
    return (
        <nav className='nav-wrapper orange lighten-2'>
            <div className="nav-wrapper">
                <div className='container'>
                    <Link to='/' className="brand-logo"><i className="material-icons">blur_circular</i>React Proto</Link>
                    <ul className='right'>
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about'>About</NavLink>
                        </li>
                        {dynamicContent}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        profile: state.users.authenticatedUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateUserFromLS : (userInfo) => {dispatch(updateUserFromLocalStorage(userInfo))},
        userLogout: () => { dispatch(logoutUser()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)