<template>
  <div class="deta-all">
    <div class="home-title">
    	<img src="@/assets/head_tit_bg.jpg" class="home-title-img">
    	<span class="home-title-text">{{headText}}</span>
    </div>
	<div class="deta-cont">
		<div class="deta-cont-title">{{detaPage && detaPage.title}}</div>
		<div class="deta-cont-date">来源：{{detaPage && detaPage.keyword?detaPage.keyword:'麻姑集团'}}<span class="deta-cont-dleft">发布时间：{{dateFormat(detaPage && detaPage.addtime)}}</span></div>
		<p class="deta-p" v-html="detaPage && detaPage.content"></p>
	</div>
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
		self.$store.dispatch('setHeadText','新闻中心');
		
		let mId = self.$route.params.id;
		self.$store.dispatch('initDetaPage',{id:mId});
	},
	methods: {
		dateFormat(mTime) {
			let date=new Date(mTime);
			let year=date.getFullYear();
			let month= date.getMonth()+1<10 ? "0"+(date.getMonth()+1) : date.getMonth()+1;
			let day=date.getDate()<10 ? "0"+date.getDate() : date.getDate();
			let hours=date.getHours()<10 ? "0"+date.getHours() : date.getHours();
			let minutes=date.getMinutes()<10 ? "0"+date.getMinutes() : date.getMinutes();
			let seconds=date.getSeconds()<10 ? "0"+date.getSeconds() : date.getSeconds();
			// 拼接
			return year+"-"+month+"-"+day;
		}
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
		z-index: 2;
		font-size: 34px;
		color: #666666;
		line-height: 75px;
		text-align: center;
	}
	
	.deta-cont{
		position:relative;
		width: 750px;
		padding: 40px;
		box-sizing: border-box;
		font-size: 16px;
		color: #666;
		line-height: 30px;
	}
	.deta-cont img{
		position: relative;
		display: block;
		width: 100%;
		height: auto;
	}
	.deta-cont-title{
		position: relative;
		max-height: 100px;
		font-size: 30px;
		color: #333;
		text-align: center;
		line-height: 50px;
	}
	.deta-cont-date{
		position: relative;
		font-size:16px;
		color: #cccccc;
		text-align: center;
		line-height: 50px;
	}
	.deta-cont-dleft{
		margin-left: 30px;
	}
	.deta-p{
		position: relative;
		margin-top: 20px;
	}
</style>
