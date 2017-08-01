<template>
	<div>
		<div>模版语法</div>
		<div>
			---------------------------------------------------
		</div>
		<div>
			data: {{msg}}
		</div>
		<div>
			---------------------------------------------------
		</div>
		<div v-html="rawHtml"></div>
		<div>
			---------------------------------------------------
		</div>
		<div>{{ number + 1 }}</div>
		<div>{{ message.split('').reverse().join('') }}</div>
		<div>
			---------------------------------------------------
		</div>
		<!-- 指令 -->
		<div v-show="false">
			v-show
		</div>

		<div v-if="num > 10">
			num大于10
		</div>
		<div v-else-if="num > 20">
			num大于20
		</div>
		<div v-else>
			num其他
		</div>

		<div v-for="(item, index) in items">
			{{item}}
		</div>

		<div v-on:click="doThis">
			dothis
		</div>
		<div @click="dothis2">
			<div @click.stop="doThis">
				dothis
			</div>
		</div>

		<div v-bind:class="[classA, classB]">
			
		</div>
		
		<div :style="[{display: size},{ color: 'red'}]">
			v-bind:style
		</div>

		<img :src="imgUrl"/>


		<div>
			---------------------------------------------------
		</div>
		<!-- 过滤器 -->

		<div>
			{{ message | capitalize }}
		</div>

		<div v-bind:id="rawId | formatId"></div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				msg: '数据绑定',
				rawHtml: '<span>123</span>',
				number: 1,
				message: 'helloworld',
				num: 10,
				items:["h","e","l"],
				classA: {'red': true},
				classB: {'black': true},
				size: "",
				imgUrl:'',
				rawId: 'id'
			}
		},
		methods:{
			doThis(){
				alert("dothis");
			},
			dothis2(){
				alert("dothis2");
			}
		},
		filters:{
			capitalize(){
				return 'capitalize';
			},
			formatId(){
				return 'rowid'
			}
		}
	}
</script>