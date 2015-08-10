;(function(){
	function setEqualHeight(columns) {
	    var tallestcolumn = 0;

	    columns.each(function() {
	        currentHeight = $(this).height();
	        if(currentHeight > tallestcolumn) {
	            tallestcolumn  = currentHeight;
	            }
	        }
	    );

		columns.height(tallestcolumn);
	}

	var delay = (function(){
		var timer = 0;
		
		return function(callback, ms){
			clearTimeout (timer);
			timer = setTimeout(callback, ms);
		};
	})();

	var app = {
		init: function(){

			// Sudoslider services slider
			$("#services-slider").sudoSlider({
				customLink:'a.servicesLink',
				speed: 400,
				responsive: true,
				prevNext: true,
				useCSS: true,
				continuous: true,
				updateBefore: true
			});

		}
	};

	app.init();
	$(function(){

		$(window).load(app.windowLoad);
	});

	$(window).resize(function() {
	    delay(function(){
	        $('.same-height').css('height','auto'); //solve for all you browser stretchers out there!
	        setEqualHeight($('.same-height'));
	    }, 500);
	});

})(jQuery)