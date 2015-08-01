'use strict';

var express = require('express'),
	_ = require('underscore'),
	sassMiddleware = require('node-sass-middleware'),
	path = require('path'),
	app = express(),
	bodyParser = require('body-parser'),
	errorHandler = require('errorhandler'),
	methodOverride = require('method-override'),
	port = parseInt(process.env.PORT, 10) || 8080,
	publicDir = __dirname + '/public',
	srcPath = publicDir + '/scss',
	destPath = publicDir + '/generated_css',
	contacts = require('./data/contacts.json');

app.get('/', function(req, res) {
	res.redirect("/index.html");
});

app.get('/contacts', function(req, res) {
	res.json(contacts.contacts);
});

app.get('/contact/:id', function(req, res) {
	console.log(contacts.contacts);
	res.json(_.findWhere(contacts.contacts, {id: parseInt(req.params.id)}));
});

app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(sassMiddleware({
	src: srcPath,
	dest: destPath,
	debug: true,
	outputStyle: 'compressed'
}));

app.use(express.static(publicDir));

app.use(errorHandler({
	dumpExceptions: true,
	showStack: true
}));

app.use(app.router);

app.listen(port);


