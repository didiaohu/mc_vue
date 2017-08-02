<template>
	<div>
		<div>状态管理vuex</div>
		<div>-------------------------------------</div>
		<div>{{state}}</div>
		<button @click="increment">increment</button>
		<div>-------------------------------------</div>
		<div>{{num}}</div>
		<button @click="change">change</button>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				state: '',
				num : 100
			}
		},
		methods:{
			increment(){
				this.$store.dispatch('increment');
				this.state = this.$store.state.count;
			},
			change(){
				this.$store.dispatch('increment', 100000);
				this.num = this.$store.state.num;
			}
		}
	}
</script>