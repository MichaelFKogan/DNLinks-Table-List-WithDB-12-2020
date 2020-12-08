

function searchAsia(){
	if($('input').val() != 'Asia 🌏'){
		$('#example').DataTable().search("Asia").draw();
		// $('input').val('Asia 🌏');
	}
	else{
		$('#example').DataTable().search("").draw();
		// $('input').val('All 💯');
	}	
}

function searchThailand(){
	if($('input').val() != 'Thailand 🇹🇭'){
		$('#example').DataTable().search("Thailand").draw();
		// $('input').val('Thailand 🇹🇭');
	}
	else{
		$('#example').DataTable().search("").draw();
		// $('input').val('All 💯');
	}	
}

function searchBangkok(){
	if($('input').val() != 'Bangkok 🌶️'){
		$('#example').DataTable().search("Bangkok").draw();
		// $('input').val('Bangkok 🌶️');
	}
	else{
		$('#example').DataTable().search("").draw();
		// $('input').val('All 💯');
	}	
}

function searchCangguBali(){
	if($('input').val() != 'Canggu, Bali 🏝️'){

		$('#example').DataTable().search( "Canggu" ).draw();
		// $('input').val('Canggu, Bali 🏝️');
	}
	else{
		$('#example').DataTable().search("").draw();
		// $('input').val('All 💯');
	}	

}

function searchIndonesia(){
	if($('input').val() != 'Indonesia 🇮🇩'){
		$('#example').DataTable().search( "Indonesia" ).draw();
		// $('input').val('Indonesia 🇮🇩');
	}
	else{
		$('#example').DataTable().search("").draw();
		// $('input').val('All 💯');
	}	
}

