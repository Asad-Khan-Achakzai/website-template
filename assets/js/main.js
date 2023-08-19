(function($){
	"use strict";

	// Menu JS
	$('.navbar .navbar-nav li a, .main-banner-text .btn, .cta-content .btn, .single-box .link-btn').on('click', function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 50
		}, 1500);
		e.preventDefault();
	});
	$(document).on('click','.navbar-collapse.in',function(e) {
		if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
			$(this).collapse('hide');
		}
	});
	$('.navbar .navbar-nav li a').on('click', function(){
		$('.navbar-collapse').collapse('hide');
	});

	// Sidebar Example Demo Modal
	$(".sidebar-demo-control").on('click',  function() {
		$('.example-demo-modal').toggleClass('active');
	});
	$(".example-demo-modal-control").on('click',  function() {
		$('.example-demo-modal').removeClass('active');
	});

	// Header Sticky
	$(window).on('scroll',function() {
		if ($(this).scrollTop() > 50){  
			$('.header-sticky').addClass("is-sticky");
		}
		else{
			$('.header-sticky').removeClass("is-sticky");
		}
	});

	// Home Slides
	$('.home-slides').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		items: 1,
		autoHeight: true,
		animateOut: "slideOutDown",
		animateIn: "slideInDown",
		smartSpeed: 750,
		autoplay: true,
		navText: [
			"<i class='fa fa-angle-left'></i>",
			"<i class='fa fa-angle-right'></i>"
		],
	});
	$(".home-slides").on("translate.owl.carousel", function(){
		$(".main-banner h4").removeClass("animated fadeInUp").css("opacity", "0");
		$(".main-banner h1").removeClass("animated fadeInUp").css("opacity", "0");
		$(".main-banner p").removeClass("animated fadeInUp").css("opacity", "0");
		$(".main-banner .btn").removeClass("animated fadeInUp").css("opacity", "0");
	});
	$(".home-slides").on("translated.owl.carousel", function(){
		$(".main-banner h4").addClass("animated fadeInUp").css("opacity", "1");
		$(".main-banner h1").addClass("animated fadeInUp").css("opacity", "1");
		$(".main-banner p").addClass("animated fadeInUp").css("opacity", "1");
		$(".main-banner .btn").addClass("animated fadeInUp").css("opacity", "1");
	});

	// Popup Video
	$('.popup-youtube').magnificPopup({
		disableOn: 320,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	// Progress Bar
	if($('.progress-line').length){
		$('.progress-line').appear(function(){
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width',percent+'%');
		},{accY: 0});
	}
	if($('.count-box').length){
		$('.count-box').appear(function(){
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);

			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}

	// Team Slides
	$('.team-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 30,
		navText: [
			"<i class='fa fa-angle-left'></i>",
			"<i class='fa fa-angle-right'></i>"
		],
		responsive: {
			0: {
				items: 1,
			},
			576: {
				items: 2,
			},
			768: {
				items: 2,
			},
			1200: {
				items: 3,
			}
		}
	});

	// Feedback Slides
	$('.feedback-slides').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		animateOut: 'fadeOut',
		autoplayHoverPause: true,
		autoplay: true,
		mouseDrag: false,
		items: 1,
		navText: [
			"<i class='fa fa-angle-left'></i>",
			"<i class='fa fa-angle-right'></i>"
		],
	});

	// Ripple JS
	$('.ripple-effect, .ripple-playing').ripples({
		resolution: 512,
		dropRadius: 20,
		perturbance: 0.04,
	});

	// Blog Slides
	$('.blog-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 30,
		navText: [
			"<i class='fa fa-angle-left'></i>",
			"<i class='fa fa-angle-right'></i>"
		],
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			1200: {
				items: 3,
			}
		}
	});

	// Partner Slides
	$('.partner-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 30,
		navText: [
			"<i class='fa fa-angle-left'></i>",
			"<i class='fa fa-angle-right'></i>"
		],
		responsive: {
			0: {
				items: 2,
			},
			576: {
				items: 3,
			},
			768: {
				items: 4,
			},
			1200: {
				items: 6,
			}
		}
	});

	// Image Popup
	$('.popup-btn').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	// Shorting
	$(function(){
		$('.shorting').mixItUp();
	});

	// Odometer JS
	$('.odometer').appear(function(e) {
		var odo = $(".odometer");
		odo.each(function() {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});

	// Text Animation
	let TxtType = function(el, toRotate, period) {
		this.toRotate = toRotate;
		this.el = el;
		this.loopNum = 0;
		this.period = parseInt(period, 10) || 2000;
		this.txt = '';
		this.tick();
		this.isDeleting = false;
	};
	TxtType.prototype.tick = function() {
		let i = this.loopNum % this.toRotate.length;
		let fullTxt = this.toRotate[i];
		if (this.isDeleting) {
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}
		this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
		let that = this;
		let delta = 200 - Math.random() * 100;
		if (this.isDeleting) {
			delta /= 2;
		}
		if (!this.isDeleting && this.txt === fullTxt) {
			delta = this.period;
			this.isDeleting = true;
		} else if (this.isDeleting && this.txt === '') {
			this.isDeleting = false;
			this.loopNum++;
			delta = 500;
		}
		setTimeout(function() {
			that.tick();
		}, delta);
	};
	window.onload = function() {
		var elements = document.getElementsByClassName('typewrite');
		for (var i=0; i<elements.length; i++) {
			var toRotate = elements[i].getAttribute('data-type');
			var period = elements[i].getAttribute('data-period');
			if (toRotate) {
				new TxtType(elements[i], JSON.parse(toRotate), period);
			}
		}
		// INJECT CSS
		var css = document.createElement("style");
		css.type = "text/css";
		css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #ffffff}";
		document.body.appendChild(css);
	};

	// Practicle JS One
	if(document.getElementById("particles-js")) particlesJS("particles-js", {
		"particles": {
			"number": {
				"value": 50, "density": {
					"enable": true, "value_area": 800
				}
			}
			, "color": {
				"value": "#ffffff"
			}
			, "shape": {
				"type": "circle", "stroke": {
					"width": 0, "color": "#000000"
				}
				, "polygon": {
					"nb_sides": 5
				}
				, "image": {
					"src": "img/github.svg", "width": 100, "height": 100
				}
			}
			, "opacity": {
				"value": 0.5, "random": false, "anim": {
					"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false
				}
			}
			, "size": {
				"value": 5, "random": true, "anim": {
					"enable": false, "speed": 40, "size_min": 0.1, "sync": false
				}
			}
			, "line_linked": {
				"enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1
			}
			, "move": {
				"enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "attract": {
					"enable": false, "rotateX": 600, "rotateY": 1200
				}
			}
		}
		, "interactivity": {
			"detect_on": "canvas", "events": {
				"onhover": {
					"enable": true, "mode": "repulse"
				}
				, "onclick": {
					"enable": true, "mode": "push"
				}
				, "resize": true
			}
			, "modes": {
				"grab": {
					"distance": 400, "line_linked": {
						"opacity": 1
					}
				}
				, "bubble": {
					"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3
				}
				, "repulse": {
					"distance": 200
				}
				, "push": {
					"particles_nb": 4
				}
				, "remove": {
					"particles_nb": 2
				}
			}
		}
		, "retina_detect": true, "config_demo": {
			"hide_card": false, "background_color": "#b61924", "background_image": "", "background_position": "50% 50%", "background_repeat": "no-repeat", "background_size": "cover"
		}
	});

	// Particles Js two
	if(document.getElementById("particles-js-two")) particlesJS("particles-js-two", {
		"particles": {
			"number": {
				"value": 150, "density": {
					"enable": true, "value_area": 800
				}
			}
			, "color": {
				"value": "#ffffff"
			}
			, "shape": {
				"type":"circle", "stroke": {
					"width": 0, "color": "#000000"
				}
				, "polygon": {
					"nb_sides": 5
				}
				, "image": {
					"src": "img/github.svg", "width": 100, "height": 100
				}
			}
			, "opacity": {
				"value":0.5, "random":true, "anim": {
					"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false
				}
			}
			, "size": {
				"value":10, "random":true, "anim": {
					"enable": false, "speed": 40, "size_min": 0.1, "sync": false
				}
			}
			, "line_linked": {
				"enable": false, "distance": 500, "color": "#ffffff", "opacity": 0.4, "width": 2
			}
			, "move": {
				"enable":true, "speed":6, "direction":"bottom", "random":false, "straight":false, "out_mode":"out", "bounce":false, "attract": {
					"enable": false, "rotateX": 600, "rotateY": 1200
				}
			}
		}
		, "interactivity": {
			"detect_on":"canvas", "events": {
				"onhover": {
					"enable": true, "mode": "bubble"
				}
				, "onclick": {
					"enable": true, "mode": "repulse"
				}
				, "resize":true
			}
			, "modes": {
				"grab": {
					"distance":400, "line_linked": {
						"opacity": 0.5
					}
				}
				, "bubble": {
					"distance": 400, "size": 4, "duration": 0.3, "opacity": 1, "speed": 3
				}
				, "repulse": {
					"distance": 200, "duration": 0.4
				}
				, "push": {
					"particles_nb": 4
				}
				, "remove": {
					"particles_nb": 2
				}
			}
		}
		, "retina_detect":true
	});
	
	// Go to Top
	$(function(){
		// Scroll Event
		$(window).on('scroll', function(){
			var scrolled = $(window).scrollTop();
			if (scrolled > 300) $('.go-top').addClass('active');
			if (scrolled < 300) $('.go-top').removeClass('active');
		});  
		// Click Event
		$('.go-top').on('click', function() {
			$("html, body").animate({ scrollTop: "0" },  500);
		});
	});

}(jQuery));
