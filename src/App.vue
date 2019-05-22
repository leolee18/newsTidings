<template>
  <div class="body_all">
	<img :src="appHead" class="head_img" @click="hadClick" />
    <router-view/>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
	
export default {
	data () {
		return {
			appHead:require('@/assets/head_img.jpg')
		}
	},
	computed:{
		...mapGetters([
			'headImg',
			'headLink'
		])
	},
	watch:{
		headImg(val){
			if(val && val != ''){
				this.appHead = val;
			}
		}
	},
	mounted(){
		var self = this;
		if(self.headImg && self.headImg != ''){
			this.appHead = self.headImg;
		}
	},
	methods: {
		hadClick(e){
			if(this.headLink != ''){
				window.location.href = this.headLink;
			}
		}
	}
}
</script>
<style>
	body{
		position:absolute;
		width:100%;
		height:100%;
		padding:0;
		margin:0;
		font-family:'Avenir', Helvetica, Arial, sans-serif;
		font-size:13px;
		color: #3E3A39;
		background-color:#fff;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	.body_all{
		position:relative;
		width:750px;
		height:auto;
		min-height:100%;
		margin:0 auto;
		background-color:#fff;
	}
	.all-img{
		position: relative;
		width: 100%;
		display: block;
		margin: 10px auto;
	}
	.evno{
		pointer-events: none;
	}
	.acto:active{
		opacity: 0.9;
	}
	.actob:active{
		background-color: rgba(0, 0, 0, 0.1);
	}
	
	.head_img{
		position:relative;
		display: block;
		width:750px;
		height:320px;
		background-color:#ccc;
	}
	
</style>
