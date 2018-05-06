import Vue from 'vue';
import AppView from './App.vue';

let app = new Vue({
	render: h => h(AppView)
}).$mount('#app');