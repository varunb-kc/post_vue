import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import About from '@/views/About.vue';
import Info from '@/components/Info.vue';
import Detail from '@/components/Detail.vue';
import Post from '@/components/ThePost.vue';

import store from '@/storeX.js'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta:{
      auth:false
    }
  },
  {
    path: '/post/:postId',
    name: "Post",
    component: Post,
    meta:{
      auth: true
    }
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta:{
      auth:true
    },
    children:[{
      path: ':infoId',
      name: 'Info',
      component: Info,
      meta:{
        auth:true
      },
      children: [{
        path: ":detId",
        name: "Detail",
        component: Detail,
        meta:{
          auth:true
        }      
      }]
    }
  ]
  },
  {
    path: '/login',
    name:'Login',
    component: () => import('@/views/Login.vue'),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// console.log(store)

router.beforeEach(function( to, from, next ){
  if( to.meta.auth ){
    if(store.isAuth.value){
      next()
    }else {
      router.replace({ name: 'Login' })
    }
  }else {
    next()
  }
})


export default router;
