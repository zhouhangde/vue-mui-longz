<!--1模板：html结构-->
<template>
  <div id="app">
    <!--对应相应的路由地址，a默认会不断请求加载，会影响使用效果-->
      <!--<li><a href="/">Home</a></li>
      <li><a href="/helloworld">Hollo</a></li>-->

      <!--使用路由跳转做导航-->
    <!-- <ul>
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/helloworld">helloworld</router-link></li>
      <li><router-link to="/login">login</router-link></li>
      <li><router-link to="/todolist">todolist</router-link></li>
      <li><router-link to="/blog">blog</router-link></li>
      <li><router-link to="/buju1">两栏布局</router-link></li>
    </ul> -->
    <router-view></router-view>
  </div>
</template>

<!--2行为：处理逻辑-->
<script>
export default {
  name: 'App',
  data(){
    return {
    }
  },
  methods:{
  }
}
</script>

<!--默认的css的格式-->
<style scoped>
    ul{
       overflow: hidden;
    }
    ul li{
       float:left;
       margin-left:20px;
       list-style-type: none;
    }
    a{
      text-decoration:none;
    }
</style>
