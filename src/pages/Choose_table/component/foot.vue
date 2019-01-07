<template>
	<div class="choose_table-foot">
		<button @click="order" class="order">点餐</button>
	</div>
</template>

<script>
	import {Button} from 'vant';
	import {getGreens} from '@/api/shop.js';
	export default {
		methods: {
			order(e) {
				this.getLogin();
				this.$router.push({
					path: 'Order'
				});
			},
			getLogin() {
// 				getGreens().then(res=>{
// 					console.log(res.data);
// 				})
			}
		},
	}
</script>

<style>
	.choose_table-foot .order {
		width: 100%;
		height: 80px;
		font-size: 30px;
		background: #FF4444;
		border: none;
		color: white;
	}

	.choose_table-foot .order:active {
		background: crimson;
	}
</style>
