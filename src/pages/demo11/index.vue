<template>
	<div>
		<div>实例</div>
		<div>----------------------------------</div>
		<button @click="example">nextTick</button>
		<div>----------------------------------</div>
		<!-- ref -->
		<div ref="head" class="head"></div>
		<div>----------------------------------</div>
		<!-- el -->
		<div class="el">我是el</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				message: 'hello'
			}
		},
		methods:{
			// ...
			example: function () {
				// 修改数据
				this.message = 'changed'
				// DOM 还没有更新
				this.$nextTick(function () {
					// DOM 现在更新了
					alert("更新了~~")
				})
			}
		},
		mounted(){
			alert(this.$refs.head.getBoundingClientRect().height)
		}
	}
</script>
<style>
	.head{
		width: 100px;
		height: 100px;
		background: red;
		margin:0 auto;
	}
</style>