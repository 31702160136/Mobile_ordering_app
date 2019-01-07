<template>
	<div class="choose_table-header">
		<div class="main">
			<img class="logo" src="../../../../build/logo.png"/>
			<div class="title">
				<a>店铺标题</a><br />
				<a>10桌</a>
			</div>
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
	.choose_table-header{
		position: absolute;
		width: 100%;
		height: 100%;
		background: #FBFBFB;
	}
	/* 主要部分
		position: relative;相对定位
		top: 15px;高宽度15px
		text-align: center;内部元素居中
	*/
	.choose_table-header .main{
		position: relative;
		top: 23px;
		text-align: center;
	}
	/* 头像
		width: 50px;
		height: 50px;
		border-radius: 50px;设置圆角50px
	*/
	.choose_table-header .logo{
		width: 80px;
		height: 80px;
		border-radius: 40px;
	}
	/* 标题
		display: inline-block;设置div不换行
	*/
	.choose_table-header .title{
		display: inline-block;
	}
	.choose_table-header a{
		color: #000000;
	}
	.choose_table-header .title a{
		font-size: 30px;
	}
</style>
