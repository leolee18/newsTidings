<template>
	<video 
		controls 
		x5-video-player-type="h5" 
		x5-video-player-fullscreen="true" 
		x5-video-orientation="landscape"
		class="mvideo" 
		:poster="options.poster"
		:src="options.src"
	></video>
</template>

<script>
	//autoplay
	export default {
		props:['options']
	}
</script>

<style scoped>
	.mvideo{
		position:absolute;
		height:100%;
		width:100%;
		top:0;
		left:0;
		display:block;
		background-color:#000;
		z-index:0;
	}
	.mvideo::-webkit-media-controls-start-playback-button {
		opacity: 0;
		pointer-events: none;
		width: 5px;
	}
</style>
