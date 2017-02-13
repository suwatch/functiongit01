var ipconfig = require('./ipconfig.js');

module.exports = function (context, req) {
    var timeStamp = new Date().toISOString();
    context.log('HttpTrigger ' + timeStamp + ' handled by ' + ipconfig.IPv4);
    context.done(null, null);
}