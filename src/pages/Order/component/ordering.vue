<template>
	<div>
		<ul class="ordering" v-for="(item,index) of c_list" :key="index">
			<li class="ordering-li">
				<div class="title">
					<a class="payment">店内订单</a><br />
					<a class="table">{{item.stationType}}桌</a>
					<a class="time">{{item.createTime}}</a>
				</div>
				<!-- <ul>
					<li>
						<a class="name">菜品名称</a>
						<a class="sum">份数</a>
						<a class="discount">折扣</a>
						<a class="price">单价</a>				
					</li>
				</ul> -->
				<!-- <div class="ordering-discounts">
					<a class="caption">原价</a>
					<a class="money">76</a>
				</div>
				<div class="ordering-discounts">
					<a class="caption">优惠</a>
					<a class="money">-50</a>
				</div> -->
				<div class="ordering-foot">
					<!-- <a>共3份</a> -->
					<a class="total">合计&nbsp;&nbsp;￥{{item.orderAmount}}</a>
					<button v-show="item.payStatus===0" @click="pay(item)">付款</button>
					<button v-show="item.payStatus===1" @click="details(item)">详情</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import {
		http
	} from '../../../api/shop.js'
	import {
		config
	} from '../../../api/config.js';
	export default {
		mounted() {
			this.getOrderList();
		},
		data() {
			return {
				list: []
			};
		},
		computed: {
			c_list() {
				return this.list;
			}
		},
		methods: {
			getOrderList() {
				http().orderListUrl(this.$cookie().getCookie('openid')).then(res => {
					var length = res.data.data.length;
					console.log(length);
					for (var i = 0; i < length; i++) {
						this.list.push(res.data.data[length - i - 1]);
						console.log(this.list.length);
					}
					console.log(this.list.length);
				}).catch(error => {
					console.log('获取不到数据');
				});
			},
			pay(item) {
				console.log(item.payStatus);
				if (item.payStatus === 0) {
					console.log(item.orderId);
					location.href = config().createPayUrl() +
						'?openid=' + this.$cookie().getCookie('openid') +
						'&orderId=' + item.orderId + //+
						'&returnUrl=' + encodeURIComponent(config().myUrl());
				}
			},
			details(item){
				location.href = config().myUrl()+'settle_accounts?orderId='+item.orderId;
			}
		}
	}
</script>

<style scoped>
	.ordering {
		position: relative;
		width: 94%;
		padding-left: 3%;
		margin-top: 5%;
		margin-bottom: 5%;
	}

	.ordering .ordering-li {
		border-radius: 10px;
		padding: 3%;
		background: white;
	}

	.ordering .ordering-li .title {
		width: 100%;
		height: 100px;
		/* display: flex;
		align-items: center; */
	}

	.ordering .ordering-li .payment {
		font-size: 26px;
		color: #FF4500;
	}

	.ordering .ordering-li .table {
		font-size: 30px;
	}

	.ordering .ordering-li .time {
		position: absolute;
		right: 10%;
		color: #9E9E9E;
	}

	.ordering .ordering-li ul {
		border-bottom: #F2F2F2 1px solid;
		padding-top: 2%;
		padding-bottom: 2%;
	}

	.ordering .ordering-li ul li {
		margin-bottom: 2%;
	}

	.ordering .ordering-li ul li .name {
		position: relative;
	}

	.ordering .ordering-li ul li .sum {
		position: absolute;
		left: 45%;
	}

	.ordering .ordering-li ul li .discount {
		position: absolute;
		right: 30%;
	}

	.ordering .ordering-li ul li .price {
		position: absolute;
		right: 10%;
	}

	.ordering .ordering-li ul li .price {
		position: absolute;
		right: 10%;
	}

	.ordering .ordering-li .ordering-discounts {
		display: flex;
		align-items: center;
		height: 70px
	}

	.ordering .ordering-li .ordering-discounts .money {
		position: absolute;
		right: 11%;
		color: #FF4444;
	}

	.ordering .ordering-li .ordering-foot {
		display: flex;
		align-items: center;
		height: 70px
	}

	.ordering .ordering-li .ordering-foot .total {
		position: absolute;
		left: 6%;
	}

	.ordering .ordering-li .ordering-foot button {
		position: absolute;
		left: 70%;
		background: #0188FB;
		border: none;
		border-radius: 5px;
		color: white;
		width: 150px;
		height: 55px;
	}
</style>
