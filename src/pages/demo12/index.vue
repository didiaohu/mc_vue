<template>
	<div>
		<div>过渡效果</div>
		<div>----------------------------------------</div>
		<div id="example-1">
			<button @click="show = !show">
				Toggle render
			</button>
			<transition name="slide-fade">
				<p v-if="show">hello</p>
			</transition>
		</div>
		<div>----------------------------------------</div>
		<div id="example-2">
			<button @click="show = !show">Toggle show</button>
			<transition name="bounce">
				<p v-if="show">Look at me!</p>
			</transition>
		</div>
		<div>----------------------------------------</div>
		<link href="https://unpkg.com/animate.css@3.5.1/animate.min.css" rel="stylesheet" type="text/css">
		<div id="example-3">
			<button @click="show = !show">
				Toggle render
			</button>
			<transition
			name="custom-classes-transition"
			enter-active-class="animated tada"
			leave-active-class="animated bounceOutRight"
			>
				<p v-if="show">hello</p>
			</transition>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				show: true
			}
		}
	}
</script>
<style>
	.slide-fade-enter-active {
	  transition: all .3s ease;
	}
	.slide-fade-leave-active {
	  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.slide-fade-enter, .slide-fade-leave-to
	/* .slide-fade-leave-active for below version 2.1.8 */ {
	  transform: translateX(10px);
	  opacity: 0;
	}


	.bounce-enter-active {
		animation: bounce-in .5s;
	}
	.bounce-leave-active {
		animation: bounce-in .5s reverse;
	}
	@keyframes bounce-in {
		0% {
			transform: scale(0);
		}
		50% {
			transform: scale(1.5);
		}
		100% {
			transform: scale(1);
		}
	}
</style>