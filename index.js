'use strict';

var googleapis = require('googleapis');


function shorten(url, cb) {
  var params, shortUrlReq;

  googleapis
    .discover('urlshortener', 'v1')
    .execute(function(err, client) {
      if(err) {
        console.log(err);
        return;
      }

      params = { longUrl: url };
      shortUrlReq = client.urlshortener.url.insert(params);

      shortUrlReq.execute(function(err, res) {
        cb(err, res.id);
      });
    });

}


function get(url, cb) {
  var params, getUrlReq;

  googleapis
      .discover('urlshortener', 'v1')
      .execute(function(err, client) {
        if (err) {
          console.log(err);
          return;
        }

        params = { shortUrl: url };
        getUrlReq = client.urlshortener.url.get(params);

        getUrlReq.execute(function(err, res) {
          cb(err, res.longUrl);
        });
      });

}


module.exports = {
  shorten: shorten,
  get: get
};
