import Welcome from "./Pages/Welcome";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Dashboard from "./Pages/Dashboard";
import Projects, {View as ProjectDetail} from "./Pages/Projects";

const APP_NAME = 'React Application';
const APP_TITLE = ' - '+APP_NAME;

const routes = [
    {path: '/login', component : Login, isPublic: true, meta: {title: 'Login'+ APP_TITLE}},
    {path: '/register', component : Register, isPublic: true,meta: {title: 'Register'+ APP_TITLE}},
    {path: '/dashboard', component : Dashboard, meta: {title: 'Dashboard'+ APP_TITLE}},
    {path: ["/projects", "/projects/current", "/projects/completed"], component : Projects, meta: {title: 'Projects List'+ APP_TITLE}},
    //{path: "/projects", component : Projects, meta: {title: 'Projects List'+ APP_TITLE}, children: true},
    {path: '/projects/:id', component : ProjectDetail, children:true, meta: {title: 'Projects Detail'+ APP_TITLE}},
    //{path: '/projects/:id/tickets', component : ProjectDetail, meta: {title: 'Projects Detail'+ APP_TITLE}},
    {path: '/', component : Welcome, isPublic: true, meta: {title: 'Home'+ APP_TITLE}}
];

export default routes;