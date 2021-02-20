// 路由需要用在 Vue当中，所以先把 vue引入
import Vue from 'vue'
// 引用路由
import Router from 'vue-router'
// 引入页面
import Home from './views/Home'
import about from './views/about'
// vue 使用
Vue.use(Router)
// 既然 通过 router.js 配置整个项目的路由
// 所以 向外界输出实例
//  然后去 main.js 引入router.js
export default new Router({
	mode:"history",  //路由（默认是hash模式） history模式，考虑 url的规范，是不带# 的
    routes: [
		{ path: '/', redirect: '/Home' }, //默认指向页面
		{ path: '/Home', component: Home },
		{ path: '/about', component: about },
	],
})
