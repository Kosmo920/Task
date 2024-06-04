const fs = require('fs');

const arr = [ { a: 44556 }, {a: 56}, {a: 555},  {a: 6767}, {a: 878} ];

var stringValue1 = JSON.stringify(arr[0]);
var stringValue2 = JSON.stringify(arr[1]);
var stringValue3 = JSON.stringify(arr[2]);
var stringValue4 = JSON.stringify(arr[3]);
var stringValue5 = JSON.stringify(arr[4]);

fs.writeFile('first.json', stringValue1, function(err){
    if (err) throw err;
});

fs.writeFile('second.json', stringValue2, function(err){
    if (err) throw err;
});

fs.writeFile('third.json', stringValue3, function(err){
    if (err) throw err;
});

fs.writeFile('fourth.json', stringValue4, function(err){
    if (err) throw err;
});

fs.writeFile('fifth.json', stringValue5, function(err){
    if (err) throw err;
});

