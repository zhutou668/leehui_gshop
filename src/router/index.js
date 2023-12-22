import Vue from 'vue';
import VueRouter from 'vue-router';

import AppMsite from '../pages/Msite/AppMsite.vue';
import AppProfile from '../pages/Profile/AppProfile.vue';
import AppOrder from '../pages/Order/AppOrder.vue';
import AppSearch from '../pages/Search/AppSearch.vue';
import AppLogin from '../pages/AppLogin/AppLogin.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/msite',
    },
    {
        path: '/msite',
        name: 'Mside',
        component: AppMsite,
    },
    {
        path: '/profile',
        name: 'Profile',
        component: AppProfile,
    },
    {
        path: '/order',
        name: 'Order',
        component: AppOrder,
    },
    {
        path: '/search',
        name: 'Search',
        component: AppSearch,
    },
    {
        path: '/applogin',
        name: 'AppLogin',
        component: AppLogin,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
