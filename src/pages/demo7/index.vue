<template>
	<div>
		<div>列表渲染</div>
		<div>---------------------------------------</div>
		<ul id="example-1">
		    <li v-for="item in items">
		    	{{ item.message }}
		    </li>
		</ul>
		<div>---------------------------------------</div>
		<ul id="example-2">
			<li v-for="(item, index) in items">
				{{ index }} - {{ item.message }}
			</li>
		</ul>
		<div>---------------------------------------</div>
		<ul id="repeat-object" class="demo">
			<li v-for="(value, key) in object">
				{{ key }} : {{ value }}
			</li>
		</ul>

	</div>
</template>
<script>
	export default{
		data(){
			return{
				items: [
			      	{message: 'Foo' },
			      	{message: 'Bar' }
			    ],
			     object: {
			      	firstName: 'John',
			      	lastName: 'Doe',
			      	age: 30
			    }
			}
		}
	}
</script>