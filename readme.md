# node-jsonp

A simple JSONP implementation for Node.js.

[![Build Status][ci-image]][ci-url]

## Installation

``` bash
$ npm install node-jsonp
```

## API

### JSONP(url, data, method, callback)

- `url` (`String`) The URL you are requesting with the JSON data
- `data` (`Object`) The Data object you want to generate the URL params from
- `method` (`String`) The method name for the callback function. Defaults to callback (for example, flickr's is "jsoncallback")
- `callback` (`function`) The callback you want to execute as an anonymous function. The first parameter of the anonymous callback function is the JSON

The callback is called with `data` parameters.

###Examples
```js
	JSONP('http://twitter.com/users/oscargodson.json',function(json){
	 console.log(json)
	})
	
	JSONP('http://api.flickr.com/services/feeds/photos_public.gne',{'id':'12389944@N03','format':'json'},'jsoncallback',function(json){
     console.log(json)
    })
    
    JSONP('http://graph.facebook.com/FacebookDevelopers', 'callback', function(json){
     console.log(json)
    })
```	

## License

MIT

[ci-image]: https://travis-ci.org/ngot/node-jsonp.png?branch=master
[ci-url]: https://travis-ci.org/ngot/node-jsonp