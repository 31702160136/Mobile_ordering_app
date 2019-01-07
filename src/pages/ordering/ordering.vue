<template>
	<div class="ordering">
		<div class="header">
			<div class="main">
				<img class="logo" src="../../assets/logo.png"/>
				<div class="title">
					<a>店铺标题</a>
					<a>({{$store.state.infor.stationType}})</a>
				</div>
			</div>
			<div class="back">
				<div @click="back" class="back-btn"><van-icon name="arrow-left" size="1.5em"/></div>
			</div>
		</div>
		<ul class="ul1">
			<li>未支付</li>
			<li>已支付</li>
		</ul>
		<ul class="ul2">
			<li>sssss</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			back() {
				this.$router.push({path:'/'});
			}
		},
	}
</script>

<style>
	.ordering{
		position: absolute;
		width: 100%;
		height: 100%;
	}
	.ordering .header{
		position: relative;
		width: 100%;
		height: 6%;
		background: #f9fbfb;
	}
	.ordering .header .main{
		width: 100%;
		height: 100%;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.ordering .header img{
		width: 50px;
		height: 50px;
		border-radius: 100px;
		text-align: center;
	}
	.ordering .title{
		display: inline-block;
	}
	.ordering .back{
		width: 10%;
		height: 100%;
		position: absolute;
		bottom: 0;
	}
	
	.ordering .back .back-btn{
		width: 9%;
		height: 100%;
		padding: 0 0 0 15px;
		display: flex;
		align-items: center;
	}
	
	.ordering .ul1{
		width: 100%;
		height: 80px;
		background: #f9fbfb;
		border-top: #F2F2F2 1px solid;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.ordering .ul1 li{
		width: 50%;
		float: left;
		display: flex;
		justify-content: center;
		font-size: 30px;
	}
	.ordering .ul2 li{
		
	}
	
</style>
