//Thursday, Jan 1st 1970 00:00:00 Unix epoch
var moment = require('moment');
// var date = new Date();
// console.log(date.getMonth());

var date = moment();
date.add(1, 'year');
console.log(date.format('MMM Do, YYYY'));

var hour = moment();
console.log(hour.format('h:mm a'));


var createdAt = 1234;
var time = moment(createdAt);
console.log(date.format('h:mm a'));

var someTimeStamp = moment().valueOf();
console.log(someTimeStamp);