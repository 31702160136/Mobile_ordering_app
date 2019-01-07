export default{
	state:{
		cart:[]
	},
	getters:{
		sum:(state)=>()=>{
			var minus=0;
			var sum=0;
			for(var i=0;i<state.cart.length;i++){
				sum+=(state.cart[i].price*state.cart[i].sum);
				for(var j=0;j<state.cart[i].sum;j++){
					if(state.cart[i].discount!=null){
						minus+=state.cart[i].price-(state.cart[i].price*(0.1*state.cart[i].discount));
					}
				}
			}
			sum-=minus;
			sum=sum.toFixed(2);
			minus=minus.toFixed(2);
			
			return {
				sum:sum,
				minus:minus
			};
		},
		total:(state)=>()=>{
			var sum=0;
			for(var i=0;i<state.cart.length;i++){
				sum+=(state.cart[i].price*state.cart[i].sum);
			}
			sum=sum.toFixed(2);
			return sum;
		},
		count:(state)=>()=>{
			var sum=0;
			for(var i=0;i<state.cart.length;i++){
				for(var j=0;j<state.cart[i].sum;j++){
					sum++;
				}
			}
			return sum;
		},
		ordercount:(state)=>(item)=>{
			var sum=0;
			for(var i=0;i<state.cart.length;i++){
				if(state.cart[i].id===item.id){
					sum+=state.cart[i].sum;
				}
			}
			return sum;
		},
		cartcount:(state)=>(item)=>{
			for(var i=0;i<state.cart.length;i++){
				if(state.cart[i].id===item.id&&state.cart[i].flavor===item.flavor){
					return state.cart[i].sum;
				}
			}
			return 0;
		},
		discount:(state)=>(item)=>{
			for(var i=0;i<state.cart.length;i++){
				if(state.cart[i].id===item.id&&state.cart[i].discount!=10){
					var minus=(state.cart[i].price-(state.cart[i].price*(0.1*state.cart[i].discount))).toFixed(2);
					var discount=state.cart[i].discount;
					return {
						discount:discount,
						minus:minus
					}
				}
			}
			return {};
		}
			
	},
	mutations:{
		addCart(state,newData){
			for(var i=0;i<state.cart.length;i++){
				if(state.cart[i].id===newData.id&&state.cart[i].flavor===newData.flavor){
					state.cart[i].sum++;
					return;
				}
			}
			state.cart=state.cart.concat(newData);
		},
		removeOrder(state,item){
			if(state.cart.length!=0){
				for(var i=0;i<state.cart.length;i++){
					if(state.cart[i].id===item.id){
						if(state.cart[i].sum>1){
							state.cart[i].sum--;
						}else{
							state.cart.splice(i,1);
						}
						return;
					}
				}
				
			}
			
		},
		removeCart(state,item){
			if(state.cart.length!=0){
				for(var i=0;i<state.cart.length;i++){
					if(state.cart[i].id===item.id&&state.cart[i].flavor===item.flavor){
						if(state.cart[i].sum>1){
							state.cart[i].sum--;
						}else{
							state.cart.splice(i,1);
						}
						return;
					}
				}
				
			}
			
		},
		removeAll(state){
			state.cart.splice(0,state.cart.length);
		}
	}
};