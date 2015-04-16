# Isomorphic Overflow

A simple isomorphic app that showcases the 10 "hottest" javascript questions
currently on Stack Overflow.


Built with [React](https://github.com/facebook/react),
[React-Router](https://github.com/rackt/react-router),
[Browserify](https://github.com/substack/node-browserify),
[SuperAgent](https://github.com/visionmedia/superagent) and
[Express](https://github.com/strongloop/express/).

#### Overview

This project is an example of a basic
[isomorphic javascript](http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/)
app built by combining a few commonly used libraries. It includes all the
hallmark features of a typical isomorphic app such as route sharing, component
sharing, data sharing, and progressive enhancement in the browser. A live api
([Stack Exchange](https://api.stackexchange.com/))
is used to demonstrate the real world use case of interacting with an external
data source.

The overall goal is to establish an isomorphic architecture that is simple,
modular, and usable.


## Quick Start

Clone this repo:
```bash
$ git clone git@github.com:zpnk/isomorphic-overflow.git
$ cd isomorphic-overflow
```
Then install the dependencies, build the browser package, and start the server:
```bash
$ npm install
$ npm run build
$ npm start
```
That's it! Open [localhost:9765](http://localhost:9765) to check it out.

Use your browser's dev tools to view network requests and play around with
javascript disabled.

## Roadmap

Some things that could be done/improved:

- Refactor data flow, move api calls out of the components.
- CoffeeScript version.
- ES6 + promises version.
- Move data flow to Flux using [Reflux](https://github.com/spoike/refluxjs) or
[Fluxible](https://github.com/yahoo/fluxible).
- Tests. =)
