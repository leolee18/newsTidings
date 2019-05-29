<template>
	<div class="tab-list-one" v-bind:data-pid="onedata.id">
		<img :src="onedata.thumb" class="tab-list-one-himg evno" />
		<div class="tab-list-one-title evno">{{onedata.title}}</div>
		<div class="tab-list-one-cont evno">{{onedata.description}}</div>
		<div class="tab-list-one-date evno">来源：{{onedata.keyword?onedata.keyword:'麻姑集团'}}<span class="tab-mar-left">日期：{{dateFormat(onedata.addtime)}}</span></div>
	</div>
</template>

<script>
	export default {
		props: {
			onedata: Object
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
				return year+"/"+month+"/"+day;
			}
		}
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
		font-size: 24px;
		color: #333;
		line-height: 50px;
		margin-top: 20px;
	}
	.tab-list-one-cont{
		position: relative;
		font-size:14px;
		color: #777777;
		line-height: 30px;
		margin-top: 10px;
	}
	.tab-list-one-date{
		position: relative;
		font-size:12px;
		color: #cccccc;
		line-height: 30px;
		margin-top: 20px;
	}
	.tab-mar-left{
		margin-left: 50px;
	}
</style>
