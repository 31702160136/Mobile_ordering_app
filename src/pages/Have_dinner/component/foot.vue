<template>
	<div class="have_dinner_foot">
		<div class="amount">
			<a class="caption" style="font-size: 17px;">应付：</a>
			<a class="payment" style="font-size: 20px;color: #FF4500;">{{$store.getters.sum().sum}}</a>
			<a class="payment" style="color: #9E9E9E;">&nbsp;(已优惠￥{{$store.getters.sum().minus}})</a>
		</div>
		<van-button @click="settle_accounts" type="danger">下单</van-button>
	</div>
</template>

<script>
	import {
		http
	} from '../../../api/shop.js';
	import {
		config
	} from '../../../api/config.js';
	export default {
		computed: {
			cart() {
				return this.$store.state.cart.cart;
			},
		},
		methods: {
			go_on_order() {
				this.$router.push({
					path: 'order'
				});
			},
			settle_accounts() {
				var sencart = {
					name: '微信',
					phone: 13229025103,
					stationType: this.$cookie().getCookie('stationType'), //桌子号
					openid: this.$cookie().getCookie('openid'), //openid
					items: [ //菜单数组

					]
				}
				for (var i = 0; i < this.cart.length; i++) {
					var goods = {
						productId: this.cart[i].id,
						productQuantity: this.cart[i].sum,
						flavor: this.cart[i].flavor
					};
					sencart.items.push(goods);
				}
				//打包json
				sencart.items = JSON.stringify(sencart.items);
				//发送创建菜单请求
				http().senOrder(sencart).then(res => {
					console.log(res.data.data.orderId);
					this.$store.commit('setOrderId', res.data.data.orderId);
					if (res.data.code === 0) {
						location.href = config().createPayUrl() +
							'?openid=' + this.$cookie().getCookie('openid') +
							'&orderId=' + res.data.data.orderId + //+
							'&returnUrl=' + encodeURIComponent(config().myUrl());				
					}
				}).catch(error => {
					console.log(error);
				});
			}

		},
	}
</script>

<style>
	.have_dinner_foot {
		width: 100%;
		height: 100%;
		background: white;
	}

	.have_dinner_foot button {
		position: absolute;
		width: 30%;
		height: 100%;
		border: none;
		right: 0;
		top: 0;
		background: #0188FB;
		font-size: 32px;
	}

	.have_dinner_foot .amount {
		width: 70%;
		position: absolute;
		left: 2%;
		bottom: 5%;
	}
</style>
