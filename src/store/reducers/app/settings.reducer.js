import {SETTINGS} from '../../actions'
import storage from "../../../Config/storage";

const initialState = {
    pageSidebar: '',
    pageHeader: true,
    pageSidebarMinify: JSON.parse(storage.get('sidebar_minified')) || false,
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
        case SETTINGS.SIDEBARMINIFIED:

            return {
                ...state,
                pageSidebarMinify: action.value
            }
        default:
            return state
    }
}

export default settings