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
    		action: 'list'
    }
		commit(types.TABT_STATE,1);
		
		commit(types.INIT_TABT_LIST,[{name:'大是大非',id:'6'},{name:'工在',id:'7'},{name:'脸有',id:'8'},{name:'于地',id:'9'},{name:'在士大夫',id:'10'}]);
		// ser.mPost('all.php',{}).then((msg)=>{
		// 	if(msg.status == 'success'){
		// 		commit(types.INIT_TABT_LIST,msg.cont);
		// 	}
		// })
	},
	addTab2List({commit,state},param){
		let senObj = {
			action: 'list',
		}
		commit(types.TABT_STATE,1);
		// ser.mPost('all.php',{}).then((msg)=>{
		// 	if(msg.status == 'success'){
		// 		commit(types.ADD_TABT_LIST,msg.cont);
		// 	}
		// })
	}
}
const mutations={
	[types.INIT_TABT_LIST](state,data){
		state.tab2Arr=data;
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