<template>
	<div class="settle_accounts-header">
		<div class="main">
			<img class="logo" src="../../../../build/logo.png"/>
			<div class="title">
				<a>店铺标题</a>
				<a>(10桌)</a>
			</div>
		</div>
		<div class="back">
			<div @click="back" class="back-btn"><van-icon name="arrow-left" size="1.5em"/></div>
		</div>
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

<style scoped>
	.settle_accounts-header .back{
		width: 10%;
		height: 100%;
		position: absolute;
		bottom: 0;
		color: white;
		background: #0188FB;
	}
	
	.settle_accounts-header .back .back-btn{
		width: 9%;
		height: 100%;
		padding: 0 0 0 15px;
		display: flex;
		align-items: center;
	}
	/* 最外层
		width: 100%;宽度
		height: 100px;高度
		background: #f2f2f2;背景颜色
	*/
	.settle_accounts-header{
		position: relative;
		width: 100%;
		height: 100%;
		background: #0188FB;
	}
	/* 主要部分
		position: relative;相对定位
		top: 15px;高宽度15px
		text-align: center;内部元素居中
	*/
	.settle_accounts-header .main{
		width: 100%;
		height: 100%;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	/* 头像
		width: 50px;
		height: 50px;
		border-radius: 50px;设置圆角50px
	*/
	.settle_accounts-header .logo{
		width: 50px;
		height: 50px;
		border-radius: 50%;
		position: relative;
		background: white;
	}
	/* 标题
		display: inline-block;设置div不换行
	*/
	.settle_accounts-header .title{
		display: inline-block;
	}
	.settle_accounts-header a{
		color: white;
	}
	.settle_accounts-header .title a{
		font-size: 30px;
	}
</style>