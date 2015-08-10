$(document).ready( function () {
	$('.tooltip').tooltipster();
    $(window).scroll( function () {
    	if ($(this).scrollTop() < 1) {
    		$('.sticky-header').removeClass('fixed');
    		$('body').css('padding-top', '0');
    	} else {
    		$('.sticky-header').addClass('fixed');
    		$('body').css('padding-top', '80px');
    	}
    })

    var $d = $('#profile-dropdown');
    $('.navbar-name').hover( function () {
    	if (!$d.is(':visible'))
    		$d.fadeIn()
    	else
    		$d.fadeOut()
    }, function () {
    	if (!$d.is(':hover'))
    		$d.fadeOut()
    })
    $d.hover( function () {}, function () {
    	$d.fadeOut()
    })
})

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 800);
        return false;
      }
    }
  });
});

$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    var topsection = $('#about').position().top;
    if (windscroll >= topsection) {
        $('.section').each(function(i) {
            if ($(this).position().top <= windscroll + 85) {
                $('.navbar-navigation li.active').removeClass('active');
                $('.navbar-navigation li').eq(i).addClass('active');
            }
        });
    } else {
        $('.navbar-navigation li.active').removeClass('active');
    }

    if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
      $('.navbar-navigation li.active').removeClass('active');
      $('.navbar-navigation li').last().addClass('active');
    }


}).scroll()
