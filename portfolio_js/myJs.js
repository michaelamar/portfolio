$(document).ready(function(){
	$('.home_text').waypoint(function() {
		clearAll();
		$('#home').css({"transition": "ease color 1s", "color": "#ff1166"});
		$(this).css({"background-color": "#0FFFD7"});
	}, { offset: '15%' });

	$('.reading').waypoint(function() {
		clearAll();
		$('#reading').css({"color": "#ff1166"});
		$(this).css({"background-color": "#0033FF"});
		//$('.reading').css("background-color", "green");
	}, { offset: '15%' });


	$('.resume').waypoint(function() {
		clearAll();
		
		$('#resume').css({"color": "#ff1166"});
		$('.work').css({"background-color": "transparent"});
		$('body').css({"background-color": "#999"});

		 
	}, { offset: '15%' });


	$('.work').waypoint(function() {
		clearAll();
		$('#work').css({"color": "#ff1166"});
		$('.contact').css({"background-color": "transparent"});
		$('body').css({"background-color": "#FF510F"});

	}, { offset: '15%' });

	$('.contact').waypoint(function() {
		clearAll();
		$('#contact').css({"color": "#ff1166"});
		$('body').css({"background-color": "#FFCC00"});


	}, { offset: '15%' });

//problem is it gets in the way of my hover
	function clearAll(){
		$('#resume, #home, #work, #reading, #contact').css({"color":"#11ddff"});
		//$('.block').css({"background-color":"white"});
	}

	// function createWaypoint(clas, id){
	// $(clas).waypoint(function(){
	// $(id).css("background-color", "red");
	// });
// }





});