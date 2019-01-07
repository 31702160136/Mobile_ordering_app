export default{
	state:{
		id:"",
		title:"",
		img:"",
		site:"",//地址
		stationType:"",
		
	},
	mutations:{
		setId(state,newData) {
			state.id=newData;
		},
		setTitle(state,newData) {
			state.title=newData;
		},
		setImg(state,newData) {
			state.img=newData;
		},
		setStationType(state,newData) {
			state.stationType=newData;
		},
		setSite(state,newData) {
			state.site=newData;
		}
	}
};