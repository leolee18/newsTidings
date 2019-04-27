import types from '../types.js'

const state={
	headImg:'',
	headLink:'',
	headText:'测试'
}

const getters={
	headImg(state){
		return state.headImg;
	},
	headLink(state){
		return state.headLink;
	},
	headText(state){
		return state.headText;
	}
}

const actions={
	setHeadImg({commit,state}, param){
		commit(types.HEAD_IMG,param);
	},
	setHeadLink({commit,state}, param){
		commit(types.HEAD_LINK,param);
	},
	setHeadText({commit,state}, param){
		commit(types.HEAD_TEXT,param);
	}
}
const mutations={
	[types.HEAD_IMG](state,data){
		state.headImg = data;
	},
	[types.HEAD_LINK](state,data){
		state.headLink = data;
	},
	[types.HEAD_TEXT](state,data){
		state.headText = data;
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}