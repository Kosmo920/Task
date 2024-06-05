const fs = require('fs');
const http = require('http');

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
let maxValue = 0;
let maxName = '';

fileNames.forEach(fileName => {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) throw err;
        const value = JSON.parse(data);
        if (value.a < minValue) {
            minValue = value.a;
            minName = fileName;
        }
        if (value.a > maxValue) {
            maxValue = value.a;
            maxName = fileName;
        }
        if (value.a === 555) {
            fs.writeFile(fileName,'{"a":777}', function(err){
                if (err) throw err;
            })
        }
    });
});

setTimeout(() => {
console.log(minName);
fs.unlink(maxName, (err) =>{
    if (err) throw err;
})
},2000)

function getRandomNumber(){
    return Math.floor(Math.random() * 17) - 8;
}

http.createServer((req, res) => {
    if (req.url === '/random' && req.method === 'GET'){
        const randomNumber = getRandomNumber();
        res.write(JSON.stringify(randomNumber));
        res.end();
    }
}).listen(8778);