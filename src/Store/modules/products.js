export default{
	state:{
		menus:[],
		greens:[]
	},
	getters:{
		search:(state)=>(name)=>{
			var array=[];
			for(var i=0;i<state.greens.length;i++){
				if(state.greens[i].name===name){
					array.push(state.greens[i]);
					return array;
				}
			}
			var arrname1=name.split("");
			for(var i=0;i<state.greens.length;i++){
				var isfind=false;
				var arrname2=state.greens[i].name.split("");
				for(var j=0;j<arrname2.length;j++){
					for(var k=0;k<arrname1.length;k++){
						if(arrname2[j]===arrname1[k]){
							array.push(state.greens[i]);
							isfind=true;
							break;
						}
					}
					if(isfind){
						break;
					}
				}
			}
			return array;
		},
		flavor:(state)=>(id)=>{
			for(var i=0;i<state.greens.length;i++){
				if(typeof state.greens[i].flavor==='undefined'){
					console.log('没传口味');
				}else if(state.greens[i].id===id&&state.greens[i].flavor!=""){
					var arr=state.greens[i].flavor.split(",");
					return arr;
				}
				
			}
			return "";
		},
		greeninfor:(state)=>(id)=>{
			for(var i=0;i<state.greens.length;i++){
				if(state.greens[i].id===id){
					return state.greens[i];
				}
			}
			return {};
		}
	},
	mutations:{
		initData(state){
			state.menus=[];
			state.greens=[];
		},
		setShopMenu(state,newData) {
			state.menus=state.menus.concat(newData);
		},
		setShopGreens(state,newData) {
			for(var i=0;i<newData.length;i++){
				state.greens=state.greens.concat(newData[i].foods);
				newData[i].foods[0]["menu"]=newData[i].name;
			}
		}
	}
};