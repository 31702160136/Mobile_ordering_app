<template>
	<div class="search-foot">
		<div class="main">
			<div :class="{badge:$store.getters.count()>0,'unbadge':$store.getters.count()<=0}">{{$store.getters.count()}}</div>
			<div @click="iscart=!iscart" class="icon">
				<van-icon name="cart" size="2.0em"/>
			</div>
			<div  class="money"><a>￥{{$store.getters.total()}}</a></div>
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
				console.log(1);
			},
			remove(index_green){
				this.greens.splice(index_green,1);
			},
			preview(){
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
	.search-foot{
		position: relative;
		width: 100%;
		height: 100%;
		min-height: 100px;
		background: white;
	}
	.search-foot .main{
		width: 100%;
		height: 100%;
		background: white;
		position: relative;
		z-index: 998;
		display: flex;
		align-items:Center;
	}
	.search-foot .main .icon{
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
	.search-foot .main .unbadge{
		display: none;
	}
	.search-foot .main .badge{
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
	.search-foot .main .money{
		position: absolute;
		width: 200px;
		bottom: 0px;
		right: 30%;
		color: red;
		font-size: 45px;
	}
	.search-foot .main .money a{
		float: right;
	}
	.search-foot .main .uporder{
		position: absolute;
		top: 0px;
		right: 0px;
		width: 200px;
		height: 100%;
		font-size: 33px;
		background: #FF4500;
		border: none;
	}
	.search-foot .main .nullorder{
		position: absolute;
		top: 0px;
		right: 0px;
		width: 200px;
		height: 100%;
		font-size: 33px;
		background: #9E9E9E;
		border: none;
	}
	.search-foot .shoppingcart .deceive{
		position: absolute;
		width: 100%;
		height: 2000px;
		opacity:0.6;
		background: #9E9E9E;
		top: -1600px;
	}
	.search-foot .shoppingcart .cart{
		position: absolute;
		width: 100%;
		height: 500px;
		background: white;
		top: -500px;
	}
	.search-foot .shoppingcart .uncart{
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
	.search-foot .stepper {
			width: 120px;
			height: 50px;
			position: relative;
			top: -87%;
			left: 78%;
			overflow: hidden;
			display: flex;
			align-items: center;
	}
	.search-foot .stepper div {
			position: relative;
			width: 30px;
			height: 30px;
			background: none;
			color: white;
			border: solid 1px #FF4500;
			border-radius: 50%;
	
		}
	
		.search-foot .stepper .jia {
			position: absolute;
			right: 0;
		}
	
		.search-foot .stepper .jian {
			position: absolute;
			left: 0;
		}
	
		.search-foot .stepper .jia::before {
			content: '';
			position: absolute;
			top: 45%;
			left: 15%;
			width: 70%;
			border-top: 4px solid;
			color: #FF4500;
		}
	
		.search-foot .stepper .jia::after {
			content: '';
			position: absolute;
			top: 5px;
			left: 14px;
			height: 70%;
			border-left: 4px solid;
			color: #FF4500;
		}
	
		.search-foot .stepper .jian::before {
			content: '';
			position: absolute;
			top: 45%;
			left: 15%;
			width: 70%;
			border-top: 4px solid;
			color: #FF4500;
		}
		
	
		.search-foot .stepper a {
			position: relative;
			pointer-events: none;
			font-size: 30px;
			left: 43%;
		}
</style>
