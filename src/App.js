import React, {Component} from 'react';
//import logo from './logo.svg';
import './style/app.scss';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import user from './services/auth'

//import Person from './Pages/Person/Person';
import routes from "./routes";
import settings from "./Config/settings";
import NotFound from './Pages/Error/NotFound'

document.settings = settings;

class App extends Component {


    render() {
        const PrivateRoute = ({component: Component, ...rest}) => (
            <Route {...rest} render={(props) => (
                user.isUserAuthenticated() === true
                    ? <Component {...props} />
                    : <Redirect to='/logout'/>
            )}/>
        )
        return (
            <Router>
                <Switch>
                    {routes.map((route, idx) =>
                        route.isPublic ?
                            <Route path={route.path} component={route.component} key={idx} exact={!route.children}/> :
                            <PrivateRoute path={route.path} component={route.component} key={idx} exact={!route.children} />
                    )}
                    <Route component={NotFound}></Route>
                </Switch>
            </Router>

        );
    }
}

export default App;
