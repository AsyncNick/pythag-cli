#!/usr/bin/env node
"use strict";
var meow = require('meow');
var pythag = require('pythag');

var cli = meow({
	help: [
		'Usage',
		' $ pythag <int> <int>',
		'',
		'Example',
		' $ pythag 5 2',
		' > 29'
	]
})

console.log( 
	pythag(cli.input[0], cli.input[1])
);