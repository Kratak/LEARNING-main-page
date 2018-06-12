// NOTE bracket "TODO, NOTE, FIXME, CHANGES i FUTURE."
// TODO  [2]solve a problem with errors in bracklets
/* TODO: [1] remeka link/href from locals to webs 
    <a href="index.html">Home</a>
    to 
    http://kratak.pl/index.html  */

/* footer message*/

var github = '<a href="https://github.com/Kratak" target="_blank">&lt; github &gt;</a>';
var linkedin = '<a href="https://www.linkedin.com/in/maciej-kaczanowski-189404166/" target="_blank">&lt; linkedin &gt;</a>';

document.getElementById("fotIn").innerHTML =
	"made by Maciej Kaczanowski " + "</br>" + github + " " + linkedin;

/*sticky*/
$(document).ready(function () {
	var NavY = $('.navbar').offset().top;
	var stickyNav = function () {
		var ScrollY = $(window).scrollTop();
		if (ScrollY > NavY) {
			$('.navbar').addClass('navbar_sticky');
		} else {
			$('.navbar').removeClass('navbar_sticky');
		}
	};
	stickyNav();
	$(window).scroll(function () {
		stickyNav();
	});
});


/*very smode scroll, to eny elemnt on page*/

/*https://css-tricks.com/snippets/jquery/smooth-scrolling/*/

// Select all links with hashes
$('a[href*="#"]')
	// Remove links that don't actually link to anything
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function (event) {
		// On-page links
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname
		) {
			// Figure out element to scroll to
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			// Does a scroll target exist?
			if (target.length) {
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000, function () {
					// Callback after animation
					// Must change focus!
					var $target = $(target);
					$target.focus();
					if ($target.is(":focus")) { // Checking if the target was focused
						return false;
					} else {
						$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
						$target.focus(); // Set focus again
					};
				});
			}
		}
	});

/*//TODO [3] start to make hamburger button
	remeber display none or block*/
