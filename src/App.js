import React, {Component} from 'react';
//import logo from './logo.svg';
import './style/app.scss';
import {BrowserRouter as Router} from 'react-router-dom';
//import PublicLayout from './Layouts/Public'
import Theme from './Layouts/Theme'
import Auth from './Pages/Auth'
import settings from "./Config/settings";
import moment from "moment";

Date.prototype.toJSON = function(){
    return moment(this.getTime()).format("YYYY-MM-DD");
};
//import NotFound from './Pages/Error/NotFound'

document.settings = settings;

class App extends Component {

    render() {
        return (
            <Router>
                <Auth>
                    <Theme />
                </Auth>
            </Router>
        );
    }
}

export default App;
