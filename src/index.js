import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.js';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import store from "./store";

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);


ReactDOM.render( app, document.getElementById('root'));
registerServiceWorker();
