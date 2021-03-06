"use strict";
var page = require('webpage').create(),
    system = require('system'),
    address;
var last_response = null

if (system.args.length === 1) {
    console.log('Usage: netlog.js <some URL>');
    phantom.exit(1);
} else {
    address = system.args[1];
    console.log("Started at:"+Date())
    console.log(address)
    page.onResourceRequested = function (req) {
        //console.log('requested: ' + JSON.stringify(req, undefined, 4));
    };

    page.onResourceReceived = function (res) {
        //console.log('received: ' + JSON.stringify(res, undefined, 4));
        last_response = res
    };

    page.open(address, function (status) {
        if (status !== 'success') {
            console.log('FAIL to load the address');
	 }
     console.log("Finished at:"+last_response.time)
     phantom.exit();
    });
}
