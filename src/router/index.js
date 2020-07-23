import Vue from 'vue';
import VueRouter from 'vue-router';

// components
import Home from '../views/Home';
import AdviceSaved from '../views/AdviceSaved';
import About from '../views/About';

// utils
import {
    ROUTE_ABOUT,
    ROUTE_ADVICE_SAVED,
    ROUTE_HOME,
} from '../utils/constants';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: ROUTE_HOME,
        component: Home,
    },
    {
        path: '/about',
        name: ROUTE_ABOUT,
        component: About,
    },
    {
        path: '/advice-saved',
        name: ROUTE_ADVICE_SAVED,
        component: AdviceSaved,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
