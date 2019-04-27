<template>
  <div class=".deta-all">
    <div class="home-title">
    	<img src="../assets/logo.png" class="home-title-img">
    	<span class="home-title-text">{{headText}}</span>
    </div>
		<div class="deta-cont">{{detaPage && detaPage.cont}}<img src="../assets/logo.png"></div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
	
export default {
	computed:{
		...mapGetters([
			'headText',
			'detaPage'
		])
	},
	mounted(){
		var self = this;
		self.$store.dispatch('setHeadText','详细信息');
		self.$store.dispatch('initDetaPage',{});
	}
}
</script>

<style scoped>
	.deta-all{
		position:relative;
		width: 750px;
		
		background-color: #fff;
	}
	.home-title{
		position:relative;
		width: 750px;
		height: 50px;
		overflow: hidden;
		background-color: #42B983;
	}
	.home-title-img{
		position:absolute;
		display: block;
		width: 750px;
		height: 50px;
		top:0;
		z-index: 0;
	}
	.home-title-text{
		position:absolute;
		display: block;
		width: 750px;
		height: 50px;
		top:0;
		z-index: 2;
		font-size: 40px;
		color: #3E3A39;
		line-height: 50px;
		text-align: center;
		font-weight: bold;
	}
	
	.deta-cont{
		position:relative;
		width: 750px;
		font-size: 16px;
		color: #3E3A39;
		line-height: 30px;
	}
	.deta-cont img{
		max-width: 100%;
	}
	
</style>
