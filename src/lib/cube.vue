<script>
	export default {
		name: 'cube',
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
			loader() {
				return {
					width: this.rawStyle.w, 
					height: this.rawStyle.h,
					borderColor: this.rawStyle.fill[0]
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
		<div class="xo-loader" :style="loader">
			<div :style="color" class="xo-loader-inner"></div>
		</div>
		<div v-if="text" :style="font">{{text}}</div>
	</div>
</template>
<style scoped lang="scss">
.xo-loader {
  display: inline-block;
  position: relative;
  border: 4px solid #f1c40f;
  animation: loader 2s infinite ease;
  margin-bottom: 15px;
}

.xo-loader-inner {
  vertical-align: top;
  display: inline-block;
  width: 100%;
  background-color: #f1c40f;
  animation: loader-inner 2s infinite ease-in;
}

@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  
  25% {
    transform: rotate(180deg);
  }
  
  50% {
    transform: rotate(180deg);
  }
  
  75% {
    transform: rotate(360deg);
  }
  
  100% {
    transform: rotate(360deg);
  }
}

@keyframes loader-inner {
  0% {
    height: 0%;
  }
  
  25% {
    height: 0%;
  }
  
  50% {
    height: 100%;
  }
  
  75% {
    height: 100%;
  }
  
  100% {
    height: 0%;
  }
}
</style>