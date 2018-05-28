<script>
	export default {
		name: 'pulse',
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
			color1() {
				return {		
					border: '2px solid' + this.rawStyle.fill[0]
				}
			},
			color2() {
				return {		
					border: '2px solid' + this.rawStyle.fill[1]
				}
			}
		}
	}
</script>
<template>
	<div>	
		<div class="loader" :style="dimension">
		  <div :style="color1"></div>
		  <div :style="color2"></div>
		</div>
		<div v-if="text" :style="font">{{text}}</div>
	</div>
</template>
<style lang="scss" scoped>

	.loader {
	  position: relative;
	  display: inline-block;

	  & > div {
		content: '';
	    border-radius: 50%;
	    height: 100%;
	    width: 100%;
	    position: absolute;
	    animation: pulse 1s ease-out;
	    animation-iteration-count: infinite;
	    opacity: 0;
	  }

	  & > div:first-child {
	  	animation-delay: .3s;
	  }
	}

	@keyframes pulse {
	  0% {
	    transform: scale(0.1,.1);
	    opacity: 0;
	  }
	  50% {
	    opacity: 1;
	  } 
	  100% {
	    transform: scale(1.2,1.2);
	    opacity: 0;
	  }

	}
  
</style>