### short-url

url-shortening abstraction that uses google's url-shortener [api](https://developers.google.com/url-shortener/)


### Usage

Shorten a url

```javascript
var url = require('short-url');

url.shorten('http://www.google.com', function(err, url) {
  console.log(url); // http://goo.gl/fbsS
});
```

Expand a shortened url

```javascript
url.get('http://goo.gl/fbsS', function(err, url) {
  console.log(url); // http://www.google.com
});
```

### API

### shorten(url, callback)
* `url` expanded url
* `callback(err, url)` callback containing shortened url

### get(url, callback)
* `url` shortened url
* `callbacker(err, url)` callback containing expanded url
