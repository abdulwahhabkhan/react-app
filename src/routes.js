import Welcome from "./Pages/Welcome";
import Login from "./Pages/Auth/Login";
import Logout from "./Pages/Auth/Logout";
import Register from "./Pages/Auth/Register";
import Dashboard from "./Pages/Dashboard";
import Projects, {View as ProjectDetail} from "./Pages/Projects";
import {ProjectSidebar} from "./Pages/Projects/Sidebars";

const APP_NAME = 'React Application';
const APP_TITLE = ' - '+APP_NAME;

const routes = [
    {path: '/dashboard', component : Dashboard, meta: {title: 'Dashboard'+ APP_TITLE}, sidebar: '' },
    {path: ["/projects", "/projects/current", "/projects/completed"],
        component : Projects, meta: {title: 'Projects List'+ APP_TITLE},
        sidebar: ProjectSidebar
    },
    //{path: "/projects", component : Projects, meta: {title: 'Projects List'+ APP_TITLE}, children: true},
    {path: '/projects/:id', component : ProjectDetail, children:true,
        meta: {title: 'Projects Detail'+ APP_TITLE}, sidebar: 'Tickets Side Bar'
        },
    //{path: '/projects/:id/tickets', component : ProjectDetail, meta: {title: 'Projects Detail'+ APP_TITLE}},
    {path: '/login', component : Login, noHeader: true, meta: {title: 'Login'+ APP_TITLE}},
    {path: '/logout', component : Logout, noHeader: true, meta: {title: 'Logout'+ APP_TITLE}},
    {path: '/register', component : Register, noHeader: true, meta: {title: 'Register'+ APP_TITLE}},
    {path: '/', component : Welcome, noHeader: true, meta: {title: 'Home'+ APP_TITLE}}
];




export default routes;