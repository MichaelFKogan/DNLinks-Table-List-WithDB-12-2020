function getFavicon(){
	$("a[href^='http']").each(function() {
	// Facebook
		if (this.href.includes('https://www.facebook.com') == true){
			// $(this).prepend('<img src="https://www.google.com/s2/favicons?domain=' + this.hostname +'" style="height:18px; margin-right:5px; ">')

			$(this).prepend('<img class="tableImage" src="https://firebasestorage.googleapis.com/v0/b/digital-nomad-links.appspot.com/o/images%2Ffacebook-icon.png?alt=media&token=41c9f39e-73cb-4d70-bb9f-107b59886a99">')

		}
	// YouTube 
		else if (this.href.includes('https://www.youtube.com') == true){
			$(this).prepend('<img class="tableImage" src="https://firebasestorage.googleapis.com/v0/b/digital-nomad-links.appspot.com/o/images%2Fyoutube-icon.png?alt=media&token=0f306cc2-c4b1-4aa1-9067-4967a13cb785">')
		}
		// Instagram
		else if (this.href.includes('https://www.instagram.com') == true){
			$(this).prepend('<img class="tableImage" src="https://firebasestorage.googleapis.com/v0/b/digital-nomad-links.appspot.com/o/images%2Finstagram-icon.png?alt=media&token=5cd2113a-0971-42ed-a295-72f86e100b16">')
		}
		// reddit
		else if (this.href.includes('reddit.com') == true){$(this).prepend('<img class="tableImage" src="https://firebasestorage.googleapis.com/v0/b/digital-nomad-links.appspot.com/o/images%2Freddit-icon.png?alt=media&token=4026103e-f020-4bb2-907e-f42aa54cdf78">')
	}			
		
	// All Other Websites
		else{$(this).prepend('<img src="https://www.google.com/s2/favicons?domain=' + this.hostname +'" style="height:16px; margin-right:5px; margin-bottom:4px;">')
		}

	});
};




// GETS FAVICON OF ALL LINKS ON PAGE START -------------
$("a[href^='http']").each(function() {
	// console.log("this: "+this);
	// console.log("this.href: " + this.href);
	if (this.href == "https://www.google.com/maps/"){
	  
	  // $(this).css({
	  //   background: "url(./img/google-maps-favicon-19px.png) left center no-repeat",
	  //   "padding-left": "20px"});		
	}
	// Google Flights 
	else if (this.href == "https://www.google.com/flights"){
	  // $(this).css({
  	// 	background: "url(./img/google-flights-favicon-18px.png) left center no-repeat",
	  //   "padding-left": "20px"});		
	}
	// YouTube 
	else if (this.href.includes('https://www.youtube.com') == true){}
	// Instagram
	else if (this.href.includes('https://www.instagram.com') == true){}
	// reddit
	else if (this.href.includes('reddit.com') == true){}
	// Facebook 
	else if (this.href.includes('https://www.facebook.com') == true){
		$(this).prepend('<div>HELLO</div><img src="https://www.google.com/s2/favicons?domain=' + this.hostname +'" style="height:18px; margin-right:5px; ">')
	}		
	// Individual Pages	
	else if (this.href.includes('https://www.facebook.com/groups/2565125687044926/') == true){}	
	else if (this.href.includes('https://www.facebook.com/groups/740953512945776/') == true){}	
	else if (this.href.includes('https://www.facebook.com/groups/dojobalicommunity/') == true){}
	else if (this.href.includes('https://screwthecubicle.com/start-here/') == true){}



	// Google.com
	// else if (this.href.includes('https://www.google.com') == true){}		
	// Google Docs
	else if (this.href.includes('docs.google.com') == true){

	  $(this).css({
  		background: "url(./img/docs-favicon.png) left center no-repeat",
	    "padding-left": "20px"});		
	}	

	else if (this.href.includes('https://www.google.com/travel/') == true){
		
			$(this).prepend('<img src="./img/google-travel-icon.svg" style="height:17px; margin-right:5px; margin-bottom:4px;" />');

	}	

	// MyShopify
	else if (this.href.includes('myshopify') == true){

	  $(this).css({
  		background: "url(./img/myshopify-favicon.png) left center no-repeat",
	    "padding-left": "20px"});		
	}		

	else{
		// $(this).prepend('<img src="https://api.statvoo.com/favicon/?url=' + this.hostname +'" style="height:16px; margin-right:5px;">')

		$(this).prepend('<img src="https://www.google.com/s2/favicons?domain=' + this.hostname +'" style="height:16px; margin-right:5px; margin-bottom:4px;">')

	//   $(this).css({
	//     background: "url(https://www.google.com/s2/favicons?domain=" + this.hostname + ") left center no-repeat",
	//     "padding-left": "20px", "min-height" : "20px"});
	// console.log(this.hostname);
	}
});
// GETS FAVICON OF ALL LINKS ON PAGE START -------------