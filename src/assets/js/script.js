/*!
 * 
 * Agile HTML5 Template v.1.0.0
 * 
 */
jQuery(function($){
	"use strict";

	/***** Main Menu for Single page 
	-------------------------------------------------------------- ***/
	function singlePageMenu(){
		if ( $('.single-page').length) {

			$('.main-nav').each(function(){
	
					var $active, $content, $links = $(this).find('a.on'),
					$li = $(this).find('a').closest('li');
				
					$active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
					$content = $($active.attr('href'));
				
					$(this).on('click', 'a', function(e){
			
						$li.removeClass('active');
				
						$active = $(this);
						$content = $($(this).attr('href'));
		
						$(this).closest('li').addClass('active');
						$("body,html").animate({scrollTop:$content.position().top + 1}, 1000);
						
						e.preventDefault();
					});
			});

		}
	}	/*** /singlePageMenu ***/

	/**** Create Fixed on page scroll ***/
	function scrolledHeader(){
		if ( $('.stickable-nav').length ) {
			//var menuTrigger = $('.sticky-menu-trigger').outerHeight() - 35;
			if ( $(document).scrollTop() > 1){
				$('body').addClass('scrolled');
			}
			else {
				$('body').removeClass('scrolled');
			}
		}
	}


	singlePageMenu();
	scrolledHeader();

	$(window).scroll( function(){
		scrolledHeader();
	});


	$('.navbar-toggle').on('click', this, function(){
		// $('.nav-controls > li').not(this).removeClass('open');
		$(this).toggleClass('open');
	});


	/*** Play and Pause videos ****/

	$('.vid-trigger').on('click', this, function(){

		var $this = $(this).parents('.video-wrapper'),
		vidtoplay = $this.find('.bg-video');

		if ( $(vidtoplay)[0].paused === false) {
			$(vidtoplay)[0].pause();
		} else 
		{
			$(vidtoplay)[0].play();
		}

		$this.toggleClass('open');

	});

	$('.vid-button').on('click', this, function(e){

		var vidparent = $(this).parents('.video-wrapper'),
			vidToPlay = vidparent.find('.bg-video');

			$(vidToPlay)[0].play()
				vidparent.addClass('open');

		e.preventDefault();
	});

	/*** Carousel Single ***/
	if ( $('.carousel-single').length) {
		
		$(".carousel-single").each(function() {

			var cSingle = $(this),
				trans = cSingle.data('trans'),
				autoplay = cSingle.data('autoplay'),
				caroPagin = cSingle.data('paginate'),
				autoHeight = cSingle.data('auto-height'),
				caroNext = '.' + cSingle.data('btn-next'),
				caroPrev = '.' + cSingle.data('btn-prev');
		
			cSingle.owlCarousel({
				autoPlay: autoplay,
				singleItem: true,
				pagination: caroPagin,
				autoHeight : autoHeight,
				transitionStyle: trans
			});

			$(caroNext).on('click', this, function(e){
				cSingle.trigger('owl.next');
				e.preventDefault();
			});
			$(caroPrev).on('click', this, function(e){
				cSingle.trigger('owl.prev');
				e.preventDefault();
			});
			
		});

	}

	/*** Carousel Multi ***/
	if ( $('.carousel-multiple').length) {

		$(".carousel-multiple").each(function() {

			var cMulti = $(this),
				mAutoplay = cMulti.data('autoplay'),
				mCaroNext = '.' + cMulti.data('btn-next'),
				mCaroPrev = '.' + cMulti.data('btn-prev');

			cMulti.owlCarousel({
				autoPlay: mAutoplay,
				pagination: false,
				items : 5,
				itemsDesktop : [1200,4],
				itemsDesktopSmall : [992,3],
				itemsTablet: [768,2],
				itemsMobile : [480,1]
			});

			$(mCaroNext).on('click', this, function(){
				cMulti.trigger('owl.next');
			});
			$(mCaroPrev).on('click', this, function(){
				cMulti.trigger('owl.prev');
			});
		
		});
	
	}

	if ( $('.carousel-partners').length ) {

			var cPartner = $('.carousel-partners');

			cPartner.owlCarousel({
				autoPlay: false,
				pagination: false,
				items : 4,
				itemsDesktop : [1200,4],
				itemsDesktopSmall : [992,3],
				itemsTablet: [768,2],
				itemsMobile : [480,1]
			});

			$('.parner-next').on('click', this, function(e){
				cPartner.trigger('owl.next');
				e.preventDefault();
			});
			$('.parner-prev').on('click', this, function(e){
				cPartner.trigger('owl.prev');
				e.preventDefault();
			});

	}


	if ( $('.projects-carousel').length ) {

			var owlMemberSelection = $(".projects-carousel"),
				owlParent = owlMemberSelection.parents('.projects-section');

			if ( owlParent.hasClass('grid') ) {

				owlMemberSelection.owlCarousel({
					autoPlay: true,
					pagination: false,
					items : 2,
					itemsDesktop : [1200,2],
					itemsDesktopSmall : [992,1],
					itemsTablet: [768,1],
					itemsMobile : [480,1],
					jsonPath : "js/json/projects-grid-all.json",
					lazyLoad : true
				});

			}

			else {

				owlMemberSelection.owlCarousel({
					autoPlay: true,
					pagination: false,
					items : 5,
					itemsDesktop : [1200,3],
					itemsDesktopSmall : [992,2],
					itemsTablet: [768,2],
					itemsMobile : [480,1],
					jsonPath : "js/json/projects-all.json",
					lazyLoad : true
				});

			}


		$('[data-target-project]').on('click', this, function(e){

			var $thisLink = $(this),
				liAll = $thisLink.closest('ul').children('li').not(this).closest('li'),
				li = $thisLink.closest('li'),
				loadPath = $thisLink.data('target-project');

				liAll.removeClass('active');
				li.addClass('active');

			
			owlMemberSelection.data('owlCarousel').reinit({
				jsonPath : "js/json/projects-" + loadPath + ".json"
			});
	
			e.preventDefault();

		});

	}


	/*** prettyphoto lightbox ***/
	if($("a[data-rel^='prettyPhoto']").length){
		$("a[data-rel^='prettyPhoto']").prettyPhoto({
			theme:'light_square',
			autoplay_slideshow: false,
			social_tools: false
		});
	}

	$('.form-group-auto .form-control').on('focus', this, function(){
		$(this).closest('.form-group-auto').addClass('focused');
	});
	$('.form-group-auto .form-control').on('blur', this, function(){
			if ( $(this).val() === '') {
				$(this).closest('.form-group-auto').removeClass('focused');
			}
	});

	if ( $('.scrollbar').length ){
		$('.scrollbar').mCustomScrollbar({
			theme:"minimal",
			scrollInertia:100
		});
	}

	var blogBox = $('.blog-box').length;
	$('.pager-text').text(blogBox);

	$('[data-scroll-to]').on('click', this, function(e){
		var $this = $(this),
			cont = $('.scrollbar'),
			data = $this.data("scroll-to"),
			ht = $('.blog-box').height(),
			to = ( data==="next" )  ? ++ht : --ht;
			// to =  $(cont).find(".mCSB_container").find(data);
			$(cont).mCustomScrollbar("scrollTo",to);

			e.preventDefault();

	});

	$('.btn-trigger-text').on('click', this, function(e){
		$('.blog-box-single').addClass('open-text');
		e.preventDefault();
	});
	$('.btn-close-text').on('click', this, function(e){
		$('.blog-box-single').removeClass('open-text');
		e.preventDefault();
	});



	/*** Main Menu 2 ****/
	$('.menu-button').on('click', this, function(e){
		$('.menu-button').toggleClass('open');
		$('body').toggleClass('menu-opened');

		$('.site-navigation').removeClass('search-trigger');
		$('.search-cover').removeClass('search-cover-opened');
		$('ul.site-nav').removeClass('menu-trigger');
		$('ul.site-nav li').removeClass('open');

		e.preventDefault();
	});

	$('.site-nav li').has('ul')
		.prepend('<span class="back-btn"><i class="icon-angle-left"></i></span>')
		.children('a').attr('data-target', 'child');


	$('a[data-target="child"]').on('click', function(e){
		$(this).parents('ul.site-nav').addClass('menu-trigger');
		$(this).closest('li').addClass('open');
		e.preventDefault();
	});
	$('.back-btn').on('click', function(e){
		$(this).parents('ul.site-nav').removeClass('menu-trigger');
		$(this).closest('li').removeClass('open');
		e.preventDefault();
	});

	$('[data-target-link]').on('click', this, function(e){

		var txt = $(this).attr("href");

		$('[data-target-link]').not(this).closest('li').removeClass('active');
		$(this).closest('li').addClass('active');

		$('.section-targeted').not(txt).removeClass('on');
		$(this).parents('.scroll-buttons').removeClass('open');
		$(txt).addClass('on');
		e.preventDefault();

	});

	$('.buttons-trigger').on('click', this, function(e){
		$(this).parents('.scroll-buttons').addClass('open');
		e.preventDefault();
	});

	$('.search-button').on('click', this, function(){
		$('.site-navigation').addClass('search-trigger');
		$('.search-cover').addClass('search-cover-opened');
	});

	$('.search-cover').on('click', this, function(){
		$('.site-navigation').removeClass('search-trigger');
		$(this).removeClass('search-cover-opened');
	});

	$('.btn-comments').on('click', this, function(e){
		$('.comments-area').addClass('open');
		e.preventDefault();
	});
	$('.close-comments').on('click', this, function(e){
		$('.comments-area').removeClass('open');
		e.preventDefault();
	});


	$('.options-trigger').on('click', this, function(){
		$(this).closest('.list-options').toggleClass('open');
	});

	$('.btn-trigger-proj').on('click', this, function(e){
		$('.projects-section-single').toggleClass('open');
		e.preventDefault();
	});


});


jQuery(document).ready(function($){

	$('#contactform_forms').submit(function(){

		var action = $(this).attr('action');
		
		$("#message").slideUp(750,function() {
		$('#message').hide();



 		$('#submit_btns')
			.after('<img src="images/AjaxLoader.gif" class="loader" />')
			.attr('disabled','disabled');
		

		$.ajax({
			url: 'contact.php',
			type: 'POST',
			data: {
					contact_name: $('#contact_name').val(),
					contact_phone: $('#contact_phone').val(),
					contact_email: $('#contact_email').val(),
					contact_message: $('#contact_message').val(),
				},
			success: function(data){
				

				document.getElementById('message').innerHTML = data;
				$('#message').slideDown('slow');
				$('#contactform_forms img.loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit_btns').removeAttr('disabled');
				if(data.match('success') != null) $('#contactform_forms').slideUp('slow');
			}
		});

		});

		return false;

		return false;
	});

});


