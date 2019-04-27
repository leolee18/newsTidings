<template>
	<div class="tab-list-one" v-bind:data-pid="onedata.id">
		<img src="../assets/head_img.jpg" class="tab-list-one-himg evno" />
		<div class="tab-list-one-title evno">2018中国区域农业品牌影响力排行榜发布，多个芒种主创品牌榜上有名</div>
		<div class="tab-list-one-cont evno">芒种团队曾参与打造的许多区域公用品牌亮相排行榜， 丽水山耕 摘获区域农业形象品牌桂冠， 天赋河套 排行第二、 聊胜一筹! 、 天生云阳 、 毕节珍好 也榜上有名，排行前十。 庆安品牌凝聚共识，助力乡村振兴，未来5—10年，将是中国区域农业品牌发展的黄金时期，一批“中写完.</div>
		<div class="tab-list-one-date evno">来源：中国农业网<span class="tab-mar-left">日期：2019/03/15</span></div>
	</div>
</template>

<script>
	export default {
		props: {
			onedata: Object
		}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.tab-list-one{
		position: relative;
		width: 100%;
		padding: 30px 40px 40px;
		border-bottom: 8px solid #eee;
		box-sizing: border-box;
	}
	.tab-list-one-himg{
		position: relative;
		display: block;
		width: 670px;
		height: 340px;
	}
	.tab-list-one-title{
		position: relative;
		max-height: 100px;
		font-size: 30px;
		color: #333;
		line-height: 50px;
		margin-top: 20px;
	}
	.tab-list-one-cont{
		position: relative;
		font-size:18px;
		color: #777777;
		line-height: 30px;
		margin-top: 10px;
	}
	.tab-list-one-date{
		position: relative;
		font-size:16px;
		color: #cccccc;
		line-height: 30px;
		margin-top: 20px;
	}
	.tab-mar-left{
		margin-left: 50px;
	}
</style>
