<template>
	<div class="settle_accounts-body">
		<div v-show="c_torderDatail===0"></div>
		<div class="non-payment">
			<div class="hint-infors">
				<a class="hint" v-show="orderDatail.payStatus===0">等待支付</a><br /><br />
				<div>
					<van-button v-show="orderDatail.payStatus===0" @click="pay" type="danger" style="font-size: 15px;">付款</van-button>
					<van-button v-show="orderDatail.payStatus===1" @click="pay" type="danger" style="font-size: 15px;background: #F2F2F2;color: #000000;">已支付</van-button>
				</div><br /><br />
				<a class="hint_time" v-show="orderDatail.payStatus===0">超过15分钟未支付，订单将失效</a>
			</div>
		</div>
		<div class="infors">
			<div class="title">
				<a>订单</a>
			</div>
			<div class="greens">
				<div class="green" v-for="(green_item,green_index) of orderDatail.orderDetailList" :key="green_index">
					<a class="name">{{green_item.productName}}</a>
					<a class="remark">{{green_item.detailFlavor}}</a>
					<a class="sum">{{green_item.productQuantity}}</a>
					<a class="money" style="font-size: 10px;">￥{{green_item.productPrice}}</a>
				</div>
			</div>
			<div class="totals">
				<div class="price">
					<a class="caption">菜品价格</a>
					<a class="money">￥{{$store.getters.total()}}</a>
				</div>
				<div class="discount">
					<a class="caption">优惠</a>
					<a class="money">-￥{{$store.getters.sum().minus}}</a>
				</div>
				<div class="total">
					<a class="caption">需支付</a>
					<a class="money">￥{{orderDatail.orderAmount}}</a>
				</div>
			</div>
			<div class="infor">
				<a class="Table-no">桌子号：&nbsp;&nbsp;&nbsp;&nbsp;{{orderDatail.stationType}}</a><br />
				<a class="order-time">下单时间：&nbsp;{{orderDatail.updateTime}}</a><br />
				<a class="order-number">订单号：&nbsp;&nbsp;&nbsp;&nbsp;{{orderDatail.orderId}}</a>
			</div>

		</div>
	</div>
</template>

<script scoped>
	import {
		http
	} from '../../../api/shop.js'
	import {
		config
	} from '../../../api/config.js';
	export default {
		mounted() {
			//this.initProducts();
			//this.pay();
		},
		data() {
			return {
				orderDatail: {
					orderId: "1544288880904364708",
					buyerName: "xz",
					buyerPhone: "13642914834",
					buyerOpenid: "asdasdasdasdasdasdasdasd",
					stationType: "A10",
					orderAmount: 7,
					createTime: 1544288880,
					updateTime: 1544288934,
					orderDetailList: [{
						detailId: "1544288880946737204",
						orderId: "1544288880904364708",
						productName: "麻辣",
						productId: "1",
						productPrice: 3.5,
						productQuantity: 2,
						productIcon: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534604329030&di=04f81fe7d6e22a50a9bc9549a0dc8e65&imgtype=0&src=http%3A%2F%2Fpic.chinaz.com%2F2018%2F0127%2F18012720113695768.jpg",
						detailFlavor: "不加辣"
					}],
					orderStatus: 1,
					payStatus: 0
				}
			}
		},
		computed: {
			c_torderDatail() {
				this.m_orderDatail();
				return this.$route.query.orderId;
			},
		},
		methods: {
			m_orderDatail() {
				this.orderDatail={};
				if(typeof this.$route.query.orderId!='undefined'){
					console.log(232);
					http().orderDatail(this.$cookie().getCookie('openid'), this.$route.query.orderId).then(res => {
						this.orderDatail=res.data.data;
					}).catch(error => {
						console.log('getorderDatail' + '获取不到数据');
					});
				}
			},
			pay(s) {
				console.log(this.$route.query.orderId+s);
			}
		}
	}
</script>

<style>
	.settle_accounts-body {
		width: 100%;
		height: 100%;
		overflow-y: auto;
		overflow-x: hidden;
	}

	.settle_accounts-body .non-payment {
		width: 100%;
		background: white;
		text-align: center;
		padding-top: 3%;
		padding-bottom: 3%;
	}

	.settle_accounts-body .non-payment .hint-infors {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.settle_accounts-body .non-payment .hint-infors .hint {
		font-size: 35px;
	}

	.settle_accounts-body .non-payment .hint-infors .hint_time {
		color: #9E9E9E;
	}

	.settle_accounts-body .non-payment button {
		width: 30%;
		height: 63px;
		background: #0188FB;
		border: none;
	}

	.settle_accounts-body .infors {
		width: 100%;
		background: white;
		position: relative;
		top: 1.5%;
	}

	.settle_accounts-body .infors .title {
		font-size: 30px;
		height: 60px;
		display: flex;
		align-items: center;
		padding-left: 2%;
		border-bottom: solid 1px #F2F2F2;
	}

	.settle_accounts-body .infors .greens {
		width: 100%;
		border-bottom: solid 1px #F2F2F2;
		font-size: 26px;
		padding-bottom: 2%;
		padding-left: 2%;
	}

	.settle_accounts-body .infors .greens .green {
		width: 100%;
		padding-top: 2%;

	}

	.settle_accounts-body .infors .greens .green .name {
		color: #383838;
	}

	.settle_accounts-body .infors .greens .green .remark {
		color: #9E9E9E;
	}

	.settle_accounts-body .infors .greens .green .sum {
		position: absolute;
		right: 30%;
		color: #9E9E9E;
	}

	.settle_accounts-body .infors .greens .green .money {
		color: #383838;
		position: absolute;
		right: 2%;
	}

	.settle_accounts-body .infors .totals {
		padding-top: 2%;
		padding-bottom: 2%;
		border-bottom: solid 1px #F2F2F2;
		color: #383838;
	}

	.settle_accounts-body .infors .totals .price .caption {
		position: relative;
		left: 2%;
	}

	.settle_accounts-body .infors .totals .price .money {
		position: absolute;
		right: 2%;
	}

	.settle_accounts-body .infors .totals .discount .caption {
		position: relative;
		left: 2%;
	}

	.settle_accounts-body .infors .totals .discount .money {
		position: absolute;
		right: 2%;
		color: #FF4500;
	}

	.settle_accounts-body .infors .totals .total .caption {
		position: relative;
		left: 2%;
	}

	.settle_accounts-body .infors .totals .total .money {
		position: absolute;
		right: 2%;
	}

	.settle_accounts-body .infors .infor {
		padding: 2%;
		color: #9E9E9E;
	}
</style>
