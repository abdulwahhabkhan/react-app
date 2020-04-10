import React, { Component } from 'react';
//import logo from './logo.svg';
import './style/app.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//import Person from './Pages/Person/Person';
import routes from "./routes";
import settings from "./Config/settings";

window.settings = settings;

class App extends Component {

  render() {
    return (
        <Router>
          <Switch>
              {routes.map((route, idx) =>
                  <Route path={route.path} component={route.component} key={idx} />
              )}
          </Switch>
        </Router>

    );
  }
}

export default App;
