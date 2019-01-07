<template>
	<div class="order-header">
		<div class="main">
			<img class="logo" src="../../../../build/logo.png"/>
			<div class="title" >
				<a>{{this.$cookie().getCookie("openid")}}</a><br />
				<a>({{this.$cookie().getCookie('stationType')}})</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		computed:{
		},
		methods:{
			ordering(){
				window.history.pushState({},0,this.$store.state.url);
// 				this.$router.push(
// 					{
// 						path:'/ordering',
// 						query:{
// 							before:'order'
// 						}
// 					}
// 				);
				this.$router.push(
					{
						path:'/settle_accounts',
						query:{
							before:'order'
						}
					}
				);
			}
		}
	}
</script>

<style>
	/* 最外层
		width: 100%;宽度
		height: 100px;高度
		background: #f2f2f2;背景颜色
	*/
	.order-header{
		position: absolute;
		width: 100%;
		height: 100%;
		background: white;
		display: flex;
		align-items: center;
		background: #0188fb;
		color: white;
	}
	/* 主要部分
		position: relative;相对定位
		top: 15px;高宽度15px
		text-align: center;内部元素居中
	*/
	.order-header .main{
		width: 100%;
		height: 100px;
		position: relative;
		left: 3%;
		display: flex;
		align-items: center;
		
	}
	/* 头像
		width: 50px;
		height: 50px;
		border-radius: 50px;设置圆角50px
	*/
	.order-header .logo{
		width: 100px;
		height: 100px;
		border-radius: 100px;
		background:white;
	}
	/* 标题
		display: inline-block;设置div不换行
	*/
	.order-header .title{
		position: relative;
		left: 2%;
		display: inline-block;
		
	}
	.order-header a{
		color: white;
	}
	.order-header .title a{
		font-size: 30px;
	}
	
	.order-header .ordering{
		width: 140px;
		height: 50px;
		background: #fff9f0;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		right: 8%;
		border: 1px solid antiquewhite;
		color: #ffdb9f;
	}
	.order-header .ordering a{
		color:#ecb55a;
	}
</style>
