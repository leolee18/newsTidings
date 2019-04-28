<template>
  <div @click="detClick" class="tab-list">
    <tab-listv v-for="(slide, index) in tab3Arr" :key="index" :onedata="slide" ></tab-listv>
  </div>
</template>

<script>
import TabListv from '@/components/TabListv.vue'
import {mapGetters} from 'vuex';
export default {
	data () {
		return {
		}
	},
	components: {
		TabListv
	},
	computed:{
		...mapGetters([
			'tab3Arr'
		])
	},
	mounted(){
		var self = this;
		self.$store.dispatch('setHeadText','视频专区');
		self.$store.dispatch('initTab3List',{});
	},
	methods: {
		detClick(e){
			let mTar = e.target;
			if(mTar.className === 'tab-list-one'){
				//this.$router.push({path:'/deta/'+mTar.dataset.pid});
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

