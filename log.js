var index = 0;
var last, start = last = Date.now();
var out = process.argv[2];
var fs = require('fs');
var fd = fs.openSync(out, 'a');

function pretty(data){
    var log = [ '\n\n------------------ [' ];
    for(var key in data){
        log.push(key + ': ' + data[key]);
    }
    log.push('] ------------------\n\n');
    return log.join(' ');
}

module.exports = function(res){
    res.on('data', function(d){
        var now = Date.now();
        var info = pretty({
            length: d.length,
            index: index++,
            cost: (now - last) + 'ms',
            total: (now - start) + 'ms'
        });
        console.log(info);
        fs.writeSync(fd, d.toString('utf8'));
        fs.writeSync(fd, info);
        last = now;
    });
};