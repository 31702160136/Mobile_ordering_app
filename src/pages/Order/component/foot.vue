<template>
	<div class="order-foot">
		<div class="main">
			<div :class="{badge:$store.getters.count()>0,'unbadge':$store.getters.count()<=0}">{{$store.getters.count()}}</div>
			<div @click="iscart=!iscart" class="icon">
				<van-icon name="cart" size="2.0em"/>
			</div>
			<div  class="money" v-show="$store.getters.count()!=0"><a>￥{{$store.getters.total()}}</a></div>
			<van-button v-show="$store.getters.count()!=0" @click="preview" class="uporder" type="danger">选好了</van-button>
			<van-button disabled v-show="$store.getters.count()===0" class="nullorder" type="danger">请添加菜品</van-button>
		</div>
		<div class="shoppingcart">
			<div @click="iscart=!iscart" :class="{deceive:iscart}"></div>
			<div :class="{cart:iscart,'uncart':!iscart}">
				<div class="header-bar">
					<a class="logo">购物车</a>
					<a class="removeall" @click="removeall">清空</a>
				</div>
				<div class="collect">
					<div class="green" v-for="(item_green,index_green) of greens" :key="index_green">
						<a class="name">{{item_green.name}}</a>
						<a class="property">{{item_green.flavor}}</a>
						<a class="money">￥{{item_green.price}}</a>
						<div class="stepper">
							<div class="jian" @click="jian(item_green)"></div>
							<a>{{$store.getters.cartcount(item_green)}}</a>
							<div class="jia" @click="jia(item_green)"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				isdeceive:true,
				iscart:false,
				dialog:false
			}
		},
		computed: {
			greens(){
				return this.$store.state.cart.cart;
			}
		},
		methods: {
			removeall(){
				this.$store.commit("removeAll");
			},
			remove(index_green){
				this.greens.splice(index_green,1);
			},
			preview(){
				window.history.pushState({},0,this.$cookie().getCookie("myurl"));
				this.$router.push({path:'have_dinner'});
			},
			jia(item_green) {
				this.$store.commit("addCart", item_green);
			},
			jian(item) {
				this.$store.commit("removeCart", item);
			},
		},
	}
</script>

<style>
	.order-foot{
		position: relative;
		width: 100%;
		height: 100%;
		background: white;
	}
	.order-foot .main{
		width: 100%;
		height: 100%;
		background: white;
		position: relative;
		z-index: 998;
		display: flex;
		align-items:Center;
	}
	.order-foot .main .icon{
		position: relative;
		width: 100px;
		height: 100px;
		border-radius: 50px;
		overflow: hidden;
		border: #DCDCDC solid 2px;
		background: white;
		display: flex;
		justify-content:center;
		align-items:Center;
		left: 2%;
		color: #9E9E9E;
	}
	.order-foot .main .unbadge{
		display: none;
	}
	.order-foot .main .badge{
		position: absolute;
		z-index: 999;
		width: 50px;
		height: 50px;
		background: #FF4444;
		border-radius: 40px;
		text-align: center;
		line-height: 50px;
		font-size: 30px;
		color: white;
		top: -6%;
		left: 9%;
	}
	.order-foot .main .money{
		position: absolute;
		width: 200px;
		bottom: 0px;
		right: 30%;
		color: red;
		font-size: 45px;
	}
	.order-foot .main .money a{
		float: right;
	}
	.order-foot .main .uporder{
		position: absolute;
		top: 0px;
		right: 0px;
		width: 200px;
		height: 100%;
		font-size: 33px;
		background: #0188FB;
		border: none;
	}
	.order-foot .main .nullorder{
		position: absolute;
		top: 0px;
		right: 0px;
		width: 200px;
		height: 100%;
		font-size: 33px;
		background: none;
		border: none;
		color: #9E9E9E;
	}
	.order-foot .shoppingcart .deceive{
		position: absolute;
		width: 100%;
		height: 2000px;
		opacity:0.6;
		background: #9E9E9E;
		top: -1600px;
	}
	.order-foot .shoppingcart .cart{
		position: absolute;
		width: 100%;
		height: 500px;
		background: white;
		top: -500px;
	}
	.order-foot .shoppingcart .uncart{
		display: none;
	}
	.shoppingcart .header-bar{
		width: 100%;
		height: 60px;
		background:  #F2F2F2;
		line-height: 60px;
	}
	.shoppingcart .header-bar .removeall{
		position: absolute;
		width: 70px;
		height: 60px;
		right: 20px;
	}
	.shoppingcart .header-bar .logo{
		position: absolute;
		width: 150px;
		height: 60px;
		left: 40px;
	}
	.shoppingcart .cart .collect{
		width: 100%;
		height: 85%;
		overflow: auto;
	}
	.shoppingcart .cart .collect .green{
		position: relative;
		width: 100%;
		height: 70px;
		border-bottom: #F2F2F2 solid 1px;
	}
	.shoppingcart .cart .collect .green .name{
		position: relative;
		font-size: 30px;
		line-height: 70px;
		left: 2%;
	}
	.shoppingcart .cart .collect .green .property{
		position: relative;
		line-height: 70px;
		color: #9E9E9E;
		left: 3%;
	}
	.shoppingcart .cart .collect .green .money{
		font-size: 25px;
		color: red;
		position: absolute;
		right: 300px;
		width: 180px;
		height: 50px;
		right: 18%;
		top: 22%;
		text-align: right;
		text-align: center;
	}
	.shoppingcart .cart .collect .green .remove{
		font-size: 30px;
		position: absolute;
		right: 30px;
		width: 80px;
		height: 50px;
		text-align: center;
		line-height: 70px;
		color: red;
	}
	/* dialog弹框样式*/
	.order-foot .dialog{
		width: 450px;
		height: 250px;
		border-radius: 20px;
	}
	/* .dialog .van-dialog__footer--buttons调整弹框按钮位置 */
	.order-foot .dialog .van-dialog__footer--buttons{
		position: relative;
		top: 180px;
		width: 300px;
		margin: 0 auto;
	}
	/* dialog .van-dialog__confirm确定按钮样式 */
	.order-foot .dialog .van-dialog__confirm{
		background: #FF0000;
		margin-left: 40px;
		border-radius: 20px;
		color: #FEFEFE;
	}
	/* dialog .van-dialog__cancel取消按钮样式 */
	.order-foot .dialog .van-dialog__cancel{
		background: #9E9E9E;
		border-radius: 20px;
		color: #FEFEFE;
	}
	.order-foot .dialog .title{
		position: absolute;
		width: 100%;
		height: 60px;
		border-bottom: #F2F2F2 solid 1px;
		color: #9E9E9E;
		line-height: 60px;
		text-align: center;
	}
	.order-foot .dialog .content{
		position: absolute;
		top: 90px;
		width: 100%;
		height: 60px;
		color: #000000;
		line-height: 60px;
		font-size: 35px;
		text-align: center;
	}
	.order-foot .stepper {
			width: 120px;
			height: 50px;
			position: relative;
			top: -87%;
			left: 78%;
			overflow: hidden;
			display: flex;
			align-items: center;
	}
	.order-foot .stepper div {
			position: relative;
			width: 30px;
			height: 30px;
			background: none;
			color: white;
			border: solid 1px #FF4500;
			border-radius: 50%;
	
		}
	
		.order-foot .stepper .jia {
			position: absolute;
			right: 0;
		}
	
		.order-foot .stepper .jian {
			position: absolute;
			left: 0;
		}
	
		.order-foot .stepper .jia::before {
			content: '';
			position: absolute;
			top: 45%;
			left: 15%;
			width: 70%;
			border-top: 4px solid;
			color: #FF4500;
		}
	
		.order-foot .stepper .jia::after {
			content: '';
			position: absolute;
			top: 5px;
			left: 14px;
			height: 70%;
			border-left: 4px solid;
			color: #FF4500;
		}
	
		.order-foot .stepper .jian::before {
			content: '';
			position: absolute;
			top: 45%;
			left: 15%;
			width: 70%;
			border-top: 4px solid;
			color: #FF4500;
		}
		
	
		.order-foot .stepper a {
			position: relative;
			pointer-events: none;
			font-size: 30px;
			left: 43%;
		}
		
</style>
