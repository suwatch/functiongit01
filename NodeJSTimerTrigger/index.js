var ipconfig = require('./ipconfig.js');

module.exports = function (context, workItem) {
    var timeStamp = new Date().toISOString();
    context.log('TimerTrigger ' + timeStamp + ' handled by ' + ipconfig.IPv4);
    context.done(null, null);
}