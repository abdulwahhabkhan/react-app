
import tickets from "../../../../../services/tickets";

export const LOADING_TICKETS = 'LOADING_TICKETS'
export const ADD_TICKET = 'ADD_TICKET'
export const EDIT_TICKET = 'EDIT_TICKET'
export const DELETE_TICKET = 'DELETE_TICKET'
export const GET_TICKETS = 'GET_TICKETS'
export const TICKET_FILTERS = 'TICKET_FILTERS'
export const TICKET_FILTERS_RESET = 'TICKET_FILTERS_RESET'
export const TICKET_SORT = 'TICKET_SORT'
export const TICKET_ORDER = 'TICKET_ORDER'
export const TICKET_PAGINATION = 'TICKET_PAGINATION'

// Action Axios implementation

export function getTickets(params){
    const queryString = {
        ...params
    }
    return (dispatch)=>{
        dispatch({type:LOADING_TICKETS})
        tickets.getTickets(queryString).then(res => {
            return dispatch({type: GET_TICKETS,  payload: res})
        })
    }
}