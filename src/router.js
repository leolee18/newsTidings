import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',//history
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
			meta: {
				title: '新闻'
			},
			children:[
				{
					path: '/',
					redirect: '/tab1'
				},
				{
					path: '/tab1',
					component: resolve => require(['@/views/tab/Tab1.vue'], resolve),
					meta: {
						title: 'tab1'
					},
				},
				{
					path: '/tab2',
					component: resolve => require(['@/views/tab/Tab2.vue'], resolve),
					meta: {
						title: 'tab2'
					},
				},
				{
					path: '/tab3',
					component: resolve => require(['@/views/tab/Tab3.vue'], resolve),
					meta: {
						title: 'tab3'
					},
				}
			]
    },
    {
      path: '/deta/:id',
      name: 'detailed',
      component: () => import('@/views/Detailed.vue'),
			meta: {
				title: 'detailed'
			},
    },
		{
			path: '*',
			redirect: '/tab1'
		}
  ]
})
