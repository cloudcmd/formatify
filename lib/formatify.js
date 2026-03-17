import format from 'format-io';
import shortdate from 'shortdate';

const {assign} = Object;
const {isArray} = Array;

export const formatify = (files) => {
    check(files);
    
    return files
        .map(replaceDate)
        .map(replaceMode)
        .map(replaceSize);
};

function check(files) {
    if (!isArray(files))
        throw Error('files should be an array!');
}

function replaceDate(stat) {
    const date = !stat.date ? '' : shortdate(stat.date, {
        order: 'little',
    });
    
    return assign(stat, {
        date,
    });
}

function replaceMode(stat) {
    const octal = Number(stat.mode).toString(8);
    const mode = format.permissions.symbolic(octal);
    
    return assign(stat, {
        mode,
    });
}

function replaceSize(stat) {
    const size = format.size(stat.size);
    
    return assign(stat, {
        size,
    });
}
