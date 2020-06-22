import * as PActions from "../actions";

const initialState = {
    loading: false,
    filters: {},
    data:{},
    pagination:{}
}

export function project(state=initialState, type) {
    switch (type.action) {
        case PActions.LOADING_PROJECTS:
            return {
                ...state,
                loading: true
            }

        case PActions.ADD_PROJECT:
            return state

        case PActions.EDIT_PROJECT:
            return state

        case PActions.DELETE_PROJECT:
            return state

        default:
            return state
    }
}

export default project