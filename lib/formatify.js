import format from 'format-io';
import shortdate from 'shortdate';
import {shorttime} from './shorttime.js';

const {assign} = Object;
const {isArray} = Array;

export const formatify = (files) => {
    check(files);
    
    return files
        .map(createReplaceDate())
        .map(replaceMode)
        .map(replaceSize);
};

function check(files) {
    if (!isArray(files))
        throw Error('files should be an array!');
}

const createReplaceDate = () => (stat) => {
    if (!stat.date)
        return {
            ...stat,
            date: '',
            time: '',
        };
    
    const date = shortdate(stat.date, {
        order: 'little',
    });
    
    const time = shorttime(stat.date);
    
    return {
        ...stat,
        date,
        time,
    };
};

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
