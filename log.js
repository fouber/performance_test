var index = 0;
var last, start = last = Date.now();

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
        var info = {
            length: d.length,
            index: index++,
            cost: (now - last) + 'ms',
            total: (now - start) + 'ms'
        };
        process.stdout.write(d);
        process.stdout.write(pretty(info));
        last = now;
    });
};