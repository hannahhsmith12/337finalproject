"use strict";

(function () {
	window.onload = function () {
		// when page loads, hide submission div:
		document.getElementById("submitreview").style.visibility = "hidden";
		// populate reviews div: 
		fetchPlaceList();

		// DEAL WITH MAP LATER:
		//initMap();

		// when "submit review" button is clicked:
		document.getElementById("submit").onclick = function () {
			document.getElementById("homepage").style.visibility = "hidden";
			document.getElementById("submitreview").style.visibility = "visible";
			loadSubmitPage;
		};
	};

	// function initMap() {
	// 	console.log("loading map");
	// 	let map;
	// 	map = new google.maps.Map(document.getElementById('map'), {
	//           center: {lat: 32.2226, lng: 110.9747},
	//           zoom: 8
	//     });
	// }

	function loadSubmitPage() {
		console.log("submit pressed");
		
	}

	function fetchPlaceList() {
		console.log("fetching reviews");
		let url  = "http://localhost:3000?mode=listinfo&place=none";
		fetch(url)
			.then(checkStatus)
			.then(function (responseText) {
				console.log(responseText);
				loadPlaceList(responseText);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	function loadPlaceList(responseText) {
		let json = JSON.parse(responseText);
		let places = json.places;
		for (let i = 0; i < places.length; i ++) {
			// Load image:
			//let img = document.createElement("img");
			let h3 = document.createElement("h3");
			h3.innerHTML = places[i].name;
			let p1 = document.createElement("p");
			p1.innerHTML = places[i].address;
			let p2 = document.createElement("p");
			p2.innerHTML = "Cleanliness Rating: " + places[i].rating;
			let div = document.createElement("div");
			div.appendChild(h3);
			div.appendChild(p1);
			div.appendChild(p2);
			document.getElementById('places').appendChild(div);
		}
	}

	function checkStatus(response) {
		console.log(response.status);
		if (response.status >= 200 && response.status < 300) {
			return response.text();
		} else if (response.status === 404) {
			return Promise.reject(new Error(response.status));
		} else if (response.status === 410) {
			return Promise.reject(new Error(response.status));
		} else {
			return Promise.reject(new Error(response.status));
		}
	}

}) ();