<template>
	<div class="search-body">
		<div class="search">
			<div class="search-main">
				<van-icon class="icon-search" name="search" size="1.4em" color="#9E9E9E"/>
				<input v-on:input="search(value)" v-model="value" placeholder="请输入菜品名称" />
				<a @click="back()">取消</a>
			</div>
		</div>
		<div class="greens">
			<div v-for="(item_green,index_green) of greens" :key="index_green">
				<div class="greens-title"><a :name="item_green.menu">{{item_green.menu}}</a></div>
				<div class="green-item">
					<img :src="item_green.icon" />
					<div class="green-infor">
						<a class="name">{{item_green.name}}</a><br />
						<a class="money">￥{{item_green.price}}</a>
					</div>
					<div class="stepper">
						<div class="jian" @click="jian(item_green)"></div>
						<a>{{$store.getters.ordercount(item_green)}}</a>
						<div class="jia" @click="jia(item_green)"></div>
					</div>
				</div>
			</div>
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
					:class="{active:isflavor===null}"
					>&nbsp;&nbsp;无&nbsp;&nbsp;</li> -->
				</ul>
				<van-button :disabled="!(isflavor!='')" @click="confirm" class="confirm" type="danger">确定</van-button>
			</div>
		</div>
	</div>	
</template>
<script>
	export default {
		data() {
			return {
				greens:[],
				value:"",
				green:{},
				onclick: -1,
				isselect:false,
				id:0,
				flavor_item:'',
				isflavor:''
			};
		},
		computed: {
			flavor(){
				return this.$store.getters.flavor(this.id);
			},
			greeninfor(){
				return this.$store.getters.greeninfor(this.id);
			}
		},
		methods: {
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
					flavor:'',
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
				this.$store.commit("addCart", this.green);
				this.flavor_item="";
				this.isflavor="";
				this.isselect=false;
			},
			search(name){
				this.greens.splice(0,this.greens.length);
				this.greens=this.greens.concat(this.$store.getters.search(name));
			},
			back() {
				this.$router.push({path:'/'});
			}
		},
	}
</script>

<style>
	.search-body{
		width: 100%;
		max-height: 100%;
		overflow: auto;
		overflow-x: hidden;
		background: white;
	}
	.search-body .search{
		position: relative;
		width: 100%;
		background: white;
		padding-top: 2%;
		padding-bottom: 2%;
		border: solid 1px #F2F2F2;
	}
	.search-body .search .search-main{
		background: ;
		width: 70%;
		height: 50px;
		margin: auto;
		border-radius: 25px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #f9fbfb;
	}
	.search-body .search .search-main input{
		height: 70%;
		border: none;
		background: none;
	}
	.search-body .search .search-main .icon-search{
		position: relative;
		right: 10%;
	}
	.search-body .search .search-main a{
		position: absolute;
		right: 5%;
		color: #FF4500;
	}
	
	.search-body .greens{
		position: relative;
	}
	.search-body .greens-title {
		position: relative;
		left: 20px;
		top: 5px;
	}
	.search-body .green-item {
		padding: 2%;
		width: 100%;
		height: 150px;
		border-bottom: #F2F2F2 1px solid;
	}
	.search-body .green-item img {
		position: relative;
		width: 150px;
		height: 150px;
		border-radius: 15px;
		background: #42B983;
	}

	.search-body .green-infor {
		position: relative;
		display: inline-block;
		left: 10px;
		top: -10px;
	}

	.search-body .green-infor .name {
		position: relative;
		top: -70px;
		font-size: 32px;
	}

	.search-body .green-infor .money {
		position: relative;
		top: -5px;
	}

	.search-body .stepper {
			width: 120px;
			height: 50px;
			position: relative;
			top: -34%;
			left: 65%;
			overflow: hidden;
			display: flex;
			align-items: center;
		}
	
		.search-body .stepper div {
			position: relative;
			width: 30px;
			height: 30px;
			background: none;
			color: white;
			border: solid 1px #FF4500;
			border-radius: 50%;
	
		}
	
		.search-body .stepper .jia {
			position: absolute;
			right: 0;
		}
	
		.search-body .stepper .jian {
			position: absolute;
			left: 0;
		}
	
		.search-body .stepper .jia::before {
			content: '';
			position: absolute;
			top: 45%;
			left: 15%;
			width: 70%;
			border-top: 4px solid;
			color: #FF4500;
		}
	
		.search-body .stepper .jia::after {
			content: '';
			position: absolute;
			top: 16%;
			left: 46%;
			height: 70%;
			border-left: 4px solid;
			color: #FF4500;
		}
	
		.search-body .stepper .jian::before {
			content: '';
			position: absolute;
			top: 45%;
			left: 15%;
			width: 70%;
			border-top: 4px solid;
			color: #FF4500;
		}
	
		.search-body .stepper a {
			position: relative;
			pointer-events: none;
			font-size: 30px;
			left: 43%;
		}
		
	.search-body .property{
		position: fixed;
		z-index: 1000;
		width: 100%;
		height: 100%;
		bottom: 0;
	}
	.search-body .property .close_over{
		position: fixed;
		z-index: 999;
		width: 100%;
		height: 100%;
		top: 0;
		opacity:0.3;
		background: #000000;
	}
	.search-body .property .select{
		position: fixed;
		z-index: 1000;
		width: 100%;
		height: 30%;
		bottom: 0;
		background: white;
	}
	.search-body .property .select img{
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
	.search-body .property .select .infor{
		position: absolute;
		top: 2%;
		left: 26%;
		font-size: 35px;
	}
	.search-body .property .select .close{
		position: absolute;
		top: 6%;
		right: 5%;
	}
	.search-body .property .select .u_select{
		width: 85%;
		height: 40%;
		position: absolute;
		top: 32%;
		left: 5%;
		overflow: auto;
	}
	.search-body .property .select .u_select a{
		position: absolute;
		top: 0;
		left: 0;
	}
	.search-body .property .select .u_select li{
		max-width: 400px;
		height: 35%;
		background: #F2F2F2;
		border-radius: 8px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 40px;
		float: left;
		margin-top: 10px;
		overflow: hidden;
	}
	.search-body .property .select .u_select .active{
		max-width: 400px;
		height: 35%;
		background: #FF4500;
		color: white;
		border-radius: 8px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 40px;
		float: left;
		margin-top: 10px;
		overflow: hidden;
	}
	.search-body .property .select .confirm{
		width: 80%;
		height: 70px;
		border-radius: 30px;
		position: absolute;
		bottom: 5.5%;
		left: 9%;
		background: #FF4500;
		font-size: 35px;
	}
</style>
