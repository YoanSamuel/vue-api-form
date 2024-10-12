import {createWebHistory, createRouter} from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import SignUp from "./components/SignUp.vue";
import PNF from "./components/PNF.vue";

const routes = [
    {
        name:"Home-com",
        path: "/",
        component: Home,
    },
    {
        name:"Login-com",
        path: "/login/:name",
        component: Login,
    },
    {
        name:"SignUp-com",
        path: "/signup",
        component: SignUp,
    },
    {
        name:"NotFound",
        path: "/:pathMatch(.*)*",
        component: PNF,
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;