import React from 'react'
import { NavLink } from 'react-router-dom'

const Errorpage = () => {
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>404</h1>
                </div>
                <h2>Page not Found !</h2>
                <p className="mb-5">
                    THE PAGE YOU ARE LOOKING MIGHT HAVE BEEN REMOVED  OR TEMPERORILY UNAVAILABLE.
                
                </p>
                <NavLink to="/"> Back To HomePage</NavLink>
            </div>
        </div>
    )
}

export default Errorpage
