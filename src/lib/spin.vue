<script>
	export default {
		name: 'spin',
		props: {
			rawStyle: {
				type: Object
			},
			text: {
				type: String
			},
			font: {
				type: Object
			}
		},
		computed: {
			dimension() {
				return {
					width: this.rawStyle.w, 
					height: this.rawStyle.h
				}
			},
			color() {
				return {		
					borderLeftColor: this.rawStyle.fill[0],
					borderTopColor: this.rawStyle.fill[0], 
				}
			}
		}
	}
</script>
<template>
	<div>	
		<div class="xo-loader xo-loader-spin" :style="dimension">
			<div :style="color"></div>
		</div>
		<div v-if="text" :style="font">{{text}}</div>
	</div>
</template>
<style scoped lang="scss">
	$green: #2ecc71;
	.xo-loader {
		display: inline-block;
  		vertical-align: middle;
  		position: relative;
  		font-size: 10px;
	}
	.xo-loader.xo-loader-spin {
		width: 2.8em;
  		height: 2.8em;
  		border-radius: 50%;
		& > div {
			content: "";
		    position: absolute;
		    top: 0;
		    left: 0;
		    right: 0;
		    bottom: 0;
		    border-radius: 50%;
		    border: 3px solid transparent;
		    border-left-color: $green;
		    border-top-color: $green;
		    animation: spin 1.2s infinite ease-in-out;
		}
	}
	@keyframes spin {	
	  0% {
	    transform: rotate(0deg);
	  }
	  100% {
	    transform: rotate(360deg);
	   }
	}
</style>