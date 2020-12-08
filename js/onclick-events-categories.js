

function searchAll(){

$('#example').DataTable().search("").draw();
// $('input').val('All 💯');

}


function searchYouTube(){
	if($('input').val() != 'YouTube'){
		$('#example').DataTable().search("YouTube").draw();
		// $('input').val('YouTube');
	}
	else{
		$('#example').DataTable().search("").draw();
		// $('input').val('All 💯');
	}	
}

function searchInfluencer(){
	if($('input').val() != 'Influencer 🤳'){
		$('#example').DataTable().search("Influencer").draw();
		// $('input').val('Influencer 🤳 ');
	}
	else{
		$('#example').DataTable().search("").draw();
		// $('input').val('All 💯');
	}	
}