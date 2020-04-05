import Welcome from "./Pages/Welcome";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Dashboard from "./Pages/Dashboard";
import Projects from "./Pages/Projects";

const routes = [
    {path: '/login', component : Login, isPublic: true},
    {path: '/register', component : Register, isPublic: true},
    {path: '/dashboard', component : Dashboard},
    {path: '/projects', component : Projects},
    {path: '/', component : Welcome, isPublic: true}
];

export default routes;