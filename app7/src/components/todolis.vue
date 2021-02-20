<template>
	<div id="app">
        <!-- 监听回车 -->
		<input @keyup.enter="addNewItem" v-model="newItem" />
		<ul>
			<!-- 如果V-结合中 类后是一个对象的话，键 代表添加的类的名称，
                值 代表一个布尔值，用来控制这个类属性的有无。 -->
			<li
				v-for="(item, index) in items"
				:key="index"
				:class="{ finished: item.isFinished }"
				@click="finish(item) "
			>
				{{ index }}) {{ item.label }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			newItem: '',
			items: [
				{
					label: 'read books',
					isFinished: false,
				},
				{
					label: 'eat dinner',
					isFinished: true,
				},
			],
		}
	},
	methods: {
		addNewItem() {
            // 添加新列表
			this.items.push({ label: this.newItem, isFinished: false });
            //   清空输入框
			this.newItem = ''
		},
        finish(item){
            item.isFinished = !item.isFinished
        }
	},
}
</script>
<style>
.finished {
	text-decoration: line-through;
}
</style>
