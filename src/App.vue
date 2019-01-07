<template>
	<div>
    <keep-alive>
		<router-view></router-view>
	</keep-alive>
	</div>
</template>

<script>
	export default {
		name: 'App',
		components:{
			
		},
		watch: {
			activated: function() {
				this.getCase();
			}
		},
	}
</script>

<style >

</style>