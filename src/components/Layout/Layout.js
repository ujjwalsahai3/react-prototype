import React from 'react'
import Navbar from '../Navbar/Navbar'
import ErrorHandling from '../Error/ErrorHandling'
const Layout = (props) =>{
    return (
        <div>
            <header>
                <ErrorHandling>
                    <Navbar />
                </ErrorHandling>
            </header>
            <main>
                <div className='container dashboard'>
                    <ErrorHandling>
                        {props.children}
                    </ErrorHandling>
                </div>
            </main>
        </div>
    )
}

export default Layout