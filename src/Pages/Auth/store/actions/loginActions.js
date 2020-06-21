import auth from '../../../../services/auth'
import {SET_USER} from "./userActions";

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const LOGIN_LOADING = 'LOGIN_LOADING'

export function login({username, password}) {
    return (dispatch) => {
        dispatch({type: LOGIN_LOADING})
        return auth.signInWithEmailAndPassword(username, password)
            .then(user=>{
                dispatch({type: SET_USER, payload: user})
                return dispatch({type: LOGIN_SUCCESS, payload: user})
            })
            .catch(err => {
                return dispatch({type: LOGIN_FAILED, payload: err})
            })
    }
}