<template>
	<div class="have_dinner-header">
		
		<div class="main">
			<img class="logo" src="../../../../build/logo.png"/>
			<div class="title">
				<a>店铺标题</a>
				<a>{{this.$cookie().getCookie('stationType')}}</a>
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
	.have_dinner-header .back{
		width: 10%;
		height: 100%;
		background: white;
		position: absolute;
		bottom: 0;
		background: #0188FB;
		color: white;
	}
	
	.have_dinner-header .back .back-btn{
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
	.have_dinner-header{
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
	.have_dinner-header .main{
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
	.have_dinner-header .logo{
		width: 50px;
		height: 50px;
		border-radius: 50%;
		position: relative;
		background: white
	}
	/* 标题
		display: inline-block;设置div不换行
	*/
	.have_dinner-header .title{
		display: inline-block;
	}
	.have_dinner-header a{
		color: white
	}
	.have_dinner-header .title a{
		font-size: 30px;
	}
</style>
