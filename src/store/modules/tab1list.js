import types from '../types.js'
import ser from '../../server/server';

const state={
	tab1State:0,
	tab1Pnum:0,
	tab1Arr:[]
}

const getters={
	tab1State(state){
		return state.tab1State;
	},
	tab1Arr(state){
		return state.tab1Arr;
	}
}

const actions={
	initTab1List({commit,state},param){
		let senObj = {
    		cid:19,
			pid:2,
			page:0
		}
		commit(types.TABO_STATE,1);
		ser.mPost('response.php',senObj).then((msg)=>{
			if(msg[0]){
				commit(types.INIT_TABO_LIST,msg[0]);
			}
		})
	},
	addTab1List({commit,state},param){
		let senObj = {
			cid:19,
			pid:2,
			page:0
		}
		commit(types.TABO_STATE,1);
	}
}
const mutations={
	[types.INIT_TABO_LIST](state,data){
		state.tab1Arr=data.code;
		state.tab1Arr.forEach(function(val,ind){
			val.thumb = ser.serUrl(val.thumb);
		})
		if (true) {
			state.tab1State=0;
			state.tab1Pnum += 10;
    } else {
			state.tab1State=2;
    }
	},
	[types.TABO_STATE](state,data){
		state.tab1State=data;
	},
	[types.ADD_TABO_LIST](state,data){
		//state.tab1Arr=state.listArr.concat(data);
		if (true) {
			state.tab1State=0;
			state.tab1Pnum += 10;
		} else {
			state.tab1State=2;
		}
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}