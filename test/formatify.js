'use strict';

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

test('arguments: exception when no files', (t) => {
    t.throws(formatify, /files should be an array!/, 'should throw when no files');
    t.end();
});

test('result', (t) => {
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
    
    t.deepEqual(result, expected, 'should equal');
    t.end();
});

