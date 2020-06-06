import storage from "./storage";

const pageOptions = {
    pageSidebarMinified:
        storage.get('sidebar_minified') ?
            (storage.get('sidebar_minified') === 'true'? true: false) : false,
    pageSidebarHidden: false
}

export default pageOptions;