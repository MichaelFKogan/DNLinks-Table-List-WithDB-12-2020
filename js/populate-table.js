$(document).ready(function() {


var data = [];

// POPULATE HOMPAGE - ALL
var ref = firebase.database().ref("ALL");

ref.once("value", function(snapshot) {

var data = [];
		// console.log(snapshot.val());

	snapshot.forEach(function(childNodes){

	// console.log(childNodes.val());
	// console.log(childNodes.val().City);	

		// if(childNodes.val().City == "Bangkok 🌶️"){
		// 	console.log("YES")
			data.push(childNodes.val());
		// }
	});

	  $('#example').DataTable({
			"paging":   false,
			"order": [[ 1, "asc" ]],
	        // "rowReorder": {"selector": 'td:nth-child(2)'},
	        "responsive": true,
	        "stateSave": true,
	        "fixedHeader": true,
	        // "serverSide": true,

	     	data: data,
	        columns: [{data: "Name", "render": function ( data, type, row, meta ) {
	        				if(row.Category == "YouTube"){return'<a href="'+row.URL+'" target="_blank"><img class="buttonImage" src="https://firebasestorage.googleapis.com/v0/b/digital-nomad-links.appspot.com/o/images%2Fyoutube-icon.png?alt=media&amp;token=0f306cc2-c4b1-4aa1-9067-4967a13cb785">'+data+'<img class="buttonImageRight" src="https://firebasestorage.googleapis.com/v0/b/digital-nomad-links.appspot.com/o/images%2Fnew-window-icon.png?alt=media&token=487392d0-7a01-4610-bec9-08042b5b572a"></a>'}
	        				else{return '<a href="'+row.URL+'" target="_blank">'+data+'<img class="buttonImageRight" src="https://firebasestorage.googleapis.com/v0/b/digital-nomad-links.appspot.com/o/images%2Fnew-window-icon.png?alt=media&token=487392d0-7a01-4610-bec9-08042b5b572a"></a>';}
    						  }},


	        		  {data: "Category", "render": function ( data, type, row, meta ) {
							if(data == "YouTube"){return'<a onclick="search'+data+'()"><img class="buttonImage" src="https://firebasestorage.googleapis.com/v0/b/digital-nomad-links.appspot.com/o/images%2Fyoutube-icon.png?alt=media&amp;token=0f306cc2-c4b1-4aa1-9067-4967a13cb785">'+data+'</a>'}
							else if(data == "Influencer"){return '<span class="emoticon">🤳</span><a onclick="search'+data+'()">'+data+'</a>';}
							else{return '<a onclick="search'+data+'()">'+data+'</a>';}
    						  }},
	        		  	

	        		  {data: "Tag", "render": function ( data, type, row, meta ) {
	        		  		if(data == "YouTube"){return'<a class="tdTag" onclick="search'+data+'()"><img class="buttonImageTag" src="https://firebasestorage.googleapis.com/v0/b/digital-nomad-links.appspot.com/o/images%2Fyoutube-icon.png?alt=media&amp;token=0f306cc2-c4b1-4aa1-9067-4967a13cb785">'+data+'</a>'}
							else if(data == "Influencer"){return '<span class="emoticonTag">🤳</span><a class="tdTag" onclick="search'+data+'()">'+data+'</a>';}
							else{return '<a class="tdTag" onclick="search'+data+'()">'+data+'</a>';}
	        		  		  }},


	        		  {data: "City", "render": function ( data, type, row, meta ) {
	        		  	if(data == "Canggu, Bali"){return '<a onclick="searchCangguBali()">'+data+'</a> <span class="emoticon">🏝️</span>';}
	        		  	else if(data == "Canggu"){return '<a onclick="searchCangguBali()">Canggu, Bali</a> <span class="emoticon">🏝️</span>';}	        		  	
	        		  	else if(data == "Chiang Mai"){return '<a onclick="searchChiangMai()">'+data+'</a>';}	        		  	
	        		  	else{return '<a onclick="search'+data+'()">'+data+'</a>';}
    						  }},


	        		  {data: "Country", "render": function ( data, type, row, meta ) {
							return '<a onclick="search'+data+'()">'+data+'</a>';
    						  }},


	        		  {data: "Continent", "render": function ( data, type, row, meta ) {       		  	
	        		  		return '<a onclick="search'+data+'()">'+data+'</a>';
	        		  		}}]
	    });


 }, function (error) {
   console.log("Error: " + error.code);
}).then(function(){
    getFavicon();
    getEmoticon();
    addClearButton();    
});

});


function addClearButton(){
	$("#example_filter").append("<span onclick='clearSearch()' style='margin-left:5px;color:blue;font-size:12px;'>clear</span>")
}

function clearSearch(){
	$('#example').DataTable().search("").draw();
	// $('input').val('All 💯');
}


