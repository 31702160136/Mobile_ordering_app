//网络
import Vue from 'Vue';
import axios from 'axios';
import qs from 'qs';
import {config} from './config.js';

//Get用法
// let getGreens = () => {
// 	return axios.get(url,{
// 		params:{
// 			type: "get",
// 			method: "getGreens",
// 			table: "green",
// 			where: "1"
// 		}
// 	});
// };

//Post用法
// let getGreens = () => {
// 	return axios({
// 		method:"post",
// 		url:p_url,
// 		data: qs.stringify({
// 			type: "post",
// 			method: "getGreens",
// 			table: "green",
// 			where: "1"
// 		})
// 	});
// };


let http=()=>{
	return{
		get(id){
			return{
				id
			};
		},
		getList(){
			return axios.get(config().url());
		},
		senOrder(orderdata){
			console.log(orderdata);
			return axios({
				method:"post",
				url:config().orderUrl(),
				data: qs.stringify(orderdata)
			});
		},
		orderListUrl(openid){
			return axios.get(config().orderListUrl(),{
				params:{
					openid:openid,
					page: 0 , //从第0页开始
					size: 999
				}
			});
		},
		orderDatail(openid,orderid){
			return axios.get(config().orderDatailUrl(),{
				params:{
					openid:openid,
					orderId: orderid
				}
			});
		}
	}
}



export {
	http
};
