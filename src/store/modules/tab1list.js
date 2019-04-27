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
    		action: 'list'
    }
		commit(types.TABO_STATE,1);
		
		commit(types.INIT_TABO_LIST,[{name:'大是大非',id:'1'},{name:'工在',id:'2'},{name:'脸有',id:'3'},{name:'于地',id:'4'},{name:'在士大夫',id:'5'}]);
		// ser.mPost('all.php',{}).then((msg)=>{
		// 	if(msg.status == 'success'){
		// 		commit(types.INIT_TABO_LIST,msg.cont);
		// 	}
		// })
	},
	addTab1List({commit,state},param){
		let senObj = {
			action: 'list',
		}
		commit(types.TABO_STATE,1);
		// ser.mPost('all.php',{}).then((msg)=>{
		// 	if(msg.status == 'success'){
		// 		commit(types.ADD_TABO_LIST,msg.cont);
		// 	}
		// })
	}
}
const mutations={
	[types.INIT_TABO_LIST](state,data){
		state.tab1Arr=data;
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