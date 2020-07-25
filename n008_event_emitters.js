var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler
var thisIsMyEventHandler = function () {
  console.log('I get executed when an event occurs!');
}

//Create an ( here it is some_event_name ) event and assign the event handler to an event:
eventEmitter.on('some_event_name', thisIsMyEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('some_event_name');