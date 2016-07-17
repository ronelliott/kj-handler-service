'use strict';

module.exports = function($$resolver) {
    $$resolver.add('$service', require('./handler'));
};
