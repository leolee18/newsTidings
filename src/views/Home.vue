<template>
	<div class="home">
		<div class="home-title">
			<img src="@/assets/head_tit_bg.jpg" class="home-title-img">
			<span class="home-title-text">{{headText}}</span>
		</div>
		<div class="tab-all">
			<div class="tab-all-one" :class="{'tab-all-one-tc':tab1class}" v-on:click="tab1fun">企业资讯</div>
			<div class="tab-all-one" :class="{'tab-all-one-tc':tab2class}" v-on:click="tab2fun">行业动态</div>
			<div class="tab-all-one" :class="{'tab-all-one-tc':tab3class}" v-on:click="tab3fun">视频专区</div>
		</div>
		<router-view/>
	</div>
</template>

<script>
import {mapGetters} from 'vuex';
	
export default {
	data () {
		return {
			tab1class:false,
			tab2class:false,
			tab3class:false
		}
	},
	computed:{
		...mapGetters([
			'headText'
		])
	},
	mounted(){
		var self = this;
		self.updataTab(this.$route.path);
	},
	methods: {
		tab1fun: function () {
			this.$router.push({path:'/tab1'});
			this.updataTab('/tab1');
		},
		tab2fun: function () {
			this.$router.push({path:'/tab2'});
			this.updataTab('/tab2');
		},
		tab3fun: function () {
			this.$router.push({path:'/tab3'});
			this.updataTab('/tab3');
		},
		updataTab(mPath){
			this.tab1class = false;
			this.tab2class = false;
			this.tab3class = false;
			if(mPath === '/tab1'){
				this.tab1class = true;
			}
			if(mPath === '/tab2'){
				this.tab2class = true;
			}
			if(mPath === '/tab3'){
				this.tab3class = true;
			}
		}
	}
}
</script>

<style scoped>
	.home{
		position:relative;
		width: 750px;
	}
	.home-title{
		position:relative;
		width: 750px;
		height: 75px;
		overflow: hidden;
	}
	.home-title-img{
		position:absolute;
		display: block;
		width: 750px;
		height:75px;
		top:0;
		z-index: 0;
	}
	.home-title-text{
		position:absolute;
		display: block;
		width: 750px;
		height: 75px;
		top:0;
		z-index: 0;
		font-size: 34px;
		color: #666666;
		line-height: 75px;
		text-align: center;
	}
	
	.tab-all{
		position: relative;
		width: 100%;
		height: 110px;
		margin-top: 15px;
		display: flex;
		justify-content:space-around;
		align-items: center;
	}
	.tab-all-one{
		width: 180px;
		height: 60px;
		font-size: 20px;
		line-height:60px;
		text-align: center;
		color:#333;
		font-weight: bold;
		border-radius: 10px;
		background-color: #eee;
	}
	.tab-all-one-tc{
		color:#fff;
		background-color: #00a443;
	}
	
</style>