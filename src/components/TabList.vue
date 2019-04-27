<template>
  <div class="tab-list-one" v-bind:data-pid="onedata.id">
	{{onedata.name+'___'+onedata.id}}
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
		height: 400px;
		margin-bottom: 10px;
		background-color: #FFFFFF;
	}
</style>
