<template>
	<div>
		<div>计算属性</div>
		<div>
			---------------------------------------
		</div>
		<div>
			{{ reversedMessage }}
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				message: 'helloworld'
			}
		},
		computed:{
			reversedMessage: function () {
		      // `this` points to the vm instance
		      return this.message.split('').reverse().join('')
		    }
		}
	}
</script>