import * as PActions from "../actions";
import storage from "../../../../Config/storage";
import {filters, pagination} from '../../config'
const initialState = {
    loading: false,
    sortBy: storage.get(PActions.PROJECT_SORT) || 'id',
    orderBy: storage.get(PActions.PROJECT_ORDER) || 'desc',
    filters: storage.get(PActions.PROJECT_FILTERS) || filters,
    data:{},
    pagination: pagination
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

        case PActions.PROJECT_SORT:
            return {
                ...state,
                sortBy: type.payload
            }

        case PActions.PROJECT_ORDER:
            return {
                ...state,
                orderBy: type.payload
            }

        case PActions.PROJECT_PAGINATION:
            return {
                ...state,
                pagination: type.payload
            }

        default:
            return state
    }
}

export default project