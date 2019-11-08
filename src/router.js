import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import About from './views/About.vue'
import Login from './views/Login.vue'
import Test from './views/test.vue'
import Cart from './views/Cart.vue'
import Register from './views/Register.vue'
import {getToken} from './utils/auth'
import history from '@/utils/history'

Vue.use(Router)
Vue.use(history)

Router.prototype.goBack = function(){
  this.back();
  this.isBack = true;
}
const whiteList = ['/login','/register']
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect:'/main',
      name: 'home',
      component: Home,
      children:[
        {
          path: 'main',
          meta: { auth: true ,  title:'文章'},
          component: Main
        },
        {
          path: '/about',
          name: 'about',
          meta: { auth: true ,  title:'我的'},
          component: About
        },
        {
          path: '/cart',
          name: 'cart',
          meta: { auth: true,  title:'购物车' },
          component: Cart
        },
      ]
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    
  ]
})
router.beforeEach((to, from, next) => {
  const token = getToken()
 
  if (to.meta.auth) {
    if (token) {
      next()
    } else {
     
      next({
        path: '/login',
        query: { redirect: to.path }
      })
    }
  } else {
    next()
  }
})
router.afterEach((to) =>{
  if(router.isBack){
    history.pop()
    router.isBack = false
  }else{
    if( !whiteList.includes(to.path) ){
      history.push(to.path)
    }
  }
})

export default router
