$(document).ready(function(){
	$('.home_text').waypoint(function() {
		//clearAll();
		$('#home').toggleClass('clear');
		$('html').css({"transition": "ease background-color 1s", "background-color": "#b1e1ed"});
		//$('.header').css({"background-color": "#ffffff"});
	}, { offset: '7%' });

	$('.reading').waypoint(function() {
		//clearAll();
		$('#home').toggleClass('clear');
		$('#reading').toggleClass('clear');
		$('html').css({"transition": "ease background-color 1s", "background-color": "#ffccaa"});
		//$('.reading').css("background-color", "green");
	}, { offset: '25%' });


	$('.resume').waypoint(function() {
		//clearAll();
		$('#reading').toggleClass('clear');
		$('#resume').toggleClass('clear');
		//$('.work').css({"background-color": "transparent"});
		$('html').css({"transition": "ease background-color 1s", "background-color": "#c9e6de"}); //CC3D22"

		 
	}, { offset: '25%' });


	$('.work').waypoint(function() {
		//clearAll();
		$('#resume').toggleClass('clear');
		$('#work').toggleClass('clear');
		//$('.contact').css({"background-color": "transparent"});
		$('html').css({"transition": "ease background-color 1s", "background-color": "#ccee97"});

	}, { offset: '25%' });

	$('.contact').waypoint(function() {
		//clearAll();
		$('#work').toggleClass('clear');
		$('#contact').toggleClass('clear');
		$('html').css({"transition": "ease background-color 1s", "background-color": "#FFCC55"});
		

	}, { offset: '25%' });

//problem is it gets in the way of my hover
	// function clearAll(){
	// 	$('#resume, #home, #work, #reading, #contact').css({"color":"#11ddff"});
	// 	//$('.block').css({"background-color":"white"});
	// }

	// function createWaypoint(clas, id){
	// $(clas).waypoint(function(){
	// $(id).css("background-color", "red");
	// });
// }





});