import Welcome from "./Pages/Welcome";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Dashboard from "./Pages/Dashboard";

const routes = [
    {path: '/login', component : Login, isPublic: true},
    {path: '/register', component : Register, isPublic: true},
    {path: '/dashboard', component : Dashboard},
    {path: '/', component : Welcome, isPublic: true}
];

export default routes;