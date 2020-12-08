var text;

function getEmoticon(){
	$("a").each(function() {



var text = $(this).text();
// console.log(text);


// Categories
	if(text == "Facebook Group"){$(this).before('<img class="tableImage" src="https://firebasestorage.googleapis.com/v0/b/digital-nomad-links.appspot.com/o/images%2Ffacebook-icon.png?alt=media&token=41c9f39e-73cb-4d70-bb9f-107b59886a99">');}
	else if(text == "Instagram"){$(this).before('<img class="tableImage" src="https://firebasestorage.googleapis.com/v0/b/digital-nomad-links.appspot.com/o/images%2Finstagram-icon.png?alt=media&token=5cd2113a-0971-42ed-a295-72f86e100b16">');}
	else if(text == "Reddit"){$(this).before('<img class="tableImage" src="https://firebasestorage.googleapis.com/v0/b/digital-nomad-links.appspot.com/o/images%2Freddit-icon.png?alt=media&token=4026103e-f020-4bb2-907e-f42aa54cdf78">');}
	else if(text== "Vlog"){$(this).before('<span class="emoticon">📹 </span>');}
	else if(text== "Jobs"){$(this).before('<span class="emoticon">👔 </span>');}
	else if(text == "Pets"){$(this).before('<span class="emoticon">🐾 </span>');}

// Cities 
	// if(text == "Canggu"){$(this).after('<span class="emoticon"> 🏝️</span>');}
	// else if(text == "Canggu, Bali"){$(this).after('<span class="emoticon"> 🏝️</span>');}
	if(text == "Bangkok"){$(this).after('<span class="emoticon" style="font-size:11px"> 🌶️</span>');}
	else if(text == "Chiang Mai"){$(this).after('<span class="emoticon"> 🐘</span>');}
	else{};

// Countries
	if(text == "Thailand"){$(this).after('<span class="emoticon"> 🇹🇭</span>');}
	else if(text == "Vietnam"){$(this).after('<span class="emoticon"> 🇻🇳</span>');}
	else if(text == "Indonesia"){$(this).after('<span class="emoticon"> 🇮🇩</span>');}
	else{};

// Continents
	if(text == "Asia"){$(this).after('<span class="emoticon"> 🌏</span>');}
	else if(text == "Europe"){$(this).after('<span class="emoticon"> 🌍</span>');}
	else if(text == "Americas"){$(this).after('<span class="emoticon"> 🌎</span>');}
	else{}

	});
};