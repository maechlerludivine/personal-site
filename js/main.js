jQuery(document).ready(function(){	
  // Animation menu scroll down
 var $window = $(window);
	// Scroll top
	$('.scroll').on('click', function() {
		var page = $(this).attr('href');
		var speed = 200;
		$('html, body').animate( { scrollTop: $(page).offset().top }, speed );
		return false;
	});

	// Scroll down

	$(function() {
		$('a[href*=#]').on('click', function(e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
		});
	}); 
}); // end of document ready

$(window).load(function(){
	$('#preloader').fadeOut(3000, function(){
		$('.content').fadeIn(550);
	});
})