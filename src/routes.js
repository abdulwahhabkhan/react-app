import Welcome from "./Pages/Welcome";
import Login from "./Pages/Auth/Login";
import Logout from "./Pages/Auth/Logout";
import Register from "./Pages/Auth/Register";
import Dashboard from "./Pages/Dashboard";
import Projects, {View as ProjectDetail, ProjectsWrapper} from "./Pages/Projects";
import {ProjectSidebar} from "./Pages/Projects/Sidebars";

const APP_NAME = 'React Application';
const APP_TITLE = ' - '+APP_NAME;

const routes = [
    {path: '/dashboard', exact:true, component : Dashboard, meta: {title: 'Dashboard'+ APP_TITLE}, sidebar: '' },
    /*{path: ["/projects", "/projects/current", "/projects/completed"],
        component : Projects, meta: {title: 'Projects List'+ APP_TITLE},
        sidebar: ProjectSidebar
    },*/
    {path: '/projects', component: ProjectsWrapper, exact: false, meta: {title: 'Projects List'+ APP_TITLE}, sidebar: '',
        routes: [
            {path: '/projects/current', component: Projects, exact: true, completed: 0,
                sidebar: ProjectSidebar, meta: {title: 'Projects List'+ APP_TITLE} },
            {path: '/projects/completed', component: Projects, exact: true, completed: 1,
                sidebar: ProjectSidebar, meta: {title: 'Projects List'+ APP_TITLE} },
            {path: '/projects/:id', component : ProjectDetail, exact: false,
                sidebar: '', meta: {title: 'Projects Detail'+ APP_TITLE} }
        ]
    },
    //{path: "/projects", component : Projects, meta: {title: 'Projects List'+ APP_TITLE}, children: true},
    /*{path: '/projects/:id', component : ProjectDetail, children:true, sidebar: '',
        meta: {title: 'Projects Detail'+ APP_TITLE}
        },*/
    //{path: '/projects/:id/tickets', component : ProjectDetail, meta: {title: 'Projects Detail'+ APP_TITLE}},
    {path: '/login', component : Login, noHeader: true, meta: {title: 'Login'+ APP_TITLE}},
    {path: '/logout', component : Logout, noHeader: true, meta: {title: 'Logout'+ APP_TITLE}},
    {path: '/register', component : Register, noHeader: true, meta: {title: 'Register'+ APP_TITLE}},
    {path: '/', component : Welcome, noHeader: true, meta: {title: 'Home'+ APP_TITLE}}
];




export default routes;