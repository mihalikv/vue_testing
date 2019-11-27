import Vue from 'vue';
import HugeComponent from './HugeComponent';

console.time('mount');
var app = new Vue({
    el: '#app',
    components: {
        HugeComponent
    },
    data: {
        message: 'Hello Vue!'
    }
});
console.timeEnd('mount');