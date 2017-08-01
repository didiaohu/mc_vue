<template>
	<div>
		<div>Class 与 Style 绑定</div>
		<div>
			---------------------------------------
		</div>
		<div class="static"
			v-bind:class="{ active: isActive, 'text-danger': hasError }">
			class1
		</div>


		<div v-bind:class="classObject">class2</div>
		
		<div v-bind:class="[activeClass, errorClass]">class3</div>
		

		<div>
			---------------------------------------
		</div>
		<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">style1</div>
		<div v-bind:style="styleObject">style2</div>
		<div v-bind:style="[baseStyles, overridingStyles]">style3</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				isActive: true,
				hasError: true,
				classObject: {
					active: true,
    				'text-danger': true
				},
				activeClass: 'active',
				errorClass: 'text-danger',
				activeColor: 'red',
				fontSize: 30,
				styleObject: {
					color: 'red',
					fontSize: '43px'
				},
				baseStyles:{
					color: 'red'
				},
				overridingStyles:{
					fontSize: '53px'
				}
			}
		}
	}
</script>