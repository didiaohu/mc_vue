<template>
	<div>
		<div>表单控件绑定</div>
		<div>--------------------------------</div>
		<input v-model="message" placeholder="edit me">
		<p>Message is: {{ message }}</p>
		<div>--------------------------------</div>
		<!-- 复选框 -->
		<input type="checkbox" id="checkbox" v-model="checked">
		<label for="checkbox">{{ checked }}</label>

		<div>--------------------------------</div>
		<!-- 多个勾选框 -->
		<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
		<label for="jack">Jack</label>
		<input type="checkbox" id="john" value="John" v-model="checkedNames">
		<label for="john">John</label>
		<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
		<label for="mike">Mike</label>
		<br>
		<span>Checked names: {{ checkedNames }}</span>

		<div>--------------------------------</div>
		<!-- 选择列表 -->
		<div id="example-5">
			<select v-model="selected">
				<option disabled value="">请选择</option>
				<option>A</option>
				<option>B</option>
				<option>C</option>
			</select>
			<span>Selected: {{ selected }}</span>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				message: 'helloworld',
				checked:'',
				checkedNames: [],
				selected: ''
			}
		}
	}
</script>