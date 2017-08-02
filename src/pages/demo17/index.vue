<template>
	<div>
		<div>Vue.js 的移动端组件库Mint UI</div>
		<div>--------------------------------------------</div>
		<button @click="toast">toast</button>
		<div>--------------------------------------------</div>
		<button @click="message">message</button>
		<mt-tabbar>
		  	<mt-tab-item id="外卖">
		    	<img slot="icon" src="../../assets/100x100.png">
		    	外卖
		  	</mt-tab-item>
		  	<mt-tab-item id="订单">
		    	<img slot="icon" src="../../assets/100x100.png">
		    	订单
		  	</mt-tab-item>
		  	<mt-tab-item id="发现">
			    <img slot="icon" src="../../assets/100x100.png">
			    发现
		  	</mt-tab-item>
		  	<mt-tab-item id="我的">
			    <img slot="icon" src="../../assets/100x100.png">
			    我的
		  	</mt-tab-item>
		</mt-tabbar>
		<mt-cell :title="item" v-for="item in items"></mt-cell>
		
	</div>
</template>
<script>
	import Vue from 'vue';
	import { Toast } from 'mint-ui';

	import { Tabbar, TabItem } from 'mint-ui';

	import { Cell } from 'mint-ui';

	import { MessageBox } from 'mint-ui';

	Vue.component(Tabbar.name, Tabbar);
	Vue.component(TabItem.name, TabItem);
	Vue.component(Cell.name, Cell);

	export default{
		data(){
			return{
				items: ['1','2','3','4','5','6','7','8','9']
			}
		},
		methods:{
			toast(){
				Toast('提示信息');
			},
			message(){
				MessageBox({
				  	title: '提示',
				  	message: '确定执行此操作?',
				  	showCancelButton: true
				});
			}
		}
	}
</script>