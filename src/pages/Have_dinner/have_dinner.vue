<template>
	<div class="have_dinner">
		<!-- 头部 -->
		<div class="header">
			<com_header></com_header>
		</div>
		<!-- 中部 -->
		<div class="body">
			<com_body></com_body>
		</div>
		<!-- 底部 -->
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
	.have_dinner{
		position: absolute;
		width: 100%;
		height: 100%;
		background:  #f2f2f2;
		overflow: hidden;
	}
	.have_dinner .header{
		position: relative;
		top: 0px;
		width: 100%;
		height: 6%;
		overflow: hidden;
		background: #42B983;
	}
	.have_dinner .body{
		width: 100%;
		height: 85%;
		position: relative;
		top: 1%;
	}
	.have_dinner .foot{
		position: absolute;
		width: 100%;
		height: 8%;
		bottom: 0;
		background: #1AAC19;
	}
</style>