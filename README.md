# cypress-cucumber-preprocessor

[![Build status](https://github.com/badeball/cypress-cucumber-preprocessor/actions/workflows/build.yml/badge.svg)](https://github.com/badeball/cypress-cucumber-preprocessor/actions/workflows/build.yml)
[![Npm package weekly downloads](https://badgen.net/npm/dw/@badeball/cypress-cucumber-preprocessor)](https://npmjs.com/package/@badeball/cypress-cucumber-preprocessor)

## Installation

```
$ npm install @badeball/cypress-cucumber-preprocessor
```

## User guide

For further documentation see [docs](docs/readme.md) and [docs/quick-start.md](docs/quick-start.md).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## Building

Building can be done once using:

```
$ npm run build
```

Or upon file changes with:

```
$ npm run watch
```

There are multiple types of tests, all ran using npm scripts:

```
$ npm run test:fmt
$ npm run test:types
$ npm run test:unit
$ npm run test:integration # make sure to build first
$ npm run test # runs all of the above
```