import axios from 'axios';

const baseurl = 'http://laravel.we:8180/api';
const apiversion = '/v1';
const title = 'React Application';
const settings = {
    APPNAME : title,
    baseURL: baseurl,
    APIVersion: apiversion,
    APIURL: baseurl+apiversion,
    DATEFROMAT: 'MMM Do YYYY',
    FULLDATEFROMAT: 'dd Do MMMM YYYY, hh:mmA',
    FORMDATEFROMAT: 'MM/DD/YYYY',
    TIMEFROMAT: 'hh:mm a',
    FROMFUllFROMAT: 'MM/DD/YYYY hh:mm a',
    hideSideBar: false,
    sidebarMinified: localStorage.getItem('sidebar_minified') ? (localStorage.getItem('sidebar_minified') === 'true'? true: false)  : false,
    setTitle: (t)=>{
        document.title = t ? t + ' - '+ title :  title;
    }
}
axios.defaults.baseURL = baseurl+apiversion+'/';
axios.defaults.crossdomain = true;
axios.defaults.responseType = 'json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.get['Accept'] = 'application/json';

export default settings;
