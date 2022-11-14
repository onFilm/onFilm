const os = require('os');
const path = require('path');
const fs = require('fs');

const currentSystemInfo = {
    name: os.hostname(),
    type: os.type(),
    totalMemory: (os.totalmem() / 1000000000) + " GigaBytes",
    freeMemory: (os.freemem() / 1000000000) + " GigaBytes",
    releaseNo: os.release(),
    uptime: os.uptime() / 3600 + " hours",
    version: os.version(),
    userInfo: os.userInfo()
}

const pathInfo = {
    path: path.sep
}

const content = fs.readFileSync('./test.txt');
console.log("Using node readFileSync method : ", content.toString());

const asyncRead = fs.readFile('./test.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return null;
    } else {
        console.log("using node readFile method : ", result);
    }
})
// console.log("Current System Info \n", currentSystemInfo);
// console.log("System Path Seperator \n", pathInfo);
