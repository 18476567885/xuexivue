<template>
	<div>
		<button @click="eat">按钮</button>
        <slot></slot>
	</div>
</template>
<script>
export default {
	data() {},
    created() {
    this.$on("eat", function() {
      console.log("子组件接收自己发射的事件");
    });
  },
  methods: {
    eat() {
      console.log("子组件发射事件");
      this.$emit("eat", "芒果");
    }
  }
}
</script>
