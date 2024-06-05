const fs = require('fs');

const arr = [ { a: 44556 }, {a: 56}, {a: 555},  {a: 6767}, {a: 878} ];

const fileNames = ['first.json', 'second.json', 'third.json', 'fourth.json', 'fifth.json'];

arr.forEach((item, index) => {
    const stringValue = JSON.stringify(item);
    fs.writeFile(fileNames[index], stringValue, function (err){
        if (err) throw err;
    });
});

let minValue = Infinity;
let minName = '';

fileNames.forEach(fileName => {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) throw err;
        const value = JSON.parse(data);
        if (value.a < minValue) {
            minValue = value.a;
            minName = fileName;
        }
    });
});

setTimeout(() => {
console.log(minName);
},2000)