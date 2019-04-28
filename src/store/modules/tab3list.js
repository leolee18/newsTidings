import types from '../types.js'
import ser from '../../server/server';

const state={
	tab3State:0,
	tab3Pnum:0,
	tab3Arr:[]
}

const getters={
	tab3State(state){
		return state.tab3State;
	},
	tab3Arr(state){
		return state.tab3Arr;
	}
}

const actions={
	initTab3List({commit,state},param){
		let senObj = {}
		commit(types.TABS_STATE,1);
		commit(types.INIT_TABS_LIST,[{name:'大是大非',id:'11'},{name:'工在',id:'12'},{name:'脸有',id:'13'},{name:'于地',id:'14'},{name:'在士大夫',id:'15'}]);
	},
	addTab3List({commit,state},param){
		let senObj = {}
		commit(types.TABS_STATE,1);
	}
}
const mutations={
	[types.INIT_TABS_LIST](state,data){
		state.tab3Arr=data;
		if (true) {
			state.tab3State=0;
			state.tab3Pnum += 10;
    } else {
			state.tab3State=2;
    }
	},
	[types.TABS_STATE](state,data){
		state.tab3State=data;
	},
	[types.ADD_TABS_LIST](state,data){
		//state.tab3Arr=state.listArr.concat(data);
		if (true) {
			state.tab3State=0;
			state.tab3Pnum += 10;
		} else {
			state.tab3State=2;
		}
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}