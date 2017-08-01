<template>
	<div>生命周期</div>
</template>
<script>
	/**
	 *  执行结果：
	 *  ......beforeCreate
		......created
		......beforeMount
		......beforeDestroy
		......destroyed
		......mounted 
	 */
	export default { 
	    name: 'hello',
	    beforeCreate(){
	    	console.log("......beforeCreate");
	    },
	    created(){
	    	console.log("......created");
	    },
	    beforeMount(){
	    	console.log("......beforeMount");
	    },

	    mounted(){
	    	console.log("......mounted");
	    },
	    beforeUpdate(){
	    	console.log("......beforeUpdate");
	    },
	    updated(){
	    	console.log("......updated");
	    },

	    activated(){
	    	console.log("......activated");
	    },
	    created(){
	    	console.log("......created");
	    },
	    deactivated(){
	    	console.log("......deactivated");
	    },

	    beforeDestroy(){
	    	console.log("......beforeDestroy");
	    },
	    destroyed(){
	    	console.log("......destroyed");
	    },
	    data () {
		    return {
		        msg: 'Welcome to Your Vue.js App'
		    }
	    }
	}
</script>