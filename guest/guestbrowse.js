$(document).ready(function(){

        /*ALL MY JQUERY USED FOR STYLING*/
            if($("#order-box").find("#itempic").length === 0){
                $(".thumb-rating").css('margin-left', '3.5vw');
            }      

        /*Nav Icon*/
            $('#nav').click(function(){
                $(this).toggleClass('open');
                $('.mobile-nav').toggle(200);
            });
            
        /*Header Stuff*/
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
            }
        /*Tab Buttons*/
            $('#filters-button').click(function(){
                $(this).addClass('active');
                $('#nearby-button').removeClass('active');
                $('#map-button').removeClass('active');

                $('#filters-page').show();
                $('#nearby-page').hide();
                $('#map-page').hide();
            });
            $('#nearby-button').click(function(){
                $(this).addClass('active');
                $('#filters-button').removeClass('active');
                $('#map-button').removeClass('active');

                $('#nearby-page').show();
                $('#filters-page').hide();
                $('#map-page').hide();
            });
            $('#map-button').click(function(){
                $(this).addClass('active');
                $('#nearby-button').removeClass('active');
                $('#filters-button').removeClass('active');

                $('#map-page').show();
                $('#nearby-page').hide();
                $('#filters-page').hide();
            });

        /*Restaurant Box Stuff*/
            $('.restaurant-box').click(function(){
                if($('#restaurant-page').hasClass('rollback')){
                    $('#restaurant-page').removeClass('rollback');
                }
                if($('#backfade').hasClass('rollback')){
                    $('#backfade').removeClass('rollback');
                }
                $('#restaurant-page').addClass('rollout');
                $('#backfade').addClass('rollout');
                $('#side-rollback-icon').toggle();
            });
            $('#backfade').click(function(){
               if($('#restaurant-page').hasClass('rollout')){
                    $('#side-profile').removeClass('rollout');
                }
                if($('#backfade').hasClass('rollout')){
                    $('#backfade').removeClass('rollout');
                }
                
                $('#restaurant-page').addClass('rollback');
                $('#backfade').addClass('rollback');
                $('#side-rollback-icon').toggle();
            });
            $('#side-rollback-icon').click(function(){
                if($('#restaurant-page').hasClass('rollout')){
                    $('#side-profile').removeClass('rollout');
                }
                if($('#backfade').hasClass('rollout')){
                    $('#backfade').removeClass('rollout');
                }
                
                $('#restaurant-page').addClass('rollback');
                $('#backfade').addClass('rollback');
                $(this).toggle();
            });

            $("#menu-tab").click(function(){
                $('#categories').show();
                $("#rewards").hide();
                $('#deals').hide();
                if(!$(this).hasClass("active")){$(this).addClass("active");}
                if($("#rewards-tab").hasClass("active")){$("#rewards-tab").removeClass("active");}
                if($("#deals-tab").hasClass("active")){$("#deals-tab").removeClass("active");}
            });

            $("#rewards-tab").click(function(){
                $("#rewards").show();
                $('#categories').hide();
                $('#deals').hide();
                if(!$(this).hasClass("active")){$(this).addClass("active");}
                if($("#menu-tab").hasClass("active")){$("#menu-tab").removeClass("active");}
                if($("#deals-tab").hasClass("active")){$("#deals-tab").removeClass("active");}
            });

            $("#deals-tab").click(function(){
                $("#deals").show();
                $("#rewards").hide();
                $("#categories").hide();
                if(!$(this).hasClass("active")){$(this).addClass("active");}
                if($("#menu-tab").hasClass("active")){$("#menu-tab").removeClass("active");}
                if($("#rewards-tab").hasClass("active")){$("#rewards-tab").removeClass("active");}
            });

        /*Side Page Category Click*/
            $("#categories").find("li").find(".head").click(function(){
                var items = $(this).parent().find('ul');
                if(items.css('display') == 'none'){
                    items.slideDown(200);
                }else{
                    items.slideUp(200);
                }
            });

            $(".items").find('li').click(function(){
                $("#fade").fadeIn(80);
            });
            $("#fade").click(function(event){
                if(!$(event.target).is('#order-box') && !$(event.target).parents("#order-box").is("#order-box")){
                    $('#fade').toggle();
                }
            });
            $("#order-box-icon").click(function(){
                $("#fade").toggle();
            });

});