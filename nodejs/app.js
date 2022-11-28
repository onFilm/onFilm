const names = require('./const')
const sayHi = require('./utils')
const os_module = require('./os-module')

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);

console.log("Current System Info \n", os_module.currentSystemInfo);
console.log("System Path Seperator \n", os_module.pathInfo);