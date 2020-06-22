import {combineReducers} from 'redux'
import app from './app'
import auth from "../../Pages/Auth/store/reducers";
import projects from "../../Pages/Projects/store/reducers"
const createReducer = (asyncReducers) =>
    combineReducers({
        app,
        auth,
        projects,
        ...asyncReducers
    })

export default createReducer
