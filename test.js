var Vue = require('vue');
var VueAxios = require('./index');

Vue.use(VueAxios,{baseURL: 'http://localhost:3030'});
Vue.axiosSetToken('xxxxxxxxxx')
Vue.axios('/messages').then(function (res) {
    console.log(res);
   // console.log(res.data);
}).catch(function (err) {
    console.log(err);
})