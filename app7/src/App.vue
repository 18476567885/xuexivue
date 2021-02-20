<template>
  <div id="app">
    <!-- <HelloWorld :p="logPerson" v-for="(p1,index) in person" :key="index" :per="p1"/> -->
   <!-- <mangguo @eat="eat">
        <div>haohaoxuexi</div></mangguo> -->
  <!-- <elemen> </elemen> -->
    <!-- 设置路由导航， -->
    <div id="nav">
      <router-link to="/Home"> 首页</router-link>
      <router-link to="/about"> 关于</router-link>
    </div>
  <!-- 设置路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
// import elemen from './components/elemen.vue'

export default {
  name: 'App',
  components: {
    // elemen,
  },
  data() {
    return {
      name: ""
    };
  },
  // methods: {
  //   eat() {
  //     console.log("父组件接收事件");
      
  //   }
  // },
}
</script>

<style>
#nav{
  padding: 30px;
}
#nav a{
font-size: 18px;
color: blueviolet;
margin: 0 10px;
}
#nav a.router-link-exact-active{
  color: #e9232c;
}
</style>
