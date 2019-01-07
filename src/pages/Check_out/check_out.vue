<template>
	<div class="check_out">
		<!-- 头部 -->
		<div>
			<com_header></com_header>
		</div>
		<!-- 中部 -->
		<div>
			<com_body></com_body>
		</div>
		<!-- 底部 -->
		<div>
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
	.check_out{
		position: absolute;
		width: 100%;
		height: 100%;
		background:  #f2f2f2;
	}
	.check_out .header{
		position: relative;
		top: 80px;
		width: 100%;
		height: 140px;
		overflow: hidden;
	}
	.check_out .body{
		width: 100%;
		position: relative;
		top: 160px;
		overflow: hidden;
	}
	.check_out .foot{
		position: absolute;
		width: 100%;
		height: 80px;
		bottom: 0;
	}
</style>