<template>
	<div>
		<div>选项/数据</div>
		<div>----------------------------------------------</div>
		<div>data: {{msg}}</div>
		<div>-------------------------</div>
		<div>computed: {{aDouble}}</div>
		<div>-------------------------</div>
		<div @click="say('hi')">{{word}}</div>
	</div>
</template>
<script>
	export default {
		name:'', 
		data () {
		    return {
		        msg: 'Welcome to Your Vue.js App',
		        a: 5,
		        word: 'helloworld'
		    }
	    },
	    computed:{
	    	aDouble: function(){
	    		return this.a*2;
	    	}
	    },
	    methods:{
	    	say:function(w){
	    		this.word = w;
	    	}
	    }
	}
</script>