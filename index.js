/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Error from '../components/error/404'


import Index from '../components/modules/Index'
import UserInfo from '../components/modules/UserInfo'
import RolesInfo from '../components/modules/RolesInfo'
import PermsInfo from '../components/modules/PermsInfo'

// 声明使用vue-router插件
/*
内部定义并注册了2个组件标签(router-link/router-view),
给组件对象添加了2个属性:
  1. $router: 路由器
  2. $route: 当前路由
 */
Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    // 注册应用中所有的路由
    routes: [
        {
            path: '/index',
            component: Index
        },
        {
            path: '/userInfo',
            component: UserInfo
        },
        {
            path: '/rolesInfo',
            component: RolesInfo
        },
        {
            path: '/permsInfo',
            component: PermsInfo
        }, {
            path: '/',
            redirect: '/index'
        }, {
            path: '*',
            component: Error
        }
    ]
})