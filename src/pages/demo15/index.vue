<template>
	<div>
		<div>Slot插槽</div>
		<div>-----------------------------------------</div>
		<testforslot>
			<p>123</p>
			<p slot="bottom">234</p>
		</testforslot>
	</div>
</template>
<script>
	import testforslot from '@/components/slot.vue';
	export default{
		data(){
			return{

			}
		},
		components:{
			testforslot
		}
	}
</script>