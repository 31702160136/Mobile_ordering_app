import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

import products from './modules/products.js';
import cart from './modules/cart.js';
import infor from './modules/infor.js';
import dininfor from './modules/dininfor.js';
import ordering from './modules/ordering.js';

export default new Vuex.Store({
	state:{
		url:''
	},
	mutations:{
		setUrl(state,url){
			state.url=url;
		}
	},
	modules:{
		products,
		cart,
		infor,
		dininfor,
		ordering
	}
})
