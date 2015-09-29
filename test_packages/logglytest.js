var winston = require('winston');
require('winston-loggly');

 winston.add(winston.transports.Loggly, {
    token: "16cbc70c-cf48-448a-b8ed-1f42ca3546ba",
    subdomain: "ordermentum",
    tags: ["Winston-NodeJS"],
    json: true
});

winston.log('info',"Hello World from Node.js!");
