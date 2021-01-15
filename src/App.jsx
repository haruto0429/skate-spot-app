
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import React from 'react';
import Area from './pages/Area';
import Top from './pages/Top';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Signin from './pages/Signin';
import Login from './pages/Login';
import Share from './pages/Share';
// import Post from './component/Post';


import AuthProvider from './context/AuthContext'
import LoggedInRoute from './component/LoggedInRoute'

const App = () => {
    return (
        <>
            <AuthProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Top} />
                        <Route exact path='/Signin' component={Signin} />
                        <Route exact path='/Login' component={Login} />
                        <LoggedInRoute exact path='/area' component={Area} />
                        <Route exact path='/Page1' component={Page1} />
                        <Route exact path='/Page2' component={Page2} />
                        <Route exact path='/Share' component={Share} />
                    </Switch>
                </BrowserRouter>
            </AuthProvider>
        </>
    )
}

export default App