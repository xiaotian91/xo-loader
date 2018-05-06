<script>
	import * as loaders from './index';
	export default {
		name: 'xo-loader',
		render(h) {
			return h(
				loaders[this.type],
				{
					props: {
						rawStyle: {
							fill: this.color,
							w: this.size.width,
							h: this.size.height
						},
						text: this.text,
						font: this.font
					}
				}
			)
		},
		props: {
			type: {
				type: String,
				default: 'spin'
			},
			color: {
				type: Array,
				default: ['#2ecc71']
			},
			text: {
				type: String,
				default: 'loading...'
			},
			font: {
				type: Object,
				default: () => ({ fontSize: '12px', color: '#666' })
			},
			size: { 
				type: Object,
				default: () => ({ width: '28px', height: '28px', fontSize: '12px' })
			}
		}
	}
</script>