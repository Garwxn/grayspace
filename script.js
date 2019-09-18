AOS.init({
	easing: 'ease',
	duration: 1800,
	once: true
})
$(window).on('load', function() {
          // Animate loader off screen
          $("#splash_screen").fadeOut("slow");;
          $("#splash_screen").addClass("animated slideOutUp");
  		});