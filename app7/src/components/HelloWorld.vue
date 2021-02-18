<template>
  <div>
     <p>
       <button @click="p">点我</button>
       {{per.name}}
       <button @click="lod">打印</button>
     </p>
  </div>
</template>
<script>
  export default{
    data(){
      return{}
    },
    props:{
      p:Function,
      per:Object
    },
    methods:{
  lod(){
    console.log(this.per.age);
  }
    }
  }
</script>