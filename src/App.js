import React, {Component} from 'react';
//import logo from './logo.svg';
import './style/app.scss';
import {BrowserRouter as Router} from 'react-router-dom';
//import PublicLayout from './Layouts/Public'
import PrivateLayout from './Layouts/Theme'
import settings from "./Config/settings";
//import NotFound from './Pages/Error/NotFound'

document.settings = settings;

class App extends Component {

    render() {
        return (
            <Router>
                <PrivateLayout />
            </Router>

        );
    }
}

export default App;
