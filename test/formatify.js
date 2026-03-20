import {tryCatch} from 'try-catch';
import {test} from 'supertape';
import {formatify} from '../lib/formatify.js';
import {
    testDir,
    libDir,
    readifyFile,
    sortifyFile,
} from './fixture.js';
import {
    testRaw,
    libRaw,
    readifyRaw,
    sortifyRaw,
} from './fixture-raw.js';

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

test('formatify: result: same year -> return time', (t) => {
    const files = [
        sortifyRaw,
    ];
    
    const expected = [{
        date: '12.01.2017',
        mode: 'rw- rw- r--',
        name: 'sortify.js',
        owner: 0,
        size: '3.46kb',
        time: '11:01:35',
    }];
    
    const result = formatify(files);
    
    t.deepEqual(result, expected);
    t.end();
});
