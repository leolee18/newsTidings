<template>
	<div class="tab-list-one" v-bind:data-pid="onedata.id">
		<div class="tab-list-one-himg">
			<mvideo :options="onedata"></mvideo>
		</div>
		<div class="tab-list-one-title evno">{{onedata.title}}</div>
		<div class="tab-list-one-date evno">来源：{{onedata.keyword?onedata.keyword:'麻姑集团'}}</div>
	</div>
</template>

<script>
	import mvideo from '@/components/mvideo.vue'
	export default {
		data () {
			return {
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
