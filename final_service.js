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
/**
	getInfo(directory) : This function reads the info.txt file in the specified 
	folder and returns the info as a JSON object.
*/
function getInfo(directory) {
	let info = readFile("places/"+directory+"/info.txt");
	let lines = info.split('\n');
	let place = {"name": lines[0], "address": lines[1], "rating": lines[2]}
	return place;
}

// GET:
console.log('web service started');
app.get('/', function (req, res) {
	res.header("Access-Control-Allow-Origin", "*");

	// get query parameters:
	let mode = req.query.mode;
	let location = req.query.place;

	let places = fs.readdirSync("places");
	if (mode === "listinfo") {
		let places = [];
		let directories = fs.readdirSync("places");
		for (let i = 1; i < directories.length; i ++) {
			let folder = directories[i];
			let place = getInfo(folder);
			places[i-1] = place;
			console.log("place: " + places[i]);
		}
		places= {places};
		res.send(JSON.stringify(places));
	}
});

app.listen(3000);