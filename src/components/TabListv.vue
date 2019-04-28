<template>
	<div class="tab-list-one" v-bind:data-pid="onedata.id">
		<div class="tab-list-one-himg">
			<mvideo :options="playerOptions"></mvideo>
		</div>
		<div class="tab-list-one-title evno">2018中国区域农业品牌影响力</div>
		<div class="tab-list-one-date evno">来源：中国农业网</div>
	</div>
</template>

<script>
	import mvideo from '@/components/mvideo.vue'
	export default {
		data () {
			return {
				playerOptions:{
					poster:'http://51coach.com/xcxcl/images/courseimg/20181203111536685.png',
					src:'http://51coach.com/xcxcl/videos/course/20170327165100598.mp4'
				}
			}
		},
		props: {
			onedata: Object
		},
		components: {
			mvideo
		},
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
