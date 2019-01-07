<template>
	<div class="settle_account-header">
		<div class="back" @click="back()"><van-icon name="arrow-left" size="1.5em"/></div>
		<img class="logo" src="../../../../build/logo.png"/>
		<a class="title">店铺标题</a>
		<a class="table">({{this.$cookie().getCookie('stationType')}})</a>
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
	.settle_account-header{
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
	}
	
	.settle_account-header .back{
		position: absolute;
		left: 0;
		width: 12%;
		height: 100%;
		display:flex;
		justify-content: center;
		align-items: center;
	}
	.settle_account-header .logo{
		width: 70px;
		height: 70px;
		background:white;
		border-radius: 100px;
	}
	.settle_account-header .title{
		margin-left: 3%;
	}
	.settle_account-header .table{
	}
</style>
