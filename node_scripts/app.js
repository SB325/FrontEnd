/*const path = require('path')  // takes relative paths, const prevents reassignment, otherwise built-in module
                //see node.js website for list of modules and their documentation

var pathObj = path.parse(__filename);
console.log(pathObj);

const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total Memory: ' + totalMemory);
console.log(`Free Memory: ${freeMemory}`);
const fs = require('fs');

//const files = fs.readdirSync('./');

//console.log(files);

const files = fs.readdir('$',function(err, files) {
        if (err) console.log('Error',err);
        else console.log('Result', files);
});
*/

const Logger = require('./logger'); // const variables with capital first letter is convention for a CLASS name
const logger = new Logger();

// Register a listener for emitter
logger.on('messageLogged', (arg) => {  // e, eventArg
        console.log('Listener Called', arg);
});

logger.log('message');

