import {SETTINGS} from '../../actions'

const initialState = {
    pageSidebar: true,
    pageSidebarMinify: false,
}

const settings = function (state = initialState, action) {
    switch (action.type) {
        case SETTINGS.NOSIDEBAR:
            return {
                ...state,
                pageSidebar: !action.value
            }

        default:
            return state
    }
}

export default settings