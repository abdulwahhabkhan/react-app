import * as Actions from "../actions";
import storage from "../../../../../Config/storage";
import {filters, pagination} from '../../../config';

export const initialState = {
    loading: false,
    sortBy: storage.get(Actions.TICKET_SORT) || 'id',
    orderBy: storage.get(Actions.TICKET_ORDER) || 'desc',
    filters: JSON.parse(storage.get(Actions.TICKET_FILTERS)) || filters,
    rows:[],
    pagination: pagination
}

export function ticket(state=initialState, action) {
    switch (action.type) {
        case Actions.LOADING_TICKETS:
            return {
                ...state,
                loading: true
            }

        case Actions.ADD_TICKET:
            return state

        case Actions.EDIT_TICKET:
            return state

        case Actions.DELETE_TICKET:
            return state

        case Actions.TICKET_SORT:
            return {
                ...state,
                sortBy: action.payload
            }

        case Actions.TICKET_ORDER:
            return {
                ...state,
                orderBy: action.payload
            }

        case Actions.TICKET_PAGINATION:
            return {
                ...state,
                pagination: {
                    page: action.payload
                }
            }
        case Actions.TICKET_FILTERS:
            return {
                ...state,
                filters: action.payload
            }
        case Actions.GET_TICKETS:
            return {
                ...state,
                rows: action.payload.data,
                pagination: {
                    page: action.payload.current_page,
                    totalPages: action.payload.last_page,
                    totalRecords: action.payload.total,
                    perPage: action.payload.per_page
                },
                loading: false
            }
        default:
            return state
    }
}

export default ticket
