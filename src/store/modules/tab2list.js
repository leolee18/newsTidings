import types from '../types.js'
import ser from '../../server/server';

const state={
	tab2State:0,
	tab2Pnum:0,
	tab2Arr:[]
}

const getters={
	tab2State(state){
		return state.tab2State;
	},
	tab2Arr(state){
		return state.tab2Arr;
	}
}

const actions={
	initTab2List({commit,state},param){
		let senObj = {
			cid:20,
			pid:2,
			page:0
		}
		commit(types.TABT_STATE,1);
		ser.mPost('response.php',senObj).then((msg)=>{
			if(msg[0]){
				commit(types.INIT_TABT_LIST,msg[0]);
			}
		})
	},
	addTab2List({commit,state},param){
		let senObj = {
			cid:20,
			pid:2,
			page:0
		}
		commit(types.TABT_STATE,1);
	}
}
const mutations={
	[types.INIT_TABT_LIST](state,data){
		state.tab2Arr=data.code;
		state.tab2Arr.forEach(function(val,ind){
			val.thumb = ser.serUrl(val.thumb);
		})
		if (true) {
			state.tab2State=0;
			state.tab2Pnum += 10;
		} else {
			state.tab2State=2;
		}
	},
	[types.TABT_STATE](state,data){
		state.tab2State=data;
	},
	[types.ADD_TABT_LIST](state,data){
		//state.tab2Arr=state.listArr.concat(data);
		if (true) {
			state.tab2State=0;
			state.tab2Pnum += 10;
		} else {
			state.tab2State=2;
		}
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}