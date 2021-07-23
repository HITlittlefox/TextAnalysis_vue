import Vue from 'vue'
import Router from 'vue-router'

import ViewUI from 'view-design';
import ElementUI from 'element-ui';

import 'view-design/dist/styles/iview.css';
import iview_xxx from './view/Iview_xxx';
import iview_yyy from './view/Iview_yyy';
import iview_zzz from './view/Iview_yyy_third';
//import Iview_zzz from './view/Iview_zzz';
//import Iview_router_1 from './view/Iview_router_1';
import loding from './view/loding';

import contentBar from './components/contentBar';
//import contentBar1 from './view/Iview_router_1/Iview_router_1_r1';
//import contentBar2 from './view/Iview_router_1/Iview_router_1_r2';
//import contentBar3 from './view/Iview_router_1/Iview_router_1_r3';


import 'element-ui/lib/theme-chalk/index.css';
import elm_xxx from './view/Elm_xxx';
import elm_yyy from './view/Elm_yyy';

Vue.use(ViewUI);
Vue.use(ElementUI);

Vue.use(Router)

// 模拟token
const auth = {
  islogin(){
    // return false
    return true
  }
}

const router = new Router({
    // mode:'history',//注意这种方式有危险，
    // // 需要后端做策略：如果URL匹配不到任何静态资源，则应该返回同一个index.html页面
    routes: [

      // -------------------这部分演示一级路由-------------------
      {
        path: '/elm_login',
        name: 'elm_login',
        component: elm_xxx,
      },
      {
        path: '/elm_index',
        name: 'elm_index',
        component: elm_yyy
      },
      {
        path: '/iview_login',
        name: 'iview_login',
        component: iview_xxx
      },

      {
        path: '/iview_index',
        name: 'iview_index',
        component: iview_yyy
      },
      {
        path: '/iview_answer',
        name: 'iview_answer',
        component: iview_zzz
      },
      // -------------------这部分演示 动态路由 + 编程式导航 -------------------
      //{
      //  path:'/iview_router/:name',
      //  component:Iview_router_1,
      //  props:{news:'NEWS'},
      //},

      // -------------------这部分演示嵌套路由-------------------（没有用到）
      { 
        path: '/contentBar/:id', 
        component: contentBar,
        // props: true, // route.params 将会被设置为组件属性。
        children: [
          //{
          //  path: 'contentBar1',
          //  component: contentBar1,
          //},
          //{
          //  path: 'contentBar2',
          //  component: contentBar2,
          //},
          //{
          //  path: 'contentBar3',
          //  component: contentBar3
          //},
        ]
      },

      { //路由重定向
        path: '*',
        name: 'any', // 名字在“命名路由”中使用，但是不介绍
        redirect: '/iview_login'
      },
      {
        // 演示loding
        path:'/loding',
        component: loding
      }
    ]
  })

  // 全局守卫
  router.beforeEach((to, from, next) => {
    if (to.path == '/iview_index') 
    {
        if (auth.islogin()) {
          next()
        } else {
          next('/iview_login')
        }
    }else
    {
      next()
    }
    if (to.path == '/iview_answer') 
    {
        if (auth.islogin()) {
          next()
        } else {
          next('/iview_index')
        }
    }else
    {
      next()
    }
  })

  // 组件内的局部守卫放在某个组件里面
  // 例如Iview_router_1
  export default router
