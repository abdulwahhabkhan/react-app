import Welcome from "./Pages/Welcome";
import Login from "./Pages/Auth/Login";
import Logout from "./Pages/Auth/Logout";
import Register from "./Pages/Auth/Register";
import Dashboard from "./Pages/Dashboard";
import * as Projects from "./Pages/Projects";
import * as ProjectSideBars from "./Pages/Projects/Sidebars";

const routes = [
    {path: '/dashboard', exact:true, component : Dashboard, meta: {title: 'Dashboard'}, sidebar: '' },
    /*{path: ["/projects", "/projects/current", "/projects/completed"],
        component : Projects, meta: {title: 'Projects List'+ APP_TITLE},
        sidebar: ProjectSidebar
    },*/
    {path: '/projects', component: Projects.ProjectsWrapper, exact: false, meta: {title: 'Projects List'}, sidebar: '',
        routes: [
            {path: '/projects/current', component: Projects.default, exact: true, completed: 0,
                sidebar: ProjectSideBars.ProjectSidebar, meta: {title: 'Current Projects'} },
            {path: '/projects/completed', component: Projects.default, exact: true, completed: 1,
                sidebar: ProjectSideBars.ProjectSidebar, meta: {title: 'Completed Projects'} },
            {path: '/projects/:id', component : Projects.View, exact: false,
                sidebar: '', meta: {title: 'Projects Detail'},
                routes: [
                    {path: '/projects/:id/tickets', component : Projects.Tickets, exact:true,
                        sidebar: ProjectSideBars.View, meta: {title: 'Project Tickets'}},
                    {path: '/projects/:id/summary', component : Projects.Summary, exact:true,
                        sidebar: ProjectSideBars.View, meta: {title: 'Project Summary'}},
                    {path: '/projects/:id/files', component : Projects.Files, exact:true,
                        sidebar: ProjectSideBars.View, meta: {title: 'Project Files'}},
                    {path: '/projects/:id/times', component : Projects.Times, exact:true,
                        sidebar: ProjectSideBars.View, meta: {title: 'Project Time'}}
                ]
            }
        ]
    },
    //{path: "/projects", component : Projects, meta: {title: 'Projects List'+ APP_TITLE}, children: true},
    /*{path: '/projects/:id', component : ProjectDetail, children:true, sidebar: '',
        meta: {title: 'Projects Detail'+ APP_TITLE}
        },*/
    //{path: '/projects/:id/tickets', component : ProjectDetail, meta: {title: 'Projects Detail'+ APP_TITLE}},
    {path: '/login', component : Login, noHeader: true, meta: {title: 'Login'}},
    {path: '/logout', component : Logout, noHeader: true, meta: {title: 'Logout'}},
    {path: '/register', component : Register, noHeader: true, meta: {title: 'Register'}},
    {path: '/', component : Welcome, noHeader: true, meta: {title: 'Home'}}
];




export default routes;