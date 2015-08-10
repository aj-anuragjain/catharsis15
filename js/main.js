
(function($) {
"use strict";

	var rart = rart || {};

	var isMobile = function() {
								var check = false;
								(function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
								return check;
	   						};


	rart.parallax = function()
	{
		function parallax(){
			if ( $().parallax ) {
				$('.parallax .bg-parallax').each(function(){
					$(this).parallax("50%", 0.3);
				})
			}
		}
		if(!isMobile())
		{
			parallax();
			$(window).resize(function(){
				parallax();
			});
		}
	};



	/*------------------SCROLL ------------------*/

	rart.navigation = function(){
	    var lastId,
	        cur,
	        scrollItems = $("nav ul li a").map(function() {
				var href = $(this).attr('href');
                var hash;
                if (href) hash = href.split('#')[1];
                var item = $('#' + hash);
	            if (item.length) return item;
	        });


        $('#nav-desktop').before($('#nav-desktop').clone().attr('id', 'nav-mobile').attr('class', 'nav-normal nav-mobile'));
        $('.nav-mobile .container ul').before($('<div class="mobile-btn"><i class="icon-align-justify"></i></div>'));

        $('.mobile-btn, .nav-mobile ul a').click(function() {
            $('.nav-mobile ul').toggle();
        });

		$(".nav-normal").sticky({ topSpacing: 0, className: 'sticky', wrapperClassName: 'main-menu-wrapper' });


		if($('body').hasClass('onepage')){
			$('.nav-circle').length>0 ? $('.nav-circle').hide() : '';

			$('nav ul li a, .scroll').on('click',function(e){

				$("nav ul li a").parent().removeClass('active');
				$(this).parent().addClass('active');


				var href = $(this).attr('href');
				if ( $(href).length > 0 )
				{
					var offset_top,
					nav = 0;
					if($('#nav-desktop').is(':hidden')){
						nav = $('#nav-mobile').height();
					}
					else if($('#nav-desktop').hasClass('nav-normal')){
						nav = $('#nav-desktop').height();
					}
					offset_top = $(href).offset().top - nav;
					$('html,body').animate({ scrollTop: offset_top+1}, 1000, 'easeOutCirc');
					e.preventDefault();
				}
			});

    	}
		$('.nav-slide .container').append('<a href="#" class="nav-button"><span>Menu</span></a><div class="nav-overlay"></div>');
		$('.nav-button').on('touchstart click', function(e){
			e.stopPropagation();
			e.preventDefault();
			if($('.nav-slide').hasClass('open')){
				$('.nav-slide').removeClass('open');
			}
			else{
				$('.nav-slide').addClass('open');
				$('.nav-overlay').on('touchstart click', function(){
					$('.nav-slide').removeClass('open');
				});
			}
		});


        $(window).scroll(function(){

			if($('body').hasClass('onepage')){
				
		        var fromTop = $(this).scrollTop();

				fromTop >= $(window).height() ? $('.nav-circle').fadeIn(): $('.nav-circle').fadeOut();

	            var cur = scrollItems.map( function()
	            {
						var offset_top,
						nav = 0;
						if($('#nav-desktop').is(':hidden')){
							nav = $('#nav-mobile').height();
						}
						else if($('#nav-desktop').hasClass('nav-normal')){
							nav = $('#nav-desktop').height();
						}
						offset_top = $(this).offset().top - nav;
		                if (offset_top <= fromTop) return this;
		            });

	            cur = cur[cur.length-1];
	            var id = cur && cur.length ? cur[0].id : "";

	            if (lastId !== id) {
	               lastId = id;
	               $("nav ul li a").parent().removeClass("current").end().filter("[href=#"+id+"]").parent().addClass("current").removeClass('active');
	            }
        	}
        });



	};

	
	//sroll lock

	/*------------------slider  ------------------*/



	rart.bxslider = function() {
		if ( $().bxSlider ) {
			$('.bxslider').each(function(){
				var $this = $(this);
				$this.bxSlider({
					mode 			: 	$this.data('mode') != 'undefined' ? $this.data('mode') : "horizontal",
					speed			:	$this.data('speed') != 'undefined' ? $this.data('speed') : 2000,
					controls		:	$this.data('controls') != 'undefined' != 'undefined' ? $this.data('controls') : true,
					nextSelector 	: 	$this.data('nextselector') != 'undefined' ? $this.data('nextselector') : '',
					prevSelector	: 	$this.data('prevselector') != 'undefined' ? $this.data('prevselector') : '',
					pager			:	$this.data('pager') != 'undefined' ? $this.data('pager') : true,
					pagerSelector	: 	$this.data('pagerselector') != 'undefined' ? $this.data('pagerselector') : '',
					pagerCustom		: 	$this.data('pagercustom') != 'undefined' ? $this.data('pagercustom') : '',
					auto			:	$this.data('auto') != 'undefined' ? $this.data('auto') : false,
					autoHover		: 	$this.data('autoHover') != 'undefined' ? $this.data('autoHover') : true,
					adaptiveHeight	: 	$this.data('adaptiveheight') != 'undefined' ? $this.data('adaptiveheight') : true,
					useCSS			: 	$this.data('useCSS') != 'undefined' ? $this.data('useCSS') : true,
					captions		: 	$this.data('caption') != 'undefined' ? $this.data('captions') : false,
					nextText		: 	'<i class="icon-angle-right">',
					prevText		: 	'<i class="icon-angle-left">',
					preloadImages 	: 	'all',
					responsive 		: 	true
				});
			});
		}
	};




	/*------------------ANIMATION ------------------*/

	rart.animated = function(){

		// For counter
		function counter(target){
			var num = target.data('num');
			if ( $().countTo ) {
				target.find('.number').delay(6000).countTo({
		            from: 0,
		            to: num,
		            speed: 3000,
		            refreshInterval: 100
	        	});
			}
		}
		// For piechart
		function piechart(target){
			if(target === undefined)
				target = $('.piechart');
			if ( $().easyPieChart ) {
				target.easyPieChart({
					animate: 3000,
					barColor: 'bbb',
					trackColor: '444',
					easing: 'easeOutBounce',
					size: 130,
					lineWidth: 3,
					lineCap: 'round',
					scaleColor: false,
					onStep: function(from, to, percent) {
						$(this.el).find('span').text(Math.round(percent));
					}
				});
			}
		}
		if (!isMobile() && $().appear )
		{
	            $('*[data-animated]').addClass('animated');

			 	$('.animated').appear(function(i) {
	                var $this    = $(this),
	                    animated = $(this).data('animated');

	                setTimeout(function () {
	                    $this.addClass(animated);
	                }, 0 * $this.index('.animated'));
				});

			 	$('.stat-counter').appear(function() {
			 		counter($(this));
				});

			 	$('.piechart').appear(function() {
					piechart($(this));
				});
   		}
   		else{
   			piechart();
   		}

	};


	/*------------------TWITTER FEED  ------------------*/

	rart.twitter = function(){
		if ( $().tweet ) {
			$('.latest-tweets').each(function(){
				$(this).tweet({
				username: $(this).data('username'),
				join_text: "auto",
				avatar_size: 48,
				count: $(this).data('number'),
				auto_join_text_default: "we said,",
				auto_join_text_ed: "we",
				auto_join_text_ing: "we were",
				auto_join_text_reply: "we replied to",
				auto_join_text_url: "we were checking out",
				loading_text: "loading tweets...",
				modpath: "./twitter/"
			});

		  	$('.latest-tweets').find('ul').addClass('slider');
		  	if ( $().bxSlider ) {
				var $this = $('.latest-tweets');
				$('.latest-tweets .slider').bxSlider({
					mode 			: 	$this.data('mode') != 'undefined' ? $this.data('mode') : "horizontal",
					speed			:	$this.data('speed') != 'undefined' ? $this.data('speed') : 2000,
					controls		:	$this.data('controls') != 'undefined' != 'undefined' ? $this.data('controls') : true,
					nextSelector 	: 	$this.data('nextselector') != 'undefined' ? $this.data('nextselector') : '',
					prevSelector	: 	$this.data('prevselector') != 'undefined' ? $this.data('prevselector') : '',
					pager			:	$this.data('pager') != 'undefined' ? $this.data('pager') : true,
					pagerSelector	: 	$this.data('pagerselector') != 'undefined' ? $this.data('pagerselector') : '',
					pagerCustom		: 	$this.data('pagercustom') != 'undefined' ? $this.data('pagercustom') : '',
					auto			:	$this.data('auto') != 'undefined' ? $this.data('auto') : false,
					autoHover		: 	$this.data('autoHover') != 'undefined' ? $this.data('autoHover') : true,
					adaptiveHeight	: 	$this.data('adaptiveheight') != 'undefined' ? $this.data('adaptiveheight') : true,
					useCSS			: 	$this.data('useCSS') != 'undefined' ? $this.data('useCSS') : true,
					nextText		: 	'<i class="icon-angle-right">',
					prevText		: 	'<i class="icon-angle-left">',
					preloadImages 	: 	'all',
					responsive 		: 	true
				});
			}
		});
		}
	};


	/*------------------PROFOLIO ------------------*/


	rart.portfolio = function(){

		var portfolio = portfolio || {},
		$portfolioItems       = $('#portfolio-items'),
		$filtrable            = $('#portfolio-filter');

		portfolio.fullWidth = function(){

	        function portfolioCol() {
	            var width = $(window).width(),
	                column = 1;

				if (width > 990) {
					column = 4;
				} else if (width > 767) {
					column = 3;
				} else if (width > 399) {
					column = 2;
				} else{
					column = 1;
				}

	            return column;
	        }

	        function setCol() {

	            var width = $(window).width(),
	                column = portfolioCol(),
	                articleWidth =  Math.floor(width/column);

	            $portfolioItems.find('article').each(function () {
	                $(this).css( {
	                    width : articleWidth + 'px'
	                });
	            });
	        }


	        $(window).load(function(){
				setCol();
	            $portfolioItems.isotope({
					animationEngine: 'best-available',
					animationOptions: {
							duration: 250,
							easing: 'easeInOutSine',
							queue: false
				   }
				});
	        });

			$(window).bind('resize', function () {
				setCol();
				$portfolioItems.isotope('reLayout');
			});

	        $filtrable.find('a').click(function(e) {
	            var currentOption = $(this).data('cat');

	            $filtrable.find('a').removeClass('active');
	            $(this).addClass('active');

	            if (currentOption !== '*') {
	            	currentOption = '.' + currentOption;
	            }

	           	$portfolioItems.isotope({filter : currentOption});
	            return false;
	        });

		};



		portfolio.ajax = function(){


			function portfolioInit() {

                var newHash      = "",
                    $mainContent = $("#portfolio-ajax"),
                    $pageWrap    = $("#portfolio-wrap"),
					root         = '#!works/',
                    rootLength   = root.length,
                    url;

                $portfolioItems.find("a").click(function() {
                    window.location.hash = $(this).attr("href");
                    return false;
                });

                $(window).bind('hashchange', function(){

					newHash = window.location.hash;
				    url = newHash.replace(/[#\!]/g, '' );
                    if (newHash.substr(0,rootLength) == root) {
                    	if($pageWrap.is(':hidden')){
                    		$pageWrap.slideDown('3000', function(){});
                    	}
						$pageWrap.niceScroll({
				            cursorcolor:"#666",
				            cursorwidth:6,
				            cursorborder: 0,
				            cursorborderradius: 0
				        });
                        $pageWrap.append('<div id="preloader"></div>');
                        $mainContent.load(url + " .single-portfolio", function(xhr, statusText, request){
                        	if(statusText == "success"){
								$mainContent.imagesLoaded().then(function()
								{
									$('.media-container').fitVids();
			                    	rart.bxslider();
									setTimeout(function () {
		                        		$pageWrap.find('#preloader').remove();
		                            }, 300);
		                    	});
							}
							if(statusText == "error"){
								$mainContent.html('<div class="row pad-top pad-bottom"><div class="col-md-12 pad-top pad-bottom"><div class="alert-message error"><p>No Content !</p></div></div></div>');
		                        $pageWrap.find('#preloader').remove();
							}
	                        closeProject();
	                        nextProject();
	                        prevProject();
                       });

	                   $("#portfolio-items article").removeClass("current");
	                   $("#portfolio-items a[href='" + newHash + "']").parent().addClass("current");
                    }
                    else if(newHash == '')
                    {
                    	$('#portfolio-wrap').fadeOut('100', function() {
                        	$('.single-portfolio').remove();
                    	});
                    }
                });

                $(window).trigger('hashchange');
            }



            function closeProject() {
				$('#close-project').on('click', function() {
                    $('#portfolio-wrap').fadeOut('100', function() {
                        $('.single-portfolio').remove();
                    });
                    history.pushState('', document.title, window.location.pathname);
                    window.location.hash = '#_';
	                return false;
	            });
            }

            function nextProject() {
                $("#next-project").on("click", function() {
                    window.location.hash = $("#portfolio-items .current").next().find('a').attr("href");
                    return false;
                });
            }


            function prevProject() {
                $("#prev-project").on("click", function() {
                    window.location.hash = $("#portfolio-items .current").prev().find('a').attr("href");
                    return false;
                });
            }

		};
		portfolio.fullWidth();
		portfolio.ajax();
	};





	/*------------------CONTACT ------------------*/


	rart.contact = function(){

	$('.contact-form').each(function(){
		var $this = $(this);
		$this.submit(function() {
			var str = $this.serialize();
			$this.find('.result').html('<h1 class="text-center"><img src="img/pending.gif" alt="loading"></h1>')
			$.ajax({
				type:	"POST",
				url:	$this.attr('action'),
				data:	str,
				success: function(msg) {
					var result;
	    			if(msg == 'OK') {
	    				result = '<div class="alert-message success">Message was sent!</div>';
	    			} else {
	    				result = '<div class="alert-message warning">' + msg + '</div>';
	    			}
	    			$this.find('.result').html(result);
				}
			});
			return false;
		});	// submit

								   });	// each contactform
	};	// contact



	/*----------------- MAP ------------------*/

	rart.googleMap = function(){

		if($('#map_canvas').length == 0)
			return;

		var stylez = [
		    {
		      featureType: "all",
		      elementType: "all",
		      stylers: [
		        { saturation: -100 } // <-- THIS
		      ]
		    }
		];

		var mapOptions = {
			    zoom: 16,
			    center: new google.maps.LatLng(36.1888, 44.013),
			    mapTypeId: google.maps.MapTypeId.ROADMAP,
				mapTypeControl: false,
				scrollwheel: false,
				draggable: true,
			    panControl: true,
			    zoomControl: false
		  	}

		var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

		var mapType = new google.maps.StyledMapType(stylez, { name:"" });
		map.mapTypes.set('', mapType);
		map.setMapTypeId('');

		var contentString = '<h3>ThemeCafe Studio</h3><br>';

		var infowindow = new google.maps.InfoWindow({
			content: contentString
		});

		var companyImage = new google.maps.MarkerImage('img/yage.png',
			new google.maps.Size(50,50),
			new google.maps.Point(0,0),
			new google.maps.Point(25,25)
		);



		var companyPos = new google.maps.LatLng(36.1888, 44.013);

		var companyMarker = new google.maps.Marker({
			position: companyPos,
			map: map,
			icon: companyImage,
			title:"Creative News",
			zIndex: 3000});


		google.maps.event.addDomListener(window, "resize", function() {
			var center = map.getCenter();
			google.maps.event.trigger(map, "resize");
			map.setCenter(center);
		});

		infowindow.open(map,companyMarker);
		google.maps.event.addListener(companyMarker, 'click', function() {
			infowindow.open(map,companyMarker);
		});

	};



	/*------------------INIT PLUGIN ------------------*/


	rart.initPlugin = function(){

		// For scrollbar

		if ( $().niceScroll ) {
			$("html").niceScroll({
	            cursorcolor:"#ffd600",
	            cursorwidth:10,
	            cursorborder: 0,
	            cursorborderradius: 0,
	            zindex: 2000

	        });
		}
		//  For TimeLine
		if ( $().timelinr && $('#timeline').length >0) {
			$().timelinr({
				arrowKeys: 'true',
				orientation: 'vertical',
				issuesSpeed: 	300,
				datesSpeed: 	100,
				startAt:		6
			});
		}


		// For responsive media
		if ( $().fitVids ) {
			$('.media-container').fitVids();
		}

	};

	/*------------------CODES ------------------*/


	rart.shortcode = function(){

		// For Accordion
		$('.accordion .accordion-title').click(function(){
			if( !$(this).is('.active') ) {
				$(this).closest('.accordions').find('.accordion-title').removeClass('active').next().slideUp(300);
				$(this).toggleClass('active').next().slideDown(300);
			}
			return false;
		});

		// For toggle
		$(".toggle .toggle-title").click(function(){
			if( $(this).hasClass('active') ){
				$(this).removeClass("active").closest('.toggle').find('.toggle-inner').slideUp(200);
			}
			else{
				$(this).addClass("active").closest('.toggle').find('.toggle-inner').slideDown(200);
			}
			return false;
		});

		// For alert-message
		$(".alert-message .close").on('click',function(){
			$(this).parent().animate({'opacity' : '0'}, 300).slideUp(300);
			return false;
		});

		// For tab
		$('.tabset .panel').hide();
		$('.tabset .panel:first').show();
		$('.tabset ul li:first a').addClass('selected');

		$('.tabset ul li a').click(function(){
			$('.tabset ul li a').removeClass('selected');
			$(this).addClass('selected');
			var currentTab = $(this).attr('href');
			$('.tabset .panel').hide();
			$(currentTab).show();
			return false;
		});

	};



	/*------------------SLIDER------------------*/

	rart.fullscreen_slider = function(){

		if ( $().supersized ) {
			$(".fullscreen-slider").each(function(){
				var $this = $(this);
				var i = 0;
				var data = $this.data('images');
				var slides = [];
				while( i < data.length ) {
					slides.push({image: data[i]});
					i++;
				}
				$this.supersized({
					autoplay				:	$this.data('autoplay') != 'undefined' ? $this.data('autoplay') : true,
					slide_interval          :   $this.data('slideinterval') != 'undefined' ? $this.data('slideinterval') : 6000,		// Length between transitions
					transition              :   $this.data('transition') != 'undefined' ? $this.data('transition') : 1, 		// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
					transition_speed		:	$this.data('transitionspeed') != 'undefined' ? $this.data('transitionspeed') : 1000,		// Speed of transition
			        slides: slides,
					fit_portrait			:	false,
					});
			});
		}
	};


	/*------------------INIT FUNCTION ------------------*/

	$(document).ready(function() {

		rart.navigation();
		rart.parallax();
		rart.animated();
		rart.twitter();
		rart.portfolio();
		rart.bxslider();
		rart.contact();
		rart.initPlugin();
		rart.shortcode();
		rart.fullscreen_slider();
	});

	/*------------------LOADER------------------*/

  //<![CDATA[
    $(window).load(function() {
        $('body').css({'overflow':'visible'});
        $('#preloader').delay(2000).animate({ height: 0}, 1000, 'easeOutCirc');
        rart.googleMap();
      })
  //]]>


})(jQuery);



$.fn.imagesLoaded = function () {

    var $imgs = this.find('img[src!=""]'),
        noImg = $.Deferred();


    if (!$imgs.length) {return noImg.resolve().promise();}


    var dfds = [];
    $imgs.each(function(){
        var dfd = $.Deferred();
        dfds.push(dfd);
        var img = new Image();
        img.onload = function(){dfd.resolve();}
        img.src = this.src;
    });


    return $.when.apply($,dfds);
}



$.fn.countTo = function(options) {

    options = $.extend({}, $.fn.countTo.defaults, options || {});

    var loops = Math.ceil(options.speed / options.refreshInterval),
        increment = (options.to - options.from) / loops;

    return $(this).delay(1000).each(function() {
        var _this = this,
            loopCount = 0,
            value = options.from,
            interval = setInterval(updateTimer, options.refreshInterval);

        function updateTimer() {
            value += increment;
            loopCount++;
            $(_this).html(value.toFixed(options.decimals));

            if (typeof(options.onUpdate) == 'function') {
                options.onUpdate.call(_this, value);
            }

            if (loopCount >= loops) {
                clearInterval(interval);
                value = options.to;

                if (typeof(options.onComplete) == 'function') {
                    options.onComplete.call(_this, value);
                }
            }
        }
    });
};

$.fn.countTo.defaults = {
    from: 0,  
    to: 100,  
    speed: 1000, 
    refreshInterval: 100,  
    decimals: 0, 
    onUpdate: null,  
    onComplete: null,  
};

$('ul.hen').mousemove(function()	{
	
	$('#home-content > div > div > div > div.riz-text-e').css('font-size','24.5px');
	
});

$('ul.hen').mouseleave(function()	{
	$('#home-content > div > div > div > div.riz-text-e').css('font-size','24px');
	
});

