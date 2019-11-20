function strictFunc(){
    'use strict';
    undeclaredVar2 = 123;
}
var assert = require('assert');
assert.throws(
    () => strictFunc(),
    {
        name: 'ReferenceError',
        message: 'undeclaredVar2 is not defined',
    }
);