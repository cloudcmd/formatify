'use strict';

const format = require('format-io');
const shortdate = require('shortdate');

module.exports = (files) => {
    check(files);
    
    return files
        .map(replaceDate)
        .map(replaceMode)
        .map(replaceSize);
};

function check(files) {
    if (!Array.isArray(files))
        throw Error('files should be an array!');
}

function replaceDate(stat) {
    const date = !stat.date ? '' : shortdate(stat.date, {
        order: 'little'
    });
    
    return Object.assign(stat, {
        date
    });
}

function replaceMode(stat) {
    const octal = Number(stat.mode).toString(8);
    const mode = format.permissions.symbolic(octal);
    
    return Object.assign(stat, {
        mode
    });
}

function replaceSize(stat) {
    const size = format.size(stat.size);
    
    return Object.assign(stat, {
        size
    });
}

