import {run} from 'madrun';

export default {
    'lint': () => 'putout .',
    'fix:lint': () => run('lint', '--fix'),
    'report': () => 'c8 report --reporter=lcov',
    'coverage': () => 'c8 npm test',
    'test': () => 'tape test/*.js',
    'watch:coverage': () => run('watcher', 'npm run coverage'),
    'watch:test': () => run('watcher', 'npm test'),
    'watcher': () => 'nodemon -w test -w lib --exec',
};
