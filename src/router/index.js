import { createRouter, createWebHistory } from 'vue-router';
import Calculate from '../views/Calculate.vue';

const routes = [
	{
		path: '/',
		name: 'Calculate',
		component: Calculate,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;

///
// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Calculate from '../views/Calculate.vue'

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'Calculate',
//     component: Calculate
//   },

// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// export default router
