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
		commit(types.DETA_PAGE_INIT,'');
		ser.mPost('response.php',{id:param.id,pid:4}).then((msg)=>{
			if(msg[0].code[0]){
				commit(types.DETA_PAGE_DATA,msg[0].code[0]);
			}
		})
	}
}
const mutations={
	[types.DETA_PAGE_INIT](state,data){
		state.detaPage=null;
	},
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