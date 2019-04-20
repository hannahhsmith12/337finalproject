"use strict";

(function () {
	window.onload = function () {
		// when page loads, hide submission div:
		document.getElementById("submitreview").style.visibility = "hidden";
		// populate reviews div: 
		fetchReviews();

		// DEAL WITH MAP LATER:
		//initMap();

		// when "submit review" button is clicked:
		document.getElementById("submit").onclick = function () {
			console.log("hello");
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

	function fetchReviews() {
		console.log("fetching reviews");
		// let url  = "http://localhost:3000";
		// fetch(url)
		// 	.then(checkStatus)
		// 	.then(function (responseText) {
		// 		loadComments(responseText);
		// 	})
		// 	.catch(function (error) {
		// 		console.log(error);
		// 	});
	}

}) ();