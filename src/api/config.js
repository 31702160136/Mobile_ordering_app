// let config=()=>{
// 	return{
// 		myUrl(){
// 			//return '192.168.1.101:80';
// 			return 'http://www.yulemofang.cn/Mobile_ordering_app/dist/index.html';
// 		},
// 		url(){//菜单接口
// 			return 'http://elliopeng.nat300.top/sell/buyer/product/list';
// 			//return "/api"+"/sell/buyer/product/list";
// 		},
// 		orderListUrl(){
// 			return 'http://elliopeng.nat300.top/sell/buyer/order/list';
// 			//return "/api"+'/sell/buyer/order/list';
// 		},
// 		orderDatail(){
// 			return 'http://elliopeng.nat300.top/sell/buyer/order/detail';
// 			//return "/api"+'/sell/buyer/order/detail';
// 		},
// 		orderUrl(){//创建订单接口
// 			return 'http://elliopeng.nat300.top/sell/buyer/order/create';
// 			//return "/api"+"/sell/buyer/order/create";
// 		},
// 		openidUrl(){//获取openid接口
// 			return 'http://elliopeng.nat300.top/sell/wechat/authorize';
// 			//return "/api"+"/sell/wechat/authorize";
// 		},
// 		createPayUrl(){//支付接口
// 			return "http://elliopeng.nat300.top/sell/pay/create";
// 		}
// 	}
// }
let config=()=>{
	return{
		myUrl(){
			//return 'http://192.168.1.101'+"/#/";
			return 'https://www.yulemofang.cn/Mobile_ordering_app/dist/index.html'+"#/";
		},
		url(){//菜单接口
			//return 'http://elliopeng.nat300.top/sell/buyer/product/list';
			return "/api"+"/sell/buyer/product/list";
		},
		orderListUrl(){
			//return 'http://elliopeng.nat300.top/sell/buyer/order/list';
			return "/api"+'/sell/buyer/order/list';
		},
		orderDatailUrl(){
			//return 'http://elliopeng.nat300.top/sell/buyer/order/detail';
			return "/api"+'/sell/buyer/order/detail';
		},
		orderUrl(){//创建订单接口
			//return 'http://elliopeng.nat300.top/sell/buyer/order/create';
			return "/api"+"/sell/buyer/order/create";
		},
		openidUrl(){//获取openid接口
			//return 'http://elliopeng.nat300.top/sell/wechat/authorize';
			return "/api"+"/sell/wechat/authorize";
		},
		createPayUrl(){//支付接口
			return "http://elliopeng.nat300.top/sell/pay/create";
		}
	}
}
// let config=()=>{
// 	return{
// 		myUrl(){
// 			//return '192.168.1.101:80';
// 			return 'http://www.yulemofang.cn/Mobile_ordering_app/dist/index.html';
// 		},
// 		url(){//菜单接口
// 			//return 'http://elliopeng.nat300.top/sell/buyer/product/list';
// 			return "http://www.yulemofang.cn:8081/sell/buyer/product/list";
// 		},
// 		orderListUrl(){
// 			//return 'http://elliopeng.nat300.top/sell/buyer/order/list';
// 			return "http://www.yulemofang:8081/sell/buyer/order/list";
// 		},
// 		orderDatail(){
// 			//return 'http://elliopeng.nat300.top/sell/buyer/order/detail';
// 			return "http://www.yulemofang:8081/sell/buyer/order/detail";
// 		},
// 		orderUrl(){//创建订单接口
// 			//return 'http://elliopeng.nat300.top/sell/buyer/order/create';
// 			return "http://www.yulemofang:8081/sell/buyer/order/create";
// 		},
// 		openidUrl(){//获取openid接口
// 			//return 'http://elliopeng.nat300.top/sell/wechat/authorize';
// 			return "http://www.yulemofang:8081/sell/wechat/authorize";
// 		},
// 		createPayUrl(){//支付接口
// 			return "http://elliopeng.nat300.top/sell/pay/create";
// 		}
// 	}
// }
export{
	config
};
