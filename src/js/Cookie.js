let cookie=()=>{
	return{
		setCookie(ckey,cvalue,cday){//设置cookie
			var date=new Date();
			date.setTime(date.getTime()+(cday*24*60*60*1000));
			var expires="expires="+date.toUTCString();
			document.cookie=ckey+"="+cvalue+";"+expires;
		},
		getCookie(name){//获取cookie
			var arr;
			var reg = new RegExp('(^| )' +name+"=([^;]*)(;|$)");
			if(arr=document.cookie.match(reg))
				return unescape(arr[2]);
			else
				return null;
		},
		clearCookie() {//清除cookie
			this.setCookie("openid", "", 0);
		}
	}
}
export{
	cookie
};