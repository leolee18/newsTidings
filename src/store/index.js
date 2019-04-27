import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={}
const getters={}
const actions={}
const mutations={}

import headData from './modules/headData'
import tab1list from './modules/tab1list'
import tab2list from './modules/tab2list'
import tab3list from './modules/tab3list'
import detaPage from './modules/detaPage'

export default new Vuex.Store({
  state,
	getters,
  mutations,
  actions,
	modules:{
		headData,
		tab1list,
		tab2list,
		tab3list,
		detaPage
	}
})
