var wHeight = $(window).height();  // Get the height of the window
$('.fullHeight').css('height',wHeight);


$(window).resize(function(){
	var wHeight = $(window).height();  // Get the height of the window
	$('.fullHeight').css('height',wHeight);
	 checkWidth();
});

function equalHeight(group) {    
    var tallest = $(this).height();   
    var widest	= 0; 
    group.each(function() {       
        var thisHeight	=	$(this).height();    
        var thisWidth 	= 	$(this).width();     
        if(thisHeight < tallest) {          
            tallest = thisHeight;       
        }  
        if(thisWidth > widest) {          
            widest = thisWidth;       
        }    
    });    
    group.each(function() { 
    	$(this).height(tallest); 
    	$(this).width(widest);
    });
} 

// Smooth Scrolling
	function smoothScrollbyID(id) {
		$('html,body').animate({scrollTop: ($("#"+id).offset().top) - 25},'slow');
		return false;
		};


$(document).ready(function () { // wait for document ready

	equalHeight($(".thumbnail")); 

	// carousel for skills page

	$('.skillScroll').slick({
        accessibility: true,
        adaptiveHeight: true,
        dots: false,
        zIndex: 1000,
        infinite: false,
        arrows: true,
        asNavFor: null,
        // prev arrow
            prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
        // next arrow
          nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',
        speed: 300,
        slidesToShow: 9,
        slidesToScroll: 2,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
        ]
    });	

	// header scroll 
	//add a new class when scrollspy event fires
	$('.navbar-fixed-top').on('activate.bs.scrollspy',function(){
		var hash = $(this).find('li.active a').attr('href');

		if(hash !=='#home'){
			$('header nav').addClass('navScroll');
		}
		else{
			$('header nav').removeClass('navScroll');
		}
	});			

});