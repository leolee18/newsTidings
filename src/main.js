import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
	//if(store)store.dispatch('wxSetShare',{link:to.path});
  next();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
