<template>
	<div class="settle_accounts">
		<!-- 头部 -->
		<div class="header">
			<com_header></com_header>
		</div>
		
		<div class="body">
			<com_body></com_body>
		</div>
		
		<div class="foot">
			<com_foot></com_foot>
		</div>
	</div>
</template>

<script>
import com_header from './component/header.vue'
import com_body from './component/body.vue'
import com_foot from './component/foot.vue'
export default{
	components:{
		com_header,
		com_body,
		com_foot
	}
}
</script>

<style>
	.settle_accounts{
		position: absolute;
		width: 100%;
		height: 100%;
		background:  #f2f2f2;
		overflow: hidden;
	}
	.settle_accounts .header{
		width: 100%;
		height: 8%;
		background: #0188FB;
	}
	.settle_accounts .body{
		width: 94%;
		height: 92%;
		padding: 3%;
	}
/* 	.settle_accounts .foot{
		position: absolute;
		width: 100%;
		height: 6%;
		bottom: 0;
		background: #1AAC19;
	} */
</style>