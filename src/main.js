import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App)
}).$mount('#app');

// window.addEventListener('message', (e) => {
// 	if (e.data && typeof e.data === 'string' && e.data.match(/webpackHotUpdate/)) {
// 		console.log('hot reload happened');
// 		console.clear();
// 	}
// });

if (module.hot) {
	module.hot.accept(); // already had this init code

	module.hot.addStatusHandler((status) => {
		if (status === 'prepare') console.clear();
	});
}
