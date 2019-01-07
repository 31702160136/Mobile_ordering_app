<template>
	<div class="order-body">
		<!-- <div class="search">
			<div class="search-main" @click="search">
				<van-icon class="icon-search" name="search" size="1.4em" color="#9E9E9E" />
				<input disabled value="" placeholder="请输入菜品名称" />
			</div>
		</div> -->
		<ul class="ul1">
			<li @click="on(true)"><div :class="{on:ison===true}"><a>点餐</a></div></li>
			<li @click="on(false)"><div  :class="{on:ison===false}"><a>订单</a></div></li>
		</ul>
		<div class="menu-main" v-show="ison">
			<div class="menu">
				<div v-for="(item_menu,index_menu) of menus" :key="index_menu" @click="choice('#'+item_menu.name,index_menu)"  class="count" :class="{order_menu_active:onclick===index_menu}"><a
				 :href="'#'+item_menu.name" @click="on1()">{{item_menu.name}}</a>
				</div>
			</div>
			<div class="greens">
				<div v-for="(item_green,index_green) of greens" :key="index_green">
					<div class="greens-title"><a :name="item_green.menu">{{item_green.menu}}</a></div>
					<div class="green-item">
						<img :src="item_green.icon" />
						<div class="green-infor">
							<a class="name">{{item_green.name}}</a><br />
							<a class="name" v-show="item_green.discount!=''" style="color: #FF4500; font-size: 5px;">{{item_green.discount}}&nbsp;折</a><br />
							<a class="money">￥{{item_green.price}}</a>
						</div>
						<div class="stepper">
							<div v-show="$store.getters.ordercount(item_green)>0" class="jian" @click="jian(item_green)"></div>
							<a v-show="$store.getters.ordercount(item_green)>0">{{$store.getters.ordercount(item_green)}}</a>
							<div class="jia" @click="jia(item_green)"></div>
						</div>
					</div>
				</div>
				<div class="bottom">
					没有了
				</div>
			</div>
		</div>
		
		<div class="ordering-main" v-if="!ison">
			<ordering></ordering>
		</div>
		
		
		<div v-show="isselect" class="property">
			<div @click="isselect=!isselect" class="close_over"></div>
			<div class="select">
				<img src="../../../../build/logo.png" />
				<div class="infor">
					<a class="name">{{greeninfor.name}}</a><br />
					<a style="font-size: 15px;color: #FF4500">{{greeninfor.discount}}&nbsp;折</a>
				</div>
				<van-icon @click="isselect=!isselect" class="close" name="close" size="2em" />
				<ul class="u_select">
					<a>请选择口味</a><br />
					<li
					v-for="(item_flavor,index_flavor) of flavor"
					:key="index_flavor"
					@click="select(item_flavor)"
					:class="{active:isflavor===item_flavor}"
					>&nbsp;&nbsp;{{item_flavor}}&nbsp;&nbsp;</li>
					<!-- <li
					@click="select('')"
					:class="{active:isflavor===''}"
					>&nbsp;&nbsp;无&nbsp;&nbsp;</li> -->
				</ul>
				<van-button :disabled="!(isflavor!='')" @click="confirm" class="confirm" type="danger">确定</van-button>
			</div>
		</div>
	</div>
</template>

<script>
	import ordering from './ordering.vue'
	export default {
		data() {
			return {
				green:{},
				onclick: -1,
				isselect:false,
				id:0,
				flavor_item:'',
				isflavor:'',
				ison:true
			}
		},
		computed: {
			menus() {
				return this.$store.state.products.menus;
			},
			greens() {
				return this.$store.state.products.greens;
			},
			flavor(){
				return this.$store.getters.flavor(this.id);
			},
			greeninfor(){
				return this.$store.getters.greeninfor(this.id);
			}
		},
		methods: {
			
			choice(name,index_menu) {
				this.onclick = index_menu;
				//window.history.pushState({},0,this.$store.state.url);
				//this.document.querySelector(name).scrollIntoView(true);
			},
			on(is){
				this.ison=is;
				if(is){
					
				}else{
					
				}
			},
			getValue(value) {
				this.num = value;
			},
			jia(item_green) {
				this.id=item_green.id;
				this.green = {
					id: item_green.id,
					description: item_green.description,
					icon: item_green.icon,
					name: item_green.name,
					menu: item_green.menu,
					price: item_green.price,
					discount:item_green.discount,
					flavor:"",
					sum:1
				}
				if(this.flavor!= ''){
					this.isselect=true;
				}else{
					this.$store.commit("addCart", this.green);
				}
			},
			jian(item) {
				this.$store.commit("removeOrder", item);
			},
			add(infor) {
				this.shoppingcart.push(infor);
			},
			select(flavor){
				if(this.flavor_item!=flavor){
					this.isflavor=flavor;
					this.flavor_item=flavor;
				}else{
					this.isflavor="";
					this.flavor_item="";
				}
			},
			confirm() {
				this.green["flavor"]=this.flavor_item;
				console.log(this.green["price"]);
				this.$store.commit("addCart", this.green);
				this.flavor_item="";
				this.isflavor="";
				this.isselect=false;
			},
			search() {
				this.$router.push({
					path: 'search'
				});
			}
		},
		components:{
			ordering
		}

	}
</script>

<style>
	.order-body {
		width: 100%;
		height: 100%;
		background: #f9fbfb;
	}
	.order-body .ul1{
		width: 100%;
		height: 80px;
		background: white;
		border-top: #F2F2F2 1px solid;
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: #F2F2F2 1px solid;
	}
	.order-body .ul1 li{
		width: 50%;
		height: 100%;
		float: left;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.order-body .ul1 li div{
		height: 95%;
		display: flex;
		align-items: center;
		font-size: 30px;
	}
	/* .order-body .ul1 li div a{
		height: 90%;
		display: flex;
		align-items: center;
		font-size: 30px;
		
	} */
	.on{
		border-bottom: #0188FB 3px solid;
		color: #0188FB;
	}
	
	/* .order-body ul{
		width: 100%;
		height: 80px;
		background: white;
		display: flex;
		justify-content: center;
		align-items: center;
	} */
	
	/* .order-body .search {
		position: relative;
		width: 100%;
		max-height: 4.5%;
		background: white;
		padding-top: 2%;
		padding-bottom: 2%;
		border: solid 1px #F2F2F2;
		display: flex;
		align-items: center;
	}

	.order-body .search .search-main {
		background: #f9fbfb;
		width: 90%;
		height: 50px;
		margin: auto;
		border-radius: 25px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.order-body .search .search-main input {
		height: 70%;
		border: none;
		background: none;
	}

	.order-body .search .search-main .icon-search {
		position: relative;
		right: 10%;
	} */

	.order-body .menu-main {
		width: 100%;
		height: 92%;
	}
	.order-body .ordering-main {
		width: 100%;
		height: 92%;
		overflow: auto;
	}
	.order-body .menu {
		position: relative;
		width: 22.5%;
		height: 100%;
		overflow: auto;
		background: #f9fbfb;
	}


	.order-body .greens {
		width: 77.5%;
		height: 100%;
		position: relative;
		top: -100%;
		left: 24%;
		overflow: auto;
		overflow-x: hidden;
	}

	.order-body .menu .count {
		width: 100%;
		height: 100px;
		padding: 0;
		line-height: 100px;
		font-size: 30px;
		text-align: center;
		overflow: hidden;
	}
	.order-body .menu .count a{
		height: 100%;
	}
	.order-body .menu a:link {
		color: #000000;
		text-decoration:none;
	}
	.order-body .menu a:visited {
		color: #000000;
		text-decoration:none;
	}
	.order-body .menu a:hover {
		color:#000000;
		text-decoration:none;
	}
	.order-body .menu a:active {
		color: #000000;
		text-decoration:none;
	}
	.order_menu_active {
		color: white;
		color: #000000;
		background: white;
	}

	.order-body .greens-title {
		position: relative;
		left: 20px;
		top: 5px;
	}

	.order-body .green-item {
		padding: 2% 0 2% 1%;
		width: 100%;
		height: 150px;
		border-bottom: #F2F2F2 1px solid;
		background: white;
	}

	.order-body .green-item img {
		position: relative;
		width: 150px;
		height: 150px;
		border-radius: 15px;
	}

	.order-body .green-infor {
		position: relative;
		display: inline-block;
		left: 10px;
		top: -10px;
	}

	.order-body .green-infor .name {
		position: relative;
		top: -30px;
		font-size: 32px;
	}

	.order-body .green-infor .money {
		position: relative;
		top: -5px;
	}

	.order-body .stepper {
		width: 120px;
		height: 50px;
		position: relative;
		top: -34%;
		left: 65%;
		overflow: hidden;
		display: flex;
		align-items: center;
	}

	.order-body .stepper div {
		position: relative;
		width: 30px;
		height: 30px;
		background: none;
		color: white;
		border: solid 1px #0188fb;
		border-radius: 50px;
	}

	.order-body .stepper .jia {
		position: absolute;
		right: 0;
	}

	.order-body .stepper .jian {
		position: absolute;
		left: 0;
	}

	.order-body .stepper .jia::before {
		content: '';
		position: absolute;
		top: 13px;
		left: 2px;
		width: 24px;
		border-top: 4px solid;
		color: #0188fb;
	}

	.order-body .stepper .jia::after {
		content: '';
		position: absolute;
		top: 3px;
		left: 12px;
		height: 24px;
		border-left: 4px solid;
		color: #0188fb;
	}

	.order-body .stepper .jian::before {
		content: '';
		position: absolute;
		top: 13px;
		left: 3px;
		width: 23px;
		border-top: 4px solid;
		color: #0188fb;
	}

	.order-body .stepper a {
		position: relative;
		pointer-events: none;
		font-size: 30px;
		left: 43%;
	}
	.order-body .property{
		position: fixed;
		z-index: 1000;
		width: 100%;
		height: 100%;
		bottom: 0;
	}
	.order-body .property .close_over{
		position: fixed;
		z-index: 999;
		width: 100%;
		height: 100%;
		top: 0;
		opacity:0.3;
		background: #000000;
	}
	.order-body .property .select{
		position: fixed;
		z-index: 1000;
		width: 100%;
		height: 30%;
		bottom: 0;
		background: white;
	}
	.order-body .property .select img{
		width: 120px;
		height: 120px;
		border: solid 1px #F2F2F2;
		position: relative;
		top: -30px;
		left: 5%;
		background: white;
		padding: 1% 1% 1% 1%;
		border-radius: 8px;
	}
	.order-body .property .select .infor{
		position: absolute;
		top: 2%;
		left: 26%;
		font-size: 35px;
	}
	.order-body .property .select .close{
		position: absolute;
		top: 6%;
		right: 5%;
	}
	.order-body .property .select .u_select{
		width: 85%;
		height: 40%;
		position: absolute;
		top: 32%;
		left: 5%;
		overflow: auto;
	}
	.order-body .property .select .u_select a{
		position: absolute;
		top: 0;
		left: 0;
	}
	.order-body .property .select .u_select li{
		max-width: 400px;
		min-width: 100px;
		height: 33%;
		background: #F2F2F2;
		border-radius: 8px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 40px;
		float: left;
		margin-top: 10px;
		overflow: hidden;
		position: relative;
		top: 15px;
	}
	.order-body .property .select .u_select .active{
		background: #ffe6e1;
		color: #FF4500;
	}
	.order-body .property .select .confirm{
		width: 80%;
		height: 70px;
		border-radius: 30px;
		position: absolute;
		bottom: 5.5%;
		left: 9%;
		background: #FF4500;
		font-size: 35px;
	}
	.order-body .bottom{
		width: 100%;
		height: 5%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 10px;
		color: #9E9E9E;
	}
</style>
