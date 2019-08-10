const axios = require('axios');

function serAdd(addres){
	var serUrl = 'http://'+window.location.host+'/';
	var serInter = 'https://www.jxmgjt.com/magu_api/';
	
	var kc = '';
	var returnStr = serUrl;
	switch (addres){
		case 'response.php':
			returnStr = serInter+kc+addres;
			break;	
		case 'local':
			returnStr = serUrl;
			break;	
		default:
			returnStr = serInter;
			break;
	}
	return returnStr;
}
function loadDataFun(urlStr,mObj,sucFun,errFun){
	var form_data = new FormData();
	for ( var key in mObj) {
	    form_data.append(key, mObj[key]);
	}
	axios.post(serAdd(urlStr), form_data,{headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
  }}).then(function (response) {
    	if(typeof sucFun == 'function')sucFun(response.data);
  }).catch(function (response) {
    	if(typeof errFun == 'function'){
				errFun(response.data);
			}else{
				alert("网络出现故障，请重试");
			}
  });
}
function mPost(urlStr,mObj){
	var form_data = new FormData();
	for ( var key in mObj) {
	  form_data.append(key, mObj[key]);
	}
	return axios.post(
		serAdd(urlStr),
		form_data,
		{headers:{'Content-Type': 'application/x-www-form-urlencoded'}},
	).then((response)=>{return response.data});
}

function serUrl(url){
	var myUrl = "";
	if(url != null && url != undefined){
		myUrl = url;
	}
	if(myUrl.length > 5){
		var myType = url.substr(0,5);
    if (myType != "http:" && myType != "wxfil" && myType != "https"){
			myUrl = 'http://www.jxmgjt.com' + myUrl;
		}
	}
	return myUrl;
}


module.exports = {
	serAdd:serAdd,
	mPost:mPost,
	loadDataFun:loadDataFun,
	serUrl:serUrl
}