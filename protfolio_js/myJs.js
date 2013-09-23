$(document).ready(function(){
	$('.home_text').waypoint(function() {

		clearAll();
		$('#home').css({"transition": "ease color 1s", "font-size": "28px", "color": "#11dddd"});
		$(this).css({"background-color": "#0FFFD7"});
	});

	$('.reading').waypoint(function() {
		clearAll();
		$('#reading').css({"font-size": "28px", "color": "#11dddd"});
		$(this).css({"background-color": "#0033FF"});
		//$('.reading').css("background-color", "green");
	});


	$('.resume').waypoint(function() {
		clearAll();
		
		$('#resume').css({"font-size": "28px", "color": "#11dddd"});
		$(this).css({"background-color": "#999"});
		
	});

	$('.work').waypoint(function() {
		clearAll();
		$('#work').css({"font-size": "28px", "color": "#11dddd"});
		$(this).css({"background-color": "#FF510F "});
	});

	$('.contact').waypoint(function() {
		clearAll();
		$('#contact').css({"font-size": "28px", "color": "#11dddd"});
		$(this).css({"background-color": "#FFCC00"});


	});

//problem is it gets in the way of my hover
	function clearAll(){
		$('#resume, #home, #work, #reading, #contact').css({"font-size":"16px", "color":"#11ddff"});

	}

	// function createWaypoint(clas, id){
	// $(clas).waypoint(function(){
	// $(id).css("background-color", "red");
	// });
// }





});