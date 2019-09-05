import React from 'react'
import {NavLink} from 'react-router-dom'

const OnSignedOut = () => {
    return (
        <>
            <li title="Login"><NavLink to="/login">Login</NavLink></li>
        </> 
    )
}

export default OnSignedOut