$(function (){
  console.log('init');
  
  $('.map__layer').parallax(
    {mouseport: $("body"),xorigin: 0,yorigin: 0},
    {xparallax: '0', yparallax: '0'},{xparallax: '30px',yparallax: '30px'},{xparallax: '45px',yparallax: '45px'},{xparallax: '60px',yparallax: '60px'}
  );

  $(window).scroll(function(){
    var header = $('.header'),
        main = $('.main'),
        scroll = $(window).scrollTop();
    if (scroll >= 300) {
      header.addClass('header--fixed');
      main.addClass('main--fixed');
    } else {
      header.removeClass('header--fixed');
      main.removeClass('main--fixed');
    }
  });

  $('body').delegate('.scroll-to-target', 'click', function(e) {
    var target = $(this).attr('href');
    var offset = 200;
    if ($(this).data('offset') != undefined) offset = $(this).data('offset');
    
    $.scrollTo(target, 600, { offset: -offset });
    
    return false;
  });

  $('body').delegate('.overlay__close', 'click', function(e) {
    $('body').removeClass('noscroll');
    $('.overlay').removeClass('overlay--active');

    if ($(this).hasClass('overlay__close--remove')) {
      $(this).closest('.overlay').remove();
    }
    return false;
  });

  $('body').delegate('*[data-event="jqm"]', 'click', function(e) {
    var overlay = $(this).data('overlay');
    if (overlay) {
      $('#'+overlay).addClass('overlay--active');
      $('body').addClass('noscroll');
    }
    return false;
  });
});



