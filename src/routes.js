import Welcome from "./Pages/Welcome";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";

const routes = [
    {path: '/login', component : Login, isPublic: true},
    {path: '/register', component : Register, isPublic: true},
    {path: '/', component : Welcome, isPublic: true}
];

export default routes;