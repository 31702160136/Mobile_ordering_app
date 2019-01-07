<template>
	<div class="choose_table-body">
		<div class="main">
			<a>请选择就餐人数</a><br />
			<!-- 选择就餐人数按钮 -->
			<div class="number_of_people">
				<div 
					v-for="(item,index) of list" :key="index" 
					@click="count_people(index)" 
					class="count"
					:class="{active:onclick===index}">{{item.num}}</div>
			</div>
		</div>
		<!-- 点击更多后弹窗 -->
		<van-dialog
			v-model="dialog"
			showCancelButton
			:before-close="beforeClose"
			className="dialog"
			>
			<!-- 进步器 -->
			<stepper
				class="stepper"
				minValue=1
				numValue=1
				@sendValueToParent="getValue"
				>
				</stepper>
		</van-dialog>
	</div>
</template>

<script>
	export default{
		data:function(){
			
			return{
				morevalue:1,
				dialog:false,
				list:[
					{id:1,num:1},
					{id:2,num:2},
					{id:3,num:3},
					{id:4,num:4},
					{id:5,num:5},
					{id:6,num:6},
					{id:7,num:7},
					{id:8,num:8},
					{id:9,num:9},
					{id:10,num:10},
					{id:11,num:11},
					{id:12,num:"更多"},
				],
				onclick:-1
			}
		},
		methods:{
			//点击弹框按钮事件处理
			beforeClose(action, done){
				if(action==="confirm"){
					this.onclick=11;
					this.list[11].num=this.morevalue;
					done();
				}else if(action==="cancel"){
					done();
				}
			},
			//获取进步器传递过来的值进行赋值
			getValue(value){
				if(value===""){
					this.morevalue=1;
				}else{
					this.morevalue=parseInt(value);
				}
			},
			//点击就餐人数按钮进行处理
			count_people:function(index){
				if(index==11){
					this.dialog=true;
				}else{
					this.onclick=index;
					this.list[11].num="更多";
				}
			}
		},
		components:{
			
		}
	}
</script>

<style>
	/* 主体样式 */
	.choose_table-body .main{
		width: 100%;
		height: 600px;
		background: #FBFBFB;
		text-align: center;
	}
	/* choose_table-body .main a 主体文字样式 */
	.choose_table-body .main a{
		font-size: 30px;
		color: #000000;
	}
	/* choose_table-body .number_of_people .count就餐人数按钮样式 */
	.choose_table-body .number_of_people .count{
		width: 150px;
		height: 150px;
		padding: 0;
		margin-top: 20px;
		margin-right: 10px;
		display: inline-block;
		border: 2px solid;
		border-radius: 15px;
		background: #FEFEFE;
		line-height: 140px;
		font-size: 30px;
	}
	
	/* active点击就餐人数时候改变颜色样式 */
	.active{
		border: 3px solid red;
		color: red;
	}
	
	/* dialog弹框样式*/
	.choose_table-body .dialog{
		width: 450px;
		height: 250px;
		border-radius: 20px;
	}
	/* .dialog .van-dialog__footer--buttons调整弹框按钮位置 */
	.choose_table-body .dialog .van-dialog__footer--buttons{
		position: relative;
		top: 100px;
		width: 300px;
		margin: 0 auto;
	}
	/* dialog .van-dialog__confirm确定按钮样式 */
	.choose_table-body .dialog .van-dialog__confirm{
		background: #FF0000;
		margin-left: 40px;
		border-radius: 20px;
		color: #FEFEFE;
	}
	/* dialog .van-dialog__cancel取消按钮样式 */
	.choose_table-body .dialog .van-dialog__cancel{
		background: #9E9E9E;
		border-radius: 20px;
		color: #FEFEFE;
	}
	
	/* stepper进步器位置样式 */
	.choose_table-body .stepper{
		position: relative;
		top: 60px;
		left: 94px;
	}
	/* stepper button进步器按钮样式 */
	.choose_table-body .stepper button{
		font-size: 30px;
		width: 90px;
		height: 60px;
		border-radius: 20px;
		border: #9E9E9E solid 2px !important;
		background: white;
		text-align: center;
		line-height: 10px;
	}
	/* stepper button:active进步器按钮点击样式 */
	.choose_table-body .stepper button:active{
		background: #F2F2F2;
	}
	/* stepper input进步器输入框样式 */
	.choose_table-body .stepper input{
		width: 80px;
		height: 50px;
		border: none;
		text-align: center;
		font-size: 30px;
		border-bottom: gainsboro solid 1px;
		/* pointer-events: none; *//* 设置进步器输入框不可手动编辑输入 */
	}
</style>