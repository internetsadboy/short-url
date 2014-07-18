'use strict';

var url = require('../index');
var test = require('tape');


test('short-url', function(t) {

  t.test('shorten', function(t) {

    t.plan(1);

    url.shorten('http://www.google.com', function(err, url) {
      t.deepEquals(url, 'http://goo.gl/fbsS');
      t.end();
    });

  });


  t.test('get', function(t) {

    t.plan(1);

    url.get('http://goo.gl/fbsS', function(err, url) {
      t.deepEquals(url, 'http://www.google.com/');
      t.end();
    });

  });

});
