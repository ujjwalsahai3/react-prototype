import React from 'react'
import Navbar from '../Navbar/Navbar'

const Layout = (props) =>{
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <div className='container dashboard'>
                        {props.children}
                </div>
            </main>
        </div>
    )
}

export default Layout