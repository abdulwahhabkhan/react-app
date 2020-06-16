import {SETTINGS} from '../../actions'

const initialState = {
    pageSidebar: '',
    pageSidebarMinify: false,
}

const settings = function (state = initialState, action) {
    switch (action.type) {
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