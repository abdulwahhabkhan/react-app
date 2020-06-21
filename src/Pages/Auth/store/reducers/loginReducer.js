import * as Actions from "../actions"

const initialState = {
    success: false,
    loading: false,
    error: null
}

export function login(state=initialState, action) {
    switch (action.type) {
        case Actions.LOGIN_LOADING:
            return {
                ...state,
                loading: true
            }

        case Actions.LOGIN_SUCCESS:
            return {
                ...state,
                success: true,
                loading: false
            }

        case Actions.LOGIN_FAILED:
            return {
                ...state,
                success: false,
                loading: false,
                error: 'Login failed'
            }

        default:
            return state
    }
}

export default login