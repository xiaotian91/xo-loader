<script>
	export default {
		name: 'ball',
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
					backgroundColor: this.rawStyle.fill[0]
				}
			}
		}
	}
</script>
<template>
	<div>	
		<div class="spinner" :style="dimension">
		  <div class="ball" :style="color"></div>
		</div>
		<div v-if="text" :style="font">{{text}}</div>
	</div>
</template>
<style>
	.spinner {
	  position: relative;
	  display: inline-block;
	}
  
	.ball {
	    width: 20px;
	    height: 20px;
	    background-color: red;
	    border-radius: 50%;
	    display: inline-block;
	    animation: motion 3s ease-in-out infinite;
	}

	@keyframes motion {

	  0% {
	    transform: translateX(0) scale(1)
	  }
	  25% {
	    transform: translateX(-50px) scale(0.3)
	  }
	  50% {
	    transform: translateX(0) scale(1)
	  }
	  75% {
	    transform: translateX(50px) scale(0.3)
	  }
	  100% {
	    transform: translateX(0) scale(1)
	  }

	}
</style>