var axios   = require('axios');
var _ = require('lodash');

exports.install = function (Vue, options) {
    if(options){
        var default_options = {};
        options = _.merge(default_options, options);
        axios = axios.create(options);
    }
    Vue.axiosSetToken = function (AUTH_TOKEN) {
        axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    }
    Vue.axios = axios;
}