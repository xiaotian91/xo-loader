<script>
	export default {
		name: 'dot',
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
			bound() {
				return {
					width: this.rawStyle.w, 
					height: this.rawStyle.h
				}
			},
			dot() {	
				var wIndex = this.rawStyle.w.indexOf('px');
				var hIndex = this.rawStyle.h.indexOf('px');
				var w = this.rawStyle.w.substring(0, wIndex) - 6;
				var h = this.rawStyle.h.substring(0, hIndex) - 6;
				return {
					width: Math.floor(w / 3) + 'px',
					height: Math.floor(h / 3) + 'px',		
					backgroundColor: this.rawStyle.fill[0]
				}
			}
		}
	}
</script>
<template>
	<div>	
		<div class="spinner" :style="bound">
		  <div class="dot" :style="dot"></div><!--
		  --><div class="dot" :style="dot"></div><!--
		  --><div class="dot" :style="dot"></div>
		</div>
		<div v-if="text" :style="font">{{text}}</div>
	</div>
</template>
<style scoped>
	.spinner {
	  position: relative;
	  display: inline-block;
	  margin-bottom: 15px;
	}
  
	.dot {
	    display: inline-block;
	    width: 15px;
	    height: 15px;
	    margin-right: 2px;
	    border-radius: 50%;
	    background-color: #4b9cdb;
	}

	.spinner .dot:nth-last-child(1) {animation: loading .6s .1s linear infinite;}
	.spinner .dot:nth-last-child(2) {animation: loading .6s .2s linear infinite;}
	.spinner .dot:nth-last-child(3) {animation: loading .6s .3s linear infinite;}

	@keyframes loading {
	    0 {transform: translate(0,0);}
	    50% {transform: translate(0,15px);}
	    100% {transform: translate(0,0);}
	}
</style>