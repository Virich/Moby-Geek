//работа с меню
$(document).ready(function () {
    $('.item-link').on('click', function (e) {
        e.preventDefault();
        var direction = $(this).attr('href').replace(/#/, ''),
            reqSection = $('.section').filter("[data-section='" + direction + "']"),
            reqSectionPos = reqSection.offset().top;
        
        $('body, html').animate({scrollTop:reqSectionPos},1000);
      
    });
    var seqId = 01;
    $(window).on('scroll', function(){
        $('.section').each(function(){
            var topEdge = $(this).offset().top-50,
                bottomEdge = topEdge + $(this).height(),
                winScroll = $(window).scrollTop();
            if (topEdge<winScroll && bottomEdge>winScroll) {
                    seqId = $(this).data('section'),
                    reqLink = $('.item-link').filter('[href="#' + seqId + '"]');
                reqLink.closest('.item').addClass('active').siblings().removeClass('active');
                window.location.hash = seqId;
                
                var index = +seqId - 1;
                var top = 361 + index * 50;
                $('.item-p').eq(index).css('display','block').siblings().css('display','none');
                $('.item-p').eq(index).css('top',top +'px');
            }
           
        })
    })
    
    $('.item').on('click', function (e) {
        e.preventDefault();
        var index=$(this).closest('.item').index();
        $(this).addClass('active').siblings().removeClass('active');
    });
});

