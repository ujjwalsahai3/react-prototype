import React from 'react'
import {NavLink} from 'react-router-dom'
import {GlobalConst} from '../../constants/globalConstants'

const OnSignedIn = props => {
    const {profile} = props

    const onLogout =() => {
        localStorage.removeItem(GlobalConst.profile)
        props.userLogout()
    }

    return (
        <>
            <li><NavLink to="/employees">Employees</NavLink></li>
            <li title={'Welcome '+ profile.name + '!!!'}><NavLink to="/" className='btn btn-floating pink lighten-1'>{profile.initials}</NavLink></li>
            <li title="Logout"><span><button onClick={onLogout} className='btn red lighten-1 '> Logout </button></span></li>
            
        </> 
    )
}


export default OnSignedIn