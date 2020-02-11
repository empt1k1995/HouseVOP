$(function ()	{


// Burger menu active ================================
	const menuToggle = document. querySelector ('#menu-togle');
	let nav = $('nav');

	menuToggle. onclick = function (event) {
		event.preventDefault();
		menuToggle.classList.toggle ('burger-menu-active');
		nav.toggleClass('show');
	};


//Smoth scroll=================================	
	$("[data-scroll]"). on("click", function (event) {
		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffSet = $(elementId).offset().top;

		console.log (elementOffSet);

		$("html, body").animate({
			scrollTop: elementOffSet
		},1000) 

	});

});