import {combineReducers} from 'redux'
import app from './app'
import auth from "../../Pages/Auth/store/reducers";
const createReducer = (asyncReducers) =>
    combineReducers({
        app,
        auth,
        ...asyncReducers
    })

export default createReducer
