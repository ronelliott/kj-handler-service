'use strict';

const is = require('is');

module.exports = function($opts, $$resolver) {
    return function(err, $caller, $resolver, $next) {
        var deflt = $opts.default || null,
            inject = $opts.inject || '$data',
            service = $opts.service || '$service',
            action = $opts.action,
            hasAction = is.null(action) || is.undefined(action);

        if (err && service !== 'err') {
            $next();
            return;
        }

        if (!is.string(action) || action === '') {
            $next(new Error('No action defined!'));
            return;
        }

        var service = is.string(service) ? $$resolver(service) : service;

        function callback(err, data) {
            $resolver.add(err, err);
            $resolver.add(inject, data);
            $next();
        }

        $caller(hasAction ? service : service[action], service, {
            callback: callback,
            done: callback,
            next: callback,
        });
    };
};
