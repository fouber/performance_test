var http = require('http');

var req = http.get({
    hostname: 'hotvideo.cc',
    path: '/mobile/4.3.2/index.html?uc_param_str=frdnsnpfvecplabtbmntnwpvsslibieisiniprnaos',
    headers: {
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4'
    }
}, require('./log.js'));