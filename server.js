'use strict';

var express = require("express"),
    _ = require("underscore"),
    app     = express(),
    port    = parseInt(process.env.PORT, 10) || 8080,
    contacts = require('./data/contacts.json');

app.get("/", function(req, res) {
    res.redirect("/index.html");
});

app.get("/contacts", function(req, res) {
    res.json(contacts.contacts);
});

app.get("/contact/:id", function(req, res) {
    console.log(contacts.contacts);
    res.json(_.findWhere(contacts.contacts, {id: parseInt(req.params.id)}));
});

app.configure(function(){
    app.use(express.methodOverride());
    app.use(express.bodyParser());
    app.use(express.static(__dirname + '/public'));
    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
    app.use(app.router);
});

app.listen(port);


