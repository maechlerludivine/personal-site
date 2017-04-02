jQuery(document).ready(function(){	
  // Animation menu scroll down
 var $window = $(window);
 $window.scroll(function () {
     if ($window.scrollTop() > 0)
        $('.navbar').css('background-color', '#fff'), $('.navbar li a').css('color', '#444'), $('img#white').css('display', 'none'), $('img#black').css('display', 'block');
     else {
        $('.navbar').css('background-color', 'transparent'), $('.navbar li a').css('color', '#fff'), $('img#white').css('display', 'block'), $('img#black').css('display', 'none');
     }
 });
// Typed animation
/* 	$("#typed").typed({
	    stringsElement: $('#typed-strings'),
	    typeSpeed: 50,
	    backDelay: 500,
	    loop: true,
	    contentType: 'html',
	    loopCount: false
	});*/
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

