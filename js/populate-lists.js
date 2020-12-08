$(document).ready(function() {


var data = [];

// POPULATE HOMPAGE - ALL
var ref = firebase.database().ref("ALL");

ref.once("value", function(snapshot) {

var data = [];
		// console.log(snapshot.val());

	snapshot.forEach(function(childNodes){

	console.log(childNodes.val());
	console.log(childNodes.val().Category);	

		// if(childNodes.val().Category == "Facebook Group"){
		// 	console.log("YES")
			// data.push(childNodes.val());
		// }
	});
});

});