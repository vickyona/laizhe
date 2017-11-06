import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Search from '@/pages/search/Search'

Vue.use(Router)
export default new Router({
	routes: [
	{
		path: '/',
		name: 'Home',
		component: Home
	},{
		path:'/search',
		name:'Search',
		component:Search
	}]
})

