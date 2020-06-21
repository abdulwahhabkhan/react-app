import {GET_USER, SET_USER} from '../actions/userActions'

//const initialState = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {}
const initialState = {}

export function user(state=initialState, action) {
    switch (action.type) {
        case GET_USER:
            return {
                ...initialState
            }

        case SET_USER:
            return {
                ...initialState,
                ...action.payload
            }

        default:
            return state
    }
}

export default user