import {combineReducers} from 'redux'
import settingsReducer from './settings.reducer'

const appReducers = combineReducers({
    settings: settingsReducer
})

export default appReducers