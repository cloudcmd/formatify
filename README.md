# Formatify [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Dependency Status][DependencyStatusIMGURL]][DependencyStatusURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL] [![Coverage Status][CoverageIMGURL]][CoverageURL]

[NPMIMGURL]:                https://img.shields.io/npm/v/@cloudcmd/formatify.svg?style=flat
[BuildStatusIMGURL]:        https://img.shields.io/travis/cloudcmd/formatify/master.svg?style=flat
[DependencyStatusIMGURL]:   https://img.shields.io/david/cloudcmd/formatify.svg?style=flat
[LicenseIMGURL]:            https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat
[NPMURL]:                   https://npmjs.org/package/@cloudcmd/formatify "npm"
[BuildStatusURL]:           https://travis-ci.org/cloudcmd/formatify  "Build Status"
[DependencyStatusURL]:      https://david-dm.org/cloudcmd/formatify "Dependency Status"
[LicenseURL]:               https://tldrlegal.com/license/mit-license "MIT License"

Format directory content received by [readify](https://github.com/coderaiser/readify).

## Install

```
npm i @cloudcmd/formatify --save
```

## API

### formatify(files)
- **files** - `files list`

## Examples

```js
const files = [{
    name: 'sortify.js',
    size: 3538,
    date,
    owner: 0,
    mode: 33204,
}, {
    name: 'readify.js',
    size: 1629,
    date: 2016-11-21T13:37:55.275Z,
    owner: 0,
    mode: 33204,
}];

formatify(files)
// returns
[{
    name: 'formatify.js',
    size: '3.46kb',
    date: '12.01.2017',
    owner: 0,
    mode: 'rw- rw- r--',
}, {
    name: 'readify.js',
    size: '1.59kb',
    date: '12.01.2017',
    owner: 0,
    mode: 'rw- rw- r--',
}];
```

## Related

- [Sortify](https://github.com/cloudcmd/sortify "Sortify") - sort directory content by name, size, date
- [Readify](https://github.com/coderaiser/readify "Readify") - read directory content with file attributes: size, date, owner, mode

## License

MIT

[CoverageURL]:              https://coveralls.io/github/cloudcmd/formatify?branch=master
[CoverageIMGURL]:           https://coveralls.io/repos/cloudcmd/formatify/badge.svg?branch=master&service=github

