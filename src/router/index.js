import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "login",
            redirect: "/login",
            component: () => import("@/views/login"),
            meta: {
                title: "Hypescript",
                keepAlive: false
            },
        },
        {
            path: "/login",
            name: "Login",
            component: () => import("@/views/login"),
            meta: {
                title: "Hypescript",
                keepAlive: true
            }
        },
        {
            path: "/index",
            name: "index",
            component: () => import("@/views/index"),
            meta: {
                title: "Hypescript",
                keepAlive: true
            }
        }
    ]

})
