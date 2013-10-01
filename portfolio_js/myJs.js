$(document).ready(function(){
	$('.home_text').waypoint(function() {
		//clearAll();
		$('#home').toggleClass('clear');
		$('html').css({"transition": "ease background-color 1s", "background-color": "#22B3C9"});
	}, { offset: '7%' });

	$('.reading').waypoint(function() {
		//clearAll();
		$('#home').toggleClass('clear');
		$('#reading').toggleClass('clear');
		$('html').css({"transition": "ease background-color 1s", "background-color": "#FF8651"});
		//$('.reading').css("background-color", "green");
	}, { offset: '20%' });


	$('.resume').waypoint(function() {
		//clearAll();
		$('#reading').toggleClass('clear');
		$('#resume').toggleClass('clear');
		//$('.work').css({"background-color": "transparent"});
		$('html').css({"transition": "ease background-color 1s", "background-color": "#22B3C9"}); //CC3D22"

		 
	}, { offset: '20%' });


	$('.work').waypoint(function() {
		//clearAll();
		$('#resume').toggleClass('clear');
		$('#work').toggleClass('clear');
		//$('.contact').css({"background-color": "transparent"});
		$('html').css({"transition": "ease background-color 1s", "background-color": "#FF510F"});

	}, { offset: '20%' });

	$('.contact').waypoint(function() {
		//clearAll();
		$('#work').toggleClass('clear');
		$('#contact').toggleClass('clear');
		$('html').css({"transition": "ease background-color 1s", "background-color": "#FFCC00"});


	}, { offset: '20%' });

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