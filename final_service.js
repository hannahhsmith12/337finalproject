// FILE FORMAT:
// 		name
//		location/address
// 		cleanliness (out of 10)
//		hours
//		stalls vs single
//		"by costumers only"
//		baby accomadations
//		unisex option
//		wheelchair accessibility
//		family restroom

"use strict";

const express = require("express");
const app = express();

const fs = require('fs');

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json(); 

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 
               "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(express.static('public'));

/**
	readFile(folder) : This function opens a file and returns it's contents
	as a string. Throws an error if unable to open file.
*/
function readFile(fileName) {
	let file;
	try {
		file = fs.readFileSync(fileName, 'utf8');
	} catch(e) {
		console.log('Error: ', e.stack);
	}
	return file;
}