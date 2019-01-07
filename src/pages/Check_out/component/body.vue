<template>
	<div class="settle_accounts-header">
		<div class="main">
			<div class="icon"><van-icon color="#ffffff" size="40px" name="success" /></div>
			<br /><a style="color: #1AAC19;">付款成功</a>
			<div class="title">
				<a>店铺标题</a><br />
				<a class="money">150.0</a>
			</div>
			<van-button class="finish" plain type="primary">完成</van-button>
		</div>
	</div>
</template>

<script>
</script>

<style>
	/* 最外层
		width: 100%;宽度
		height: 100px;高度
		background: #f2f2f2;背景颜色
	*/
	.settle_accounts-header{
		position: absolute;
		width: 100%;
		top: 100px;
	}
	/* 主要部分
		position: relative;相对定位
		top: 15px;高宽度15px
		text-align: center;内部元素居中
	*/
	.settle_accounts-header .main{
		position: relative;
		top: 23px;
		text-align: center;
	}
	/* 标题
		display: inline-block;设置div不换行
	*/
	.settle_accounts-header .title{
		font-size: 30px;
		position: relative;
		top: 40px;
	}
	.settle_accounts-header .icon{
		width: 120px;
		height: 120px;
		background: #1AAC19;
		text-align: center;
		line-height: 175px;
		border-radius: 100px;
		margin: 0 auto;
	}
	.settle_accounts-header .title .money{
		color: coral;
		position: relative;
		top: 15px;
		font-size: 40px;
	}
	.settle_accounts-header .finish{
		position: relative;
		top: 500px;
		width: 140px;
		height: 55px;
	}
</style>