<template>
	<div class="choose_table">
		<!-- 头部 -->
		<div class="header">
			<com_header></com_header>
		</div>
		<!-- 中部 -->
		<div class="body">
			<com_body></com_body>
		</div>
		<div class="copy">
			<copyright></copyright>
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
	import copyright from '@/components/copyright.vue'
	export default {
		components: {
			com_header,
			com_body,
			com_foot,
			copyright
		},
		methods: {
			
		}
	}
</script>

<style>
	.choose_table {
		position: absolute;
		width: 100%;
		height: 100%;
		background: #f2f2f2;
	}

	.choose_table .header {
		position: relative;
		top: 80px;
		width: 100%;
		height: 140px;
		overflow: hidden;
	}

	.choose_table .body {
		width: 100%;
		position: relative;
		top: 160px;
		overflow: hidden;
	}

	.choose_table .copy {
		position: relative;
		top: 430px;
		text-align: center;
	}

	.choose_table .foot {
		position: absolute;
		width: 100%;
		height: 80px;
		bottom: 0;
	}
</style>
