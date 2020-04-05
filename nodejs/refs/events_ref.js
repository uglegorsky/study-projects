const events = require('events');

class Logger extends events {
  log(message) {
    this.emit('message', `${message} ${Date.now()}`)
  }
}

const logger = new Logger();

logger.on('message', data => {
  console.log(data);
});

logger.log('Hello');