<template>
	<div>
		<div>vue-router</div>
		<div>-------------------------------------</div>
		<router-link to="/demo9/123">demo9</router-link>
		<div>-------------------------------------</div>
		<router-link :to="{ name: 'demo9', params: { userId: 123 }}">params</router-link>
		<div>-------------------------------------</div>
		<router-link :to="{ name: 'demo9', params: { userId: 123 }, query: { plan: 'private' }}">query</router-link>
	</div>
</template>
<script>
	export default{
		data(){
			return{

			}
		},
		mounted(){
			// this.$router.push({ path: '/demo9/123' })
			
			// 命名的路由
			// this.$router.push({ name: 'demo9', params: { userId: 123 }})
			
			// 带查询参数，变成 /demo9?plan=private
			// this.$router.push({ name: 'demo9', params: { userId: 123 }, query: { plan: 'private' } }) 
		}

	}
</script>
<style>
	
</style>