<template>
	<div class="order" @click="isgetOpenid()">
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
import {http} from '../../api/shop.js'
import {config} from '../../api/config.js';

export default{
	data(){
		return{
		}
	},
	mounted() {
		//this.initProducts();
		this.init();
	},
	computed:{
		
	},
	methods:{
		init(){
			this.$store.commit("initData");
			var openid=this.$route.query.openid;
			var stationType=this.$route.query.stationType;
			if(openid!==undefined){
				this.$cookie().setCookie("openid",openid,1);
			}
			if(typeof(stationType)!='undefined'||this.$cookie().getCookie('stationType')!=stationType&&stationType!=undefined){
				this.$cookie().setCookie("stationType",stationType,1);
			}
			console.log(this.$cookie().getCookie("openid")===null);
			console.log(this.$cookie().getCookie("openid")===undefined);
			if(this.$cookie().getCookie("openid")===null||this.$cookie().getCookie("openid")===undefined){
				location.href=config().openidUrl()+"?returnUrl="+encodeURIComponent(config().myUrl());
				//location.href="http://192.168.1.101/#/?openid=oC5W-5zuAHAOicjWRhK9Ogl-Aqns";
			}
			http().getList().then(res=>{
				this.$store.commit("setShopMenu", res.data.data);
				this.$store.commit("setShopGreens", res.data.data);
			}).catch(error=>{
				console.log('获取不到数据');
			});
			this.$cookie().setCookie("myurl",window.location.href,1);
			//console.log(this.$cookie().getCookie("openid")===null);
			//this.$cookie().clearCookie();
		},
		isgetOpenid(){
			if(this.$cookie().getCookie("openid")===null){
				this.init();
			}
		}
	},
	components:{
		com_header,
		com_body,
		com_foot
	}
}
</script>
	
<style>
	.order{
		position: absolute;
		width: 100%;
		height: 100%;
		background:  #f2f2f2;
		overflow: hidden;
	}
	.order .header{
		position: relative;
		top: 0px;
		width: 100%;
		height: 15%;
	}
	.order .body{
		width: 100%;
		height: 77%;
		position: absolute;
	}
	.order .foot{
		width: 100%;
		height:8%;
		min-height: 100px;
		position: absolute;
		z-index: 999;
		bottom: 0px;
	}
</style>