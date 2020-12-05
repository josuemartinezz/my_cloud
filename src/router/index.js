import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/register',
        name: 'Register',
        component: () =>
            import ('../views/Register.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/Login.vue')
    },
    {
        path: '/shared',
        name: 'Shared',
        component: () =>
            import ('../views/Shared.vue')
    },
    {
        path: '/starred',
        name: 'Starred',
        component: () =>
            import ('../views/Starred.vue')
    },
    {
        path: '/trash',
        name: 'Trash',
        component: () =>
            import ('../views/Trash.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router