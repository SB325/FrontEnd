const EventEmitter = require('events'); // const variables with capital first letter is convention for a CLASS name     

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
        log(message) {
                // Send an HTTP request
                console.log(message);
                 
                // Raise and Event
                this.emit('messageLogged', { id: 1, url: 'http://' });
        }
}

module.exports = Logger;
