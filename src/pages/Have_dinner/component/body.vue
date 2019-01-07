<template>
	<div class="have_dinner_body">
		<div class="main">
			<van-cell @click="is_sum=!is_sum" :center="true" class="people_num" title="就餐人数" is-link arrow-direction="rigth" v-model="morevalue" />
			<div :class="{way:isway,'unway':!isway}">
				<a>就餐方式</a>
				<label>
					<input name="feel" type="radio" value="堂吃" checked @click="way(0)" />
					<span class="pos">
						<span class="radio_bg">
							<span class="radio_on"></span>
						</span>
					</span>
					<span>堂吃</span>
				</label>
				<label>
					<input name="feel" type="radio" value="外带" @click="way(1)"/>
					<span class="pos">
						<span class="radio_bg">
							<span class="radio_on"></span>
						</span>
					</span>
					<span>外带</span>
				</label>
			</div>
			<div class="caption"><label>菜品共&nbsp;{{$store.getters.count()}}&nbsp;份</label></div>
			<div class="greens">
				<div class="green-item" v-for="(green_item,green_index) of cart" :key="green_index">
					<img :src="green_item.icon" />
					<div class="title"><label >{{green_item.name}}</label></div>
					<label class="money">{{green_item.price}}</label>
					<div class="infor">
						<label class="sum">×{{green_item.sum}}</label>
						<label class="describe">{{green_item.flavor}}</label>
					</div>
					<div class="discounts" v-show="green_item.discount!=null">
						<label class="discount"><a>优惠</a>&nbsp;&nbsp;<span style="color: #000000">{{green_item.discount}}&nbsp;折</span></label>
						<label class="discount_money">-￥{{minus(green_item)}}</label>
					</div>
				</div>
			</div>
			<div class="total"><div><a><span style="color: #9E9E9E; font-size: 10px;">总计&nbsp;&nbsp;</span>{{$store.getters.total()}}</a></div></div>
			<div class="bottom">
				到底啦
			</div>
		</div>
		
		<div :class="is_sum?'choose_table':'unchoose_table'">
			<div class="main">
				<br /><a>请选择就餐人数</a><br />
				<!-- 选择就餐人数按钮 -->
				<div class="number_of_people">
					<div 
						v-for="(item,index) of list" :key="index" 
						@click="count_people(index)" 
						class="count"
						:class="{active:onclick===index}"><a>{{item.num}}</a></div>
				</div>
			</div>
		</div>
		<div :class="is_sum?'shade':'unshade'" @click="morevalue!=0?is_sum=!is_sum:is_sum=true"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isway:true,
				is_sum:true,
				list:[
					{id:1,num:1},
					{id:2,num:2},
					{id:3,num:3},
					{id:4,num:4},
					{id:5,num:5},
					{id:6,num:6},
					{id:7,num:7},
					{id:8,num:8},
					{id:9,num:9},
					{id:10,num:10},
					{id:11,num:11},
					{id:12,num:12},
					{id:13,num:13},
					{id:14,num:14},
					{id:15,num:15},
					{id:16,num:16},
					{id:17,num:17},
					{id:18,num:18},
					{id:19,num:19},
					{id:20,num:20},
				],
				onclick:-1
			}
		},
		computed: {
			cart() {
				return this.$store.state.cart.cart;
			},
			morevalue(){
				return this.$store.state.dininfor.num_prople;
			},
			minus(){
				return function(item){
					if(item.discount!=null){
						var minus=item.price-(item.price*(0.1*item.discount));
						minus=minus.toFixed(2);
						return minus;
					}else{
						return 0;
					}
				}
			}
			
		},
		methods:{
			//点击就餐人数按钮进行处理
			count_people:function(index){
				this.onclick=index;
				this.$store.commit("setNumProple",index+1);
				this.is_sum=!this.is_sum;
			},
			way(way){
				this.$store.commit("setWay",way);
			}
			
		},
	}
</script>

<style>
	.have_dinner_body {
		width: 100%;
		height: 100%;
	}
	.have_dinner_body .main{
		width: 96%;
		height: 100%;
		padding: 0 0 0 2%;
		overflow-y: auto;
		overflow-x: hidden;
	}
	.have_dinner_body .people_num {
		height: 6%;
		font-size: 28px;
	}

	.have_dinner_body .way {
		background: white;
		height: 6%;
		font-size: 28px;
		display: flex;
		/* justify-content:center; */
		align-items: Center;
		padding: 0 0 0 2%;
	}
	.have_dinner_body .unway {
		display: none;
	}
	.have_dinner_body .way label {
		position: relative;
		left: 50%;
		margin-right: 3.5%;
	}

	.have_dinner_body .way .select input {
		width: 35px;
		height: 35px;
		content: '';
		position: relative;
		top: 8px;
		content: "";
	}

	.radio {
		width: 260px;
		height: 26px;
		line-height: 26px;
		margin: 200px auto;
		background-color: #ddeef1;
		font-size: 16px;
		color: #495060;
		text-align: center;
	}

	label:first-child {
		margin-right: 40px;
	}

	label input,
	.radio_on {
		display: none;
	}

	.pos {
		display: inline;
		vertical-align: middle;
	}

	.radio_bg {
		position: relative;
		display: inline-block;
		height: 25px;
		width: 25px;
		border: 1px solid #0188FB;
		border-radius: 50px;
	}

	label:hover .radio_bg,
	label input:checked+span.pos span.radio_bg {
		border: 1px solid #0188FB;
	}

	label input:checked+span.pos span.radio_bg .radio_on {
		display: inline-block;
		position: absolute;
		top: 4px;
		left: 4px;
		width: 17px;
		height: 17px;
		border-radius: 50%;
		background-color: #0188FB;
	}
	.have_dinner_body .caption{
		width: 100%;
		height: 5%;
		background: white;
		position: relative;
		top: 1.5%;
		padding: 0 0 0 2%;
		display: flex;
		align-items: center;
		font-size: 28px;
	}
	/* 菜列表 */
	.have_dinner_body .greens{
		width: 100%;
		background: white;
		border-top: 1px #F2F2F2 solid;
		position: relative;
		top: 1.5%;
	}
	.have_dinner_body .greens .green-item{
		width: 100%;
		border-bottom: #F2F2F2 solid 1px;
		padding-top: 2%;
		padding-left: 2%;
	}
	.have_dinner_body .greens .green-item img{
		width: 100px;
		height: 100px;
		background: #1AAC19;
		position:relative;
	}
	.have_dinner_body .greens .green-item .title{
		display: inline;
		position: relative;
		top: -75px;
		font-size: 26px;
	}
	.have_dinner_body .greens .green-item .money{
		position: relative;
		right: 40px;
		float: right;
	}
	.have_dinner_body .greens .green-item .infor{
		position: relative;
		top: -65px;
		left: 109px;
		height: 0;
		width: 100%;
	}
	.have_dinner_body .greens .green-item .sum{
		color: #404040;
	}
	.have_dinner_body .greens .green-item .describe{
		position: relative;
		left: -20px;
		color: #9E9E9E;
	}
	.have_dinner_body .greens .green-item .discounts{
		width: 100%;
		height: 40px;
		position: relative;
		color: #FF4500;
		padding-bottom: 1.5%;
	}
	.have_dinner_body .greens .green-item .discounts .discount_money{
		position: absolute;
		right: 5%;
		
	}
	.have_dinner_body .total{
		width: 100%;
		height: 8%;
		background: white;
		font-size: 30px;
		margin-top: 2%;
		display: flex;
		align-items: center;
		
	}
	.have_dinner_body .total div{
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
	}
	.have_dinner_body .total a{
		position: absolute;
		right: 5%;
	}
	
	/* choose_table-body .number_of_people .count就餐人数按钮样式 */
	.have_dinner_body .unshade{
		display: none;
	}
	.have_dinner_body .shade{
		width: 100%;
		height: 200%;
		position: absolute;
		z-index: 998;
		top: -20%;
		background: #404040;
		opacity:0.5;
		
	}
	.unchoose_table{
		display: none;
	}
	.choose_table{
		position: absolute;
		z-index: 999;
		width: 80%;
		height: 45%;
		text-align: center;
		background: white;
		border-radius: 3%;
		top: 20%;
		left: 10%;
		overflow: hidden;
	}
	.choose_table .main{
		overflow: hidden;
	}
	.choose_table .number_of_people{
		width: 100%;
		height: 75%;
		position: relative;
		top: 10px;
		left: 10px;
		overflow-y: auto;
		overflow-x: hidden;
		
	}
	.choose_table .number_of_people .count{
		width: 100px;
		height: 100px;
		padding: 0;
		margin-top: 20px;
		margin-right: 20px;
		display: inline-block;
		border: 2px solid #0188FB;
		border-radius: 50%;
		font-size: 30px;
		line-height: 100px;
		color: #0188FB;
	}
	
	/* active点击就餐人数时候改变颜色样式 */
	.choose_table .active{
		color:white !important;
		background: #0188FB;
	}
	
	.have_dinner_body .bottom{
		width: 100%;
		height: 5%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 10px;
		color: #9E9E9E;
	}
</style>
