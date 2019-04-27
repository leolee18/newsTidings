<template>
  <div class="home">
		<div class="home-title">
			<img src="../assets/logo.png" class="home-title-img">
			<span class="home-title-text">{{headText}}</span>
		</div>
		<div class="tab-all">
			<div class="tab-all-one" :class="{'tab-all-one-tc':tab1class}" v-on:click="tab1fun">1枯士大夫</div>
			<div class="tab-all-one" :class="{'tab-all-one-tc':tab2class}" v-on:click="tab2fun">2枯士大夫</div>
			<div class="tab-all-one" :class="{'tab-all-one-tc':tab3class}" v-on:click="tab3fun">3枯士大夫</div>
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
	
	.tab-all{
		position: relative;
		width: 100%;
		height: 100px;
		display: flex;
		justify-content:space-around;
		align-items: center;
		background-color: cadetblue;
	}
	.tab-all-one{
		width: 100px;
		height: 50px;
		font-size: 20px;
		line-height:50px;
		text-align: center;
		color:#9faebf;
		background-color: #0079FF;
	}
	.tab-all-one-tc{
		color:#0079ff;
		background-color: #42B983;
	}
	
	
	.load-img{
		display: block;
		width: 20%;
	}
	.load-text{
		display: block;
		width: 100%;
		font-size: 35px;
		margin-top: 50px;
		color: #666;
		text-align: center;
	}
</style>