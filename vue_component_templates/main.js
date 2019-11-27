import Vue from 'vue';
import App from './App.vue';

console.time('mount');
var app = new Vue({
    render: h => h(App),
}).$mount('#app');
console.timeEnd('mount');