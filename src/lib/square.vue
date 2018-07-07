<script>
	export default {
		name: 'square',
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
					height: this.rawStyle.h
				}
			}
		}
	}
</script>
<template>
	<div>	
		<div class="xo-loader xo-loader-square" :style="loader"></div>
		<div v-if="text" :style="font">{{text}}</div>
	</div>
</template>
<style scoped lang="scss">
$yellow: #f1c40f;
$blue: #3498db;
$green: #2ecc71;
$tomato: tomato;
.xo-loader {
  display: inline-block;
  vertical-align: middle;
  position: relative;
  margin-bottom: 15px;
}

.xo-loader-square {
  border: 3px solid rgba(0,0,0,0.2); 
  //border-radius: 50%
  transform: rotate(45deg);
  animation: square 2s infinite linear;
}

@keyframes square {
  16% {
    transform: rotate(45deg); 
    border-top-color: rgba(0,0,0,0.2); 
  }
     
  32% {
    border-left-color: rgba(0,0,0,0.2);
    border-top-color: $tomato;
    border-right-color: rgba(0,0,0,0.2);
  }
    
  48% {
    border-top-color: rgba(0,0,0,0.2);
    border-right-color: $blue;
    border-bottom-color: rgba(0,0,0,0.2);
  }
    
  64% {
    transform: rotate(45deg) scale(0.8);
    border-right-color: rgba(0,0,0,0.2);
    border-bottom-color: $yellow;
    border-left-color: rgba(0,0,0,0.2);
  }
    
  80% {
    border-bottom-color: rgba(0,0,0,0.2);
    border-left-color: $green;
    border-top-color: rgba(0,0,0,0.2);
  }
    
  100% {
    transform: rotate(45deg);
    border-left-color: rgba(0,0,0,0.2);
  }
}
  
</style>