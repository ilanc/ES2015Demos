import {operations} from './es6Module.js';
var commonjs = require('./commonjsModule.js')

// es6
let moduleResult = operations.add(1, 1);
console.log(moduleResult);

// commonJs
console.log(commonjs);

// requirejs
// Causes new chunk to be created = ./dist/1.moduleLoadBundle.js 
require(['./requirejsModule'], function(alerter) {
    alerter('Hello - requireJs')
})