var config = require('./config/default.json')
var Harvest = require('harvest'),
    harvest = new Harvest({
        subdomain: config.harvest.subdomain,
        email: config.harvest.email,
        password: config.harvest.password
    }),
    TimeTracking = harvest.TimeTracking;

TimeTracking.daily({}, function(err, tasks) {
    if (err) {throw new Error(err)}

// work with tasks
});
