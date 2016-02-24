var browserify = require('browserify');
var babelify = require('babelify');
var reactify = require('reactify');
var path = require('path');
var fs = require('fs');

var writeDestination = fs.createWriteStream(
    path.join(__dirname, './dist/app.js')
);

var bundler = browserify();

bundler.add(path.join(__dirname, './js/main.js'));

bundler.transform(reactify);

bundler.transform(babelify, {
    presets: ["es2015"]
});


bundler.bundle().pipe(writeDestination);