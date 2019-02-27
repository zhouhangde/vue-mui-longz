/**
 * Author BySlin
 * CreateDate 2016/6/4
 * Email aw2292735470@gmail.com
 */
(function (window) {
	//严格模式
	"use strict";
	window.$ByLz = {};
	
	/* muiAjax传递json的get请求 */
	$ByLz.muiAjax = function(url,callback){
		mui.ajax(url,{
			dataType:'json',//服务器返回json格式数据
			type:'get',//HTTP请求类型
			timeout:20000,//超时时间设置为5秒；
			success:function(data){//服务器返回响应
				console.log("1111");
			   callback(data);
		    }
		})
	}
	
	/* muiAjax传递json的get请求同步 */
	$ByLz.muiAjaxSync = function(url,callback){
		mui.ajax(url,{
			dataType:'json',//服务器返回json格式数据
			type:'get',//HTTP请求类型
			async:false,
			timeout:20000,//超时时间设置为5秒；
			success:function(data){//服务器返回响应
			   callback(data);
		    }
		})
	}
	
	// mui截取get请求后的参数列表,name为删选的请求key
	$ByLz.getUrlParam = function(url,callback){
		var paramList;
		
		 // 如果链接没有参数，或者链接中不存在我们要获取的参数，直接返回空，没有时name传null
	    if (location.href.indexOf("?") == -1) {
		    paramList = '';
			callback(paramList);
			return;
	    }else{
		    // 获取链接中参数部分
		    var queryString = location.href.substring(location.href.indexOf("?") + 1);
// 		    queryString = decodeURI(queryString);
		    //decodeURI 解码
		    //encodeURI 转码
		
		    // 分离参数对 ?key=value&key2=value2
		    var parameters = queryString.split("&");
		
		
		    var pos, paraName, paraValue;
			var paramArray=[];//创建map集合
			var map = {};
		    for (var i = 0; i < parameters.length; i++) {
			    map = {};
		        // 获取等号位置
		        pos = parameters[i].indexOf('=');
		        if (pos == -1) { continue; }
		
		        // 获取name 和 value
		        paraName = parameters[i].substring(0, pos);
		        paraValue = parameters[i].substring(pos + 1);
		
				/* 获取等号后面的值 */
		        paramList = unescape(paraValue.replace(/\+/g, " "));
		        map[paraName] = paramList;
		        paramArray.push(map);
		    }
		    callback(paramArray);
		    return;
	    }
	   
	}	
	
})(window);