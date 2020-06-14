import React, {Component} from 'react';
//import logo from './logo.svg';
import './style/app.scss';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import user from './services/auth'
import PublicLayout from './Layouts/Public'
import PrivateLayout from './Layouts/Private'

//import Person from './Pages/Person/Person';
import routes from "./routes";
import settings from "./Config/settings";
import NotFound from './Pages/Error/NotFound'

document.settings = settings;

class App extends Component {


    render() {
        console.log("[App.js render]")
        return (
            <Router>
                <Switch>
                    <Route path={['/login', '/register']}>
                        <PublicLayout />
                    </Route>
                    <Route path={'/app'}>
                        <PrivateLayout />
                    </Route>
                    <Route path="*" component={NotFound}></Route>
                </Switch>


            </Router>

        );
    }
}

export default App;
