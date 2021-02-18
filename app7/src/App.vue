<template>
  <div id="app">
    <!-- <HelloWorld :p="logPerson" v-for="(p1,index) in person" :key="index" :per="p1"/> -->
   <todolis/>
  </div>
</template>

<script>
import todolis from './components/todolis.vue'

export default {
  name: 'App',
  components: {
    todolis
  },
  data(){
    return{
      
    }
  },
  methods:{
   
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
