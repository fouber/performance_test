var index = 0;
var last, start = last = Date.now();
var out = process.argv[2];
var fs = require('fs');
var fd = '';

function pretty(data){
    var log = [  ];
    for(var key in data){
        log.push(key + ': ' + data[key]);
    }
    log.push();
    return log.join(' ');
}

module.exports = function(res){
    res.on('end', function(){
        fs.writeFileSync(out, fd);
    });
    res.on('data', function(d){
        var now = Date.now();
        var info = pretty({
            length: d.length,
            index: index++,
            cost: (now - last) + 'ms',
            total: (now - start) + 'ms'
        });
        fd += d.toString('utf8');
        fd += '\n\n------------------ [' + info + '] ------------------\n\n';
        console.log(info);
        last = now;
    });
};