import { createApp } from "vue";
import App from './App.vue';
import {createRouter, createWebHistory}  from 'vue-router'
import FrontLayout from '@/layouts/Front.vue';

import "./assets/index.css";

import Explore from '@/pages/Explore.vue';
import About from '@/pages/About.vue';
import Submit from '@/pages/Submit.vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faUserSecret)

const routes = [
    { path: '/', component: Explore, name: 'explore' },
    { path: '/new', component: Submit, name: 'submit' },
    { path: '/about', component: About, name: 'about' },
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

/* add icons to the library */
library.add(faUserSecret)

const app = createApp(App)
app.use(router)
app.component('FrontLayout', FrontLayout);
app.component('font-awesome-icon', FontAwesomeIcon)


app.mount("#app")
