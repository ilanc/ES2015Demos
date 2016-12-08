// es6
import {operations} from './es6Module.js';
let moduleResult = operations.add(1, 1);
console.log(moduleResult);

// commonJs
var commonjs = require('./commonjsModule.js')
console.log(commonjs);

// requirejs
// Causes new chunk to be created = ./dist/1.moduleLoadBundle.js 
require(['./requirejsModule'], function(alerter) {
    alerter('Hello - requireJs')
})