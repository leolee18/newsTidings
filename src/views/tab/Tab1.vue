<template>
  <div @click="detClick" class="tab-list">
    <tab-list v-for="(slide, index) in tab1Arr" :key="index" :onedata="slide" ></tab-list>
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
			'tab1Arr'
		])
	},
	mounted(){
		var self = this;
		self.$store.dispatch('initTab1List',{});
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