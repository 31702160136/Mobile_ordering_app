<template>
	<div></div>
</template>

<script>
	
	import Vue from 'vue';
	Vue.component("stepper",{
		template:'<div class="stepper"><div class="jian" @click="jian_" type="default"></div><input v-on:input="oninput" v-model="value" type="number"/><div class="jia" @click="jia_" ></div></div>',
		props:['numValue','minValue'],
		data(){
			return{
				value:this.numValue,//传递过来的值
				valueMaxLength:3,//数字框长度
				minValue_:this.minValue
			}
		},
		methods: {
			//输入数字框事件
			oninput(){
				if(this.value===""){
					this.$emit("sendValueToParent",1);
				}
			},
			//点击按钮加1
			jia_(){
				if(this.value<999){
					this.value++;
				}
				this.$emit("sendValueToParent",this.value);
				this.$emit("jia");
			},
			//点击按钮减1
			jian_(){
				console.log(this.minValue);
				if(this.value>this.minValue){
					this.value--;
				}
				this.$emit("sendValueToParent",this.value);
				this.$emit("jian");
			}
		},
		watch: {
			//检测value变动并进行处理
			value(newValue,oldValue) {
				if(this.value<this.minValue_){
					this.value=oldValue;
					return;
				}
				this.value = String(this.value).slice(0, this.valueMaxLength);
				this.$emit("sendValueToParent",this.value);
			}
		}
	});

	export default{
		components:{
			
		}
		
	}
</script>

<style>
	
</style>
