import {combineReducers} from 'redux'
import app from './app'
import auth from "../../Pages/Auth/store/reducers";
import projects from "../../Pages/Projects/store/reducers"
import tickets from "../../Pages/Projects/Tickets/store/reducers"

const createReducer = (asyncReducers) =>
    combineReducers({
        app,
        auth,
        projects,
        tickets,
        ...asyncReducers
    })

export default createReducer
