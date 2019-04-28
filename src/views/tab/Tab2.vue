<template>
  <div @click="detClick" class="tab-list">
    <tab-list v-for="(slide, index) in tab2Arr" :key="index" :onedata="slide" ></tab-list>
  </div>
</template>

<script>
import TabList from '@/components/TabList.vue'
import {mapGetters} from 'vuex';
export default {
	data () {
		return {
		}
	},
  components: {
    TabList
  },
	computed:{
		...mapGetters([
			'tab2Arr'
		])
	},
	mounted(){
		var self = this;
		self.$store.dispatch('setHeadText','行业动态');
		self.$store.dispatch('initTab2List',{});
	},
	methods: {
		detClick(e){
			let mTar = e.target;
			if(mTar.className === 'tab-list-one'){
				this.$router.push({path:'/deta/'+mTar.dataset.pid});
			}
		}
	}
}
</script>
<style scoped>
	.tab-list{
		position:relative;
		width: 750px;
	}
</style>
