$(document).ready(function(){
	$('.home_text').waypoint(function() {
		clearAllBack();
		$('#home').css("background-color", "red");
	});


	$('.resume').waypoint(function() {
		clearAllBack();
		$('#resume').css("background-color", "red");
	});

	$('.work').waypoint(function() {
		clearAllBack();
		$('#work').css("background-color", "red");
	});

	$('.contact').waypoint(function() {
		clearAllBack();
		$('#contact').css("background-color", "red");

	});

	$('.reading').waypoint(function() {
		clearAllBack();
		$('#reading').css("background-color", "red");
		$('.reading').css("background-color", "green");
	});

	function clearAllBack(){
		$('#resume, #home, #work, #reading, #contact').css("background-color", "white");
		
	}
});