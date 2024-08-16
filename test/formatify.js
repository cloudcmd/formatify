'use strict';

const tryCatch = require('try-catch');
const formatify = require('..');
const test = require('supertape');

const {
    testDir,
    libDir,
    readifyFile,
    sortifyFile,
} = require('./fixture');

const {
    testRaw,
    libRaw,
    readifyRaw,
    sortifyRaw,
} = require('./fixture-raw');

test('formatify: arguments: exception when no files', (t) => {
    const [error] = tryCatch(formatify);
    
    t.equal(error.message, 'files should be an array!', 'should throw when no files');
    t.end();
});

test('formatify: result', (t) => {
    const files = [
        testRaw,
        libRaw,
        readifyRaw,
        sortifyRaw,
    ];
    
    const expected = [
        testDir,
        libDir,
        readifyFile,
        sortifyFile,
    ];
    
    const result = formatify(files);
    
    t.deepEqual(result, expected);
    t.end();
});
