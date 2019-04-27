import types from '../types.js'
import ser from '../../server/server';

const state={
	detaPage:null
}

const getters={
	detaPage(state){
		return state.detaPage;
	}
}

const actions={
	initDetaPage({commit,state}, param){
		commit(types.DETA_PAGE_DATA,{name:'sdfsdf',cont:'D是拉丁字母和英文字母中的第4个字母。在国际音标和汉语拼音中的意思各不相同。在网络用语中的意思为“顶”，“最顶端”预示着追求最高的最好的。表示支持的意思。在论文的参考文献标题后表示学位论文。D这个字母还用于物理学、化学、音乐'});
		// ser.mPost('all.php',{}).then((msg)=>{
		// 	//console.log(JSON.stringify(msg.cont))
		// 	if(msg.status == 'success'){
		// 		commit(types.DETA_PAGE_DATA,msg.cont);
		// 	}
		// })
	}
}
const mutations={
	[types.DETA_PAGE_DATA](state,data){
		state.detaPage=data;
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}