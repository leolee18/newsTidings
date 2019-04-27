<template>
  <div class="deta-all">
    <div class="home-title">
    	<img src="@/assets/head_tit_bg.jpg" class="home-title-img">
    	<span class="home-title-text">{{headText}}</span>
    </div>
	<div class="deta-cont">
		<div class="deta-cont-title">集团公告公告公告公告公告公告公告公告</div>
		<div class="deta-cont-date">来源：麻古集团<span class="deta-cont-dleft">发布时间：2014-08-25</span></div>
		<p class="deta-p">我们“质量为生命，以信誉求生存”，为稳定“麻姑稻”品质、保障原材料供应,公司始终坚持以农民为依托,实行农业产业化经营,并采取“公司+基地+农户”的操作模式,坚持以“科技为动力、利益为组带、公司联基地、共同求发展”为原则,实施订单农业。
2004年选择确定南城县徐家、万坊、洪门、浔溪、沙洲、建昌镇、龙湖、里塔、天井源、新丰街10个乡镇建立17个绿色食品“麻姑稻”生产种植基地,基地种植面积为2万余亩,与6328户农民签订粮食种植订单收购合同,形成了产供销一条龙的农业产业化经营格局。
为了增强企业发展后劲,公司联结带动了“南城县徐家粮食种植农业合作社"、“"南城县洪门粮食种植专业合作社、“南城县麻姑粮食种植专业合作社”三个合作社,并形成了紧密合作的联合共同体,促进了农业增效,农民增收,企业发展。<img src="@/assets/head_img.jpg" class="home-title-img">
同时，大米业务建立现代化标准实验室，配备原子吸收仪、原子荧光仪、直链淀粉仪等先进的设备，有效加强了食品安全的管控；改进大米加工工艺流程，在原有工艺基础上额外增加色选、抛光设备，进一步提高产品品质。截至目前，分别获得HACCP、 ISO9001、ISO22000及良好农业规范</p>
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
