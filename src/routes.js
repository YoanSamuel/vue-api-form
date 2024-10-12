import {createWebHistory, createRouter} from "vue-router";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const routes = [
    {
        name:"Home-com",
        path: "/",
        component: Home,
    },
    {
        name:"Login-com",
        path: "/",
        component: Login,
    },
    {
        name:"SignUp-com",
        path: "/",
        component: SignUp,
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;