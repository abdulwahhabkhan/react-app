import {SETTINGS} from '../../actions'

const initialState = {
    pageSidebar: '',
    pageHeader: true,
    pageSidebarMinify: false,
}

const settings = function (state = initialState, action) {
    switch (action.type) {
        case SETTINGS.HEADER:
            return {
                ...state,
                pageHeader: action.value
            }

        case SETTINGS.SIDEBAR:
            return {
                ...state,
                pageSidebar: action.value
            }

        default:
            return state
    }
}

export default settings