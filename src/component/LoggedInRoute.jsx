import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


const LoggedInRoute = ({ component: Component, ...otherProps }) => {
    const user = useContext(AuthContext);

    return (
        <Route
            {...otherProps} render={(props) =>
                user ? <Component {...props} /> : <Redirect to='/' />
            }
        />

    )

}




export default LoggedInRoute;