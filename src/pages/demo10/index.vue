<template>
	<div>
		<div>组件</div>
		<div>-------------------------------------</div>
		<countdown col="red" @end="ending"></countdown>
	</div>
</template>
<script>
	import countdown from "@/components/countdown";

	export default{
		
		data(){
			return{}
		},
		methods:{
			ending(){
				alert("ending");
			}
		},
		components:{
			countdown: countdown
		}
	}
</script>