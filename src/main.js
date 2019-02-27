// 引入node模块
import Vue from 'vue'
import VueRouter from 'vue-router'
// import VueResource from 'vue-resource'
import Axios from 'axios'
import ElementUI from 'element-ui' // 引入element-ui
import 'element-ui/lib/theme-chalk/index.css'

// 引入组件
import App from './App'
import HelloWorld from './components/HelloWorld'
import Login from './components/Login'
import Home from './components/Home'
import TodoList from './components/TodoList'
import Blog from './components/Blog'
import Buju1 from './components/Buju1'
// import Users from './components/Users'
//全局注册组件,前面为组件名称，后面为对应的组件
// Vue.component("users",Users)


// 引入mui的js
import Mui from 'vue-awesome-mui'  
// 引入mui的组件css
import 'vue-awesome-mui/mui/dist/css/mui.css'  
// 引入mui的衍生图标库
import "vue-awesome-mui/mui/examples/hello-mui/css/icons-extra.css";  
// 引入公共css
import './assets/css/common'
// 引入公共的styl，更高于less和sass
// import '!style-loader!css-loader!stylus-loader!./assets/stylus/common.styl'

// 引入自己封装的js
import $ByLz from './assets/js/byLz'


//使用http,可全局使用
// Vue.use(VueResource)
// axios并不是vue插件，所以不能 使用Vue.use()，所以只能在每个需要发送请求的组件中即时引入，通过修改原型链。
Vue.prototype.$http = Axios // 类似于vue-resource的调用方法，之后可以在实例里直接用this.$http.get()等
// 阻止vue启动控制台出现的生产消息，常用作指令。
Vue.config.productionTip = false


//使用路由，优化<a>中href的请求，不需要跳转
Vue.use(VueRouter)
Vue.use(ElementUI) // Vue全局使用，ElementUI组件
// mount with global  
Vue.use(Mui)  // Vue全局使用，mui组件
Vue.use($ByLz) // Vue全局使用，自己封装的全局js



//配置路由
const router =new VueRouter({
   routes:[
    //  抓取路径调到指定的组件,设置home为默认入口
     {path:"/",component:Login},
     {path:"/helloWorld",component:HelloWorld},
     {path:"/login",component:Login},
     {path:"/home",component:Home},
     {path:"/todolist",component:TodoList},
     {path:"/blog",component:Blog},
     {path:"/buju1",component:Buju1}
   ],
  //  去掉默认路径的#号
   mode:"history"
})

//路由跳转的钩子函数，作为登录拦截
router.beforeEach((to,from,next) =>{
  const token = sessionStorage.getItem('demo-token');
  if(to.path == '/'){ // 如果是跳转到登录页的
    if(token != 'null' && token != null){
      next('/todolist') // 如果有token就转向home不返回登录页
    }
    next(); // 否则跳转回登录页
  }else{
    if(token != 'null' && token != null){
     Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token; // 全局设定header的token验证，注意Bearer后有个空格
      next() 
    }else{
      next('/') // 否则跳转回登录页
    }
  }
})

new Vue({
  // 使用router组件
  router,
  el: '#app',
  // template中可以为标签(`可用于pre的作用)，或引入，如果都没有将没有reader，直接结束生命周期
  // template:`
  //   <div id="app">
  //     <h1></h1>
  //   </div>
  //   `,
  template: '<App/>',
  components: { App }
})

// 功能同上(没有el生命周期将结束)，写法只是不同
// new Vue({
//   components: { App },
//   template: '<App/>'
// }).$mount("#app")
