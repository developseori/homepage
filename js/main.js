
//스크롤 헤더 이벤트//
$(function () {
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5; 
    var navbarHeight = $("#header").outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250); 

    function hasScrolled() {
        var st = $(this).scrollTop(); 

    
        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        if (st > lastScrollTop && st > navbarHeight){
           
            $("#header").slideUp("fast").css("background","#fff" ) ;
        } else {
      
            if(st + $(window).height() < $(document).height()) {
                $("#header").slideDown("fast"); 
            }
        }
        lastScrollTop = st; 
    }
})


/*slide*/
$(document).ready(function(){
    $('.slider').bxSlider({
      slideWidth: 2000,
      minSlides: 3,
      maxSlides: 3,
      slideMargin: 10
    });
  });


/*scroll event*/

/*footer animation*/
jQuery(document).ready(function($){
    var bArray = [];
    var sArray = [4,6,8,10];
 
    for (var i = 0; i < $('.career-box').width(); i++) {
        bArray.push(i);
    }
     
    function randomValue(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
 
    
    setInterval(function(){
         
       
        var size = randomValue(sArray);
        $('.career-box').append('<div class="individual-career-box" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
        $('.individual-career-box').animate({
            'bottom': '100%',
            'opacity' : '-=0.7'
        }, 3000, function(){
            $(this).remove()
        }
        );
 
 
    }, 350);
 
});