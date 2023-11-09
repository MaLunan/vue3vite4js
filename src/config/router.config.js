// eslint-disable-next-line
// import { UserLayout, BasicLayout, BlankLayout } from '@/layouts.index.js'
import { BasicLayout } from '@/layouts/index.js'
import { bxAnaalyse } from '@/core/icons'

const RouteView = {
  name: 'RouteView',
  render: h => h('router-view')
}

//静态 login/404 -parent
/*
  
{
  path:'/home',
  children:[{接口返回的}] // /home/SmartTools
}
*/

export const asyncRouterMap = [
  // AI智能工具（首页）
  {
    path: '/',
    component: BasicLayout,
    meta: { title: 'menu.home' },
    redirect: '/smartTools/SmartTools',//'/smartTools/SmartTools',
    children: [
      {
        path: '/SmartTools',
        name: 'smartTool',
        redirect: '/smartTools/SmartTools',
        component: RouteView,
        hideChildrenInMenu: true,
        meta: { title: 'menu.smartTools', keepAlive: true, icon: 'home', permission: ['dashboard']},
        children: [
          {
            path: '/smartTools/SmartTools',
            name: 'smartTools',
            component: () => import('@/views/smartTools/SmartTools'),
            meta: { title: 'menu.smartTools', keepAlive: false, permission: ['dashboard'] }
          }
        ]
      },
      // // AI智播
      // {
      //   path: '/LiveList',
      //   name: 'smartPlay',
      //   component: RouteView,
      //   redirect: '/smartPlay/LiveList',
      //   meta: { title: 'menu.smartPlay', icon: 'table', permission: ['table'] },
      //   children: [
      //     {
      //       path: '/smartPlay/LiveList',
      //       name: 'liveList',
      //       component: () => import('@/views/smartPlay/LiveList'),
      //       meta: { title: 'menu.liveList', keepAlive: true, permission: ['table'] }
      //     },
      //     {
      //       path: '/smartPlay/CreateLive',
      //       name: 'createLive',
      //       component: () => import('@/views/smartPlay/CreateLive'),
      //       meta: { title: 'menu.createLive', keepAlive: true, permission: ['form'] }
      //     }]
      // },
      // //互动视频直播
      // {
      //   path: '/InteractiveLiveList',
      //   name: 'interactiveLive',
      //   component: RouteView,
      //   redirect: '/interactiveLive/InteractiveLiveList',
      //   meta: { title: 'menu.interactiveLive', icon: 'youtube', permission: ['table'] },
      //   children: [
      //     {
      //       path: '/interactiveLive/InteractiveLiveList',
      //       name: 'interactiveLiveList',
      //       component: () => import('@/views/interactiveLive/InteractiveLiveList'),
      //       meta: { title: 'menu.interactiveLiveList', keepAlive: true, permission: ['table'] }
      //     },
      //     {
      //       path: '/interactiveLive/CreateInteractiveLive',
      //       name: 'createInteractiveLive',
      //       hideChildrenInMenu: true,
      //       component: () => import('@/views/interactiveLive/CreateInteractiveLive'),
      //       meta: { title: 'menu.createInteractiveLive',permission: ['form'] },
      //     },
      //     {
      //       path: '/interactiveLive/InteractiveLiveConfig',
      //       name: 'interactiveLiveConfig',
      //       hidden:true,
      //       component: () => import('@/views/interactiveLive/InteractiveLiveConfig'),
      //       meta: { title: 'menu.interactiveLiveConfig',permission: ['form'] },
      //     }]
      // },
      // // 商品库
      // {
      //   path: '/GoodsList',
      //   component: RouteView,
      //   redirect: '/goodsManage/GoodsList',
      //   meta: { title: 'menu.goodsManage', icon: 'shop', permission: ['table'] },
      //   children: [
      //     {
      //       path: '/goodsManage/GoodsList',
      //       name: 'goodsList',
      //       component: () => import('@/views/goodsManage/GoodsList'),
      //       meta: { title: 'menu.goodsList', keepAlive: true, permission: ['table'] }
      //     },
      //     {
      //       path: '/goodsManage/CreateGoods',
      //       name: 'createGoods',
      //       component: () => import('@/views/goodsManage/CreateGoods'),
      //       meta: { title: 'menu.createGoods', keepAlive: true, permission: ['form'] }
      //     }/* ,
      //     {
      //       path: '/goodsManage/GoodsDetail',
      //       name: 'goodsDetail',
      //       component: () => import('@/views/goodsManage/GoodsDetail'),
      //       meta: { title: 'menu.goodsDetail', keepAlive: true, permission: ['form'] }
      //     } */]
      // },
      // =======================
      // AI智图
      /* {
        path: '/PicList',
        redirect: '/smartPic/PicList',
        component: RouteView,
        meta: { title: 'menu.smartPic', icon: 'form', permission: ['table'] },
        children: [
          {
            path: '/smartPic/PicList',
            name: 'picList',
            component: () => import('@/views/smartPic/PicList'),
            meta: { title: 'menu.picList', keepAlive: true, permission: ['table'] }
          },
          {
            path: '/smartPic/ReplaceCloth',
            name: 'replaceCloth',
            component: () => import('@/views/smartPic/ReplaceCloth'),
            meta: { title: 'menu.replaceCloth', keepAlive: true, permission: ['form'] }
          },
          {
            path: '/smartPic/ReplaceBackdrop',
            name: 'replaceBackdrop',
            component: () => import('@/views/smartPic/ReplaceBackdrop'),
            meta: { title: 'menu.replaceBackdrop', keepAlive: true, permission: ['form'] }
          }
        ]
      }, */
      // 知识库
      // {
      //   path: '/KnowledgeList',
      //   component: RouteView,
      //   redirect: '/knowledgeMange/KnowledgeList',
      //   meta: { title: 'menu.knowledgeManage', icon: 'read', permission: ['table'] },
      //   children: [
      //     {
      //       path: '/knowledgeMange/KnowledgeList',
      //       name: 'knowledgeList',
      //       component: () => import('@/views/knowledgeMange/KnowledgeList'),
      //       meta: { title: 'menu.knowledgeList', keepAlive: true, permission: ['table'] }
      //     },
      //     {
      //       path: '/knowledgeMange/EBusinessModel',
      //       name: 'eBusinessModel',
      //       component: () => import('@/views/knowledgeMange/EBusinessModel'),
      //       meta: { title: 'menu.eBusinessModel', keepAlive: true, permission: ['form'] }
      //     }]
      // },
      // 用户管理
      // {
      //   path: '/UserList',
      //   component: RouteView,
      //   redirect: '/userManage/UserList',
      //   meta: { title: 'menu.userManage', icon: 'user', permission: ['table'] },
      //   children: [
      //     {
      //       path: '/userManage/UserList',
      //       name: 'userList',
      //       component: () => import('@/views/userManage/UserList'),
      //       meta: { title: 'menu.userList', keepAlive: true, permission: ['table'] }
      //     },{
      //       path: '/userManage/CreateUser',
      //       name: 'createUser',
      //       hidden:true,
      //       component: () => import('@/views/userManage/CreateUser'),
      //       meta: { title: 'menu.createUser', keepAlive: true, permission: ['form'] }
      //     }]
      // },
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

/**
 * 基础路由--无需控制权限的路由或者需要在未登录情况访问的路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: 'menu.home' },
    redirect: '/smartTools/SmartTools',//'/smartTools/SmartTools',
    children: [
      {
        path: '/SmartTools',
        name: 'SmartTool',
        redirect: '/smartTools/SmartTools',
        component: RouteView,
        hideChildrenInMenu: true,
        meta: { title: 'menu.smartTools', keepAlive: true, icon: bxAnaalyse, permission: ['dashboard']},
        children: [
          {
            path: '/smartTools/SmartTools',
            name: 'SmartTools',
            component: () => import('@/views/smartTools/SmartTools'),
            meta: { title: 'menu.smartTools', keepAlive: false, permission: ['dashboard'] }
          }
        ]
      }],
  },
  // {
  //   path: '/user',
  //   component: UserLayout,
  //   redirect: '/user/login',
  //   hidden: true,
  //   children: [
  //     {
  //       path: 'login',
  //       name: 'login',
  //       component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
  //     },
  //     {
  //       path: 'register',
  //       name: 'register',
  //       component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
  //     },
  //     {
  //       path: 'register-result',
  //       name: 'registerResult',
  //       component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
  //     },
  //     {
  //       path: 'recover',
  //       name: 'recover',
  //       component: undefined
  //     }
  //   ]
  // },
  // {
  //   path: '/404',
  //   component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  // }
]
