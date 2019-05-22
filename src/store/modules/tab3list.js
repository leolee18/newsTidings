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
		commit(types.INIT_TABS_LIST,[
			{keyword:'麻姑集团',title:'麻姑集团专题片',poster:'/assets/images/video-poster-1.jpg',src:'/1.mp4'},
			{keyword:'央视网',title:'2019年初央视广告片（新闻30分）',poster:'/assets/images/video-poster-2.jpg',src:'/2.mp4'},
			{keyword:'央视网',title:'2018年初央视广告片',poster:'/assets/images/video-poster-3.jpg',src:'/3.mp4'},
			{keyword:'江西公共农业频道',title:'稻花香里电视专题片',poster:'/assets/images/video-poster-4.jpg',src:'/4.mp4'},
			{keyword:'麻姑集团',title:'麻姑米宣传片',poster:'/wap/images/1-1.png',src:'/5.mp4'},
			{keyword:'麻姑集团',title:'麻姑米 传千年沙画',poster:'/wap/images/1-2.png',src:'/6.mp4'}
		]);
	},
	addTab3List({commit,state},param){
		let senObj = {}
		commit(types.TABS_STATE,1);
	}
}
const mutations={
	[types.INIT_TABS_LIST](state,data){
		state.tab3Arr=data;
		state.tab3Arr.forEach(function(val,ind){
			val.poster = ser.serUrl(val.poster);
			val.src = ser.serUrl(val.src);
		})
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