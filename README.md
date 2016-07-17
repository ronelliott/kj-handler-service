# kj-handler-service
[![view on npm](http://img.shields.io/npm/v/kj-handler-service.svg)](https://www.npmjs.org/package/kj-handler-service)
[![view on npm](https://img.shields.io/npm/dm/kj-handler-service.svg)](https://www.npmjs.org/package/kj-handler-service)
[![Dependency Status](https://david-dm.org/ronelliott/kj-handler-service.svg)](https://david-dm.org/ronelliott/kj-handler-service)
[![Build Status](https://travis-ci.org/ronelliott/kj-handler-service.png)](https://travis-ci.org/ronelliott/kj-handler-service)
[![Coverage Status](https://coveralls.io/repos/ronelliott/kj-handler-service/badge.svg?branch=master)](https://coveralls.io/r/ronelliott/kj-handler-service?branch=master)
[![Code Climate](https://codeclimate.com/github/ronelliott/kj-handler-service/badges/gpa.svg)](https://codeclimate.com/github/ronelliott/kj-handler-service)


## Installation
Install using [NPM](https://github.com/isaacs/npm):

    npm install kj-handler-service --save


## Usage
Add the module to the modules section of your config:

    modules.exports = {
        ...
        modules: [
            ...
            require('kj-handler-service'),
            ...
        ],
    };
