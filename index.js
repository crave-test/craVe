		$(document).ready(function() {
			/*Loader Wrapper Functionality*/
			setTimeout(function(){
		        $('body').addClass('loaded');
		    }, 3000);

    		/*Navigation Hamburger Icon (Mobile Only)*/
    		$('#nav-icon').click(function(){
    			$(this).toggleClass('open');
    			$('.mobile-nav').toggle(200);
    		});
    		/*Background Image Slider*/
    		var images = ["images/foodpics/burger&fries.jpg", "images/foodpics/sesametofu.jpg", "images/foodpics/sushi.jpg", "images/foodpics/asianlunch.jpg", ""]

    		/*Autofill user geolocation data in address field*/
    		$('#location').click(function(){
				if (navigator.geolocation) {
					$('input[type="text"]').attr('placeholder','Enter address manually');
				    navigator.geolocation.getCurrentPosition(function(position){
				    	$('input[type="text"]').val('Position: ' + position.coords.latitude + ',' + position.coords.longitude);
				    });
				} else {
				    $('input[type="text"]').attr('placeholder','Enter address manually');
				}
    		});

    		/*To scroll down when the down button is clicked*/
    		$('a[href*="#"]:not([href="#"])').click(function() {
	            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	              var target = $(this.hash);
	              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	              if (target.length) {
	                $('html, body').animate({
	                  scrollTop: target.offset().top
	                }, 1000);
	                return false;
	              }
	            }
	        });

	        var t = 40;
            var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
            if(!isMobile){
                $(document).scroll(function(){
	                if($(this).scrollTop() > t) {   
	                    $('header').css('background-color', 'rgba(0,0,0,0.8)');
	                } else {
	                    $('header').css('background-color', 'rgba(0,0,0,0.0)');
	                }
                });
                $('#header').bind('mouseover', function () { $('header').css('background-color', 'rgba(0,0,0,0.8)'); });
                $('#header').bind('mouseout', function () { 
                    if($(this).offset().top < t){
                        $('header').css('background-color', 'rgba(0,0,0,0.0)');
                    }
                });
            }
    	});