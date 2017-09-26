$(document).ready(function(){
  $('*').addClass('animated');

hover();
pro();
setInterval(function(){random();},1000);
comeIn();
circleImporter();
banner();
sizer();
spanLocker();
bannerClick();
redirect();
work();


});


function redirect(){
  if(screen.width <= 680){
    document.location = "mobile.html";

  }
}
function hover(){
  $('.unit').eq(0).mouseover(function(){
    $('.hop').addClass("animated");
    $('.hop').addClass("jello");
    $('.hop').css('color','orange');
  });
}
function pro(){
  $('.prom').click(function(){
    $('html,body').animate({
      scrollTop: $('.lockup').offset().top
    },2000);
    console.log("clicker");
  });
}
function comeIn(){
  $('.dot').css('opacity','0');
  $('.dot').each(function(i){
    setTimeout(function(){
      $('.dot').eq(i).addClass("lightSpeedIn");
    }, i*600);
  });

}
function random(){
    var dotrandom = Math.floor(Math.random()*$('.dot').length)+1;
    $('span>.dot').eq(dotrandom).addClass('tada').siblings().removeClass("tada");
}
function circleImporter(){
  $('.production-process').css('opacity','0');
$('.circle-dot').css('opacity','0');
$('.text,.side').css('opacity','0');
  $('.para').css('opacity','0');
  $(window).scroll(function(){

    var wscroll = $(this).scrollTop();
  if(wscroll > $('.our-process').offset().top - $(window).height()/2){
    $('.para').addClass('bounceIn');
$('.line').each(function(i){
  setTimeout(function(){
    $('.line').animate({height: '400px'},2000);
  },i*500);
});

    $('.production-process').addClass("bounceIn");
  $('.circle-dot').each(function(i){
    setTimeout(function(){
      $('.circle-dot').eq(i).addClass("bounceIn");
    },i*300)
  });
    $('.side,.text').each(function(i){
      setTimeout(function(){
        $('.side,.text').eq(i).addClass("bounceIn");
      },i*300)
    });
}

});


}
function banner(){
  $('.abil').click(function(){
    $('html, body').animate({
      scrollTop: $('.abilities').offset().top
    },2000);
  });
    $('.port').click(function(){
      $('html,body').animate({
        scrollTop: $('.portfolio').offset().top
      },2000);

    });
$(window).scroll(function(){
  $('.banner').css('opacity','0');
  $('.unit').css('opacity','0');
  var wscroll = $(this).scrollTop();
  if(wscroll > $('.lockup').offset().top - $(window).height() /2 ){
    $(' .unit').each(function(i){
      setTimeout(function(){
        $(' .unit').eq(i).addClass("fadeInUp");
      },i*500);
    });
  }
  if(wscroll > $('.banner').offset().top - $(window).height()/2){
    $('.banner').addClass("fadeInUp");
  }
});
}
function sizer(){
  $('.unit-lrg').eq(1).css('height','300%');
  $('.unit-lrg').eq(3).css('height','100%');
}

function units() {

}
function spanLocker(){
  $('.span-locker > span').hide();
  $('.intro-vyco').addClass('fadeInUp');
  setTimeout(function(){
    $('.intro-vyco').addClass("fadeOutDown")

},3000);
setTimeout(function(){
$('.span-locker > span').each(function(i){
  setTimeout(function(){
      $('.span-locker > span').show();
    $('.span-locker > span').eq(i).addClass('fadeInUp')
    $('.span-locker').animate({
      left: '-100'
    },2000)

  },i*500);
});
},5000);
}
function bannerClick(){
  $('.banner').click(function(){
    $('html ,body').animate({
      scrollTop: $('.our-process').offset().top
    },4000);
  });
}
function anime(){
  var functionBasedDelay = anime({
  targets: '.our-work > .work-unit',
  opacity: [0,1],
  translateX: 250,
  delay: function(i) {
    return i * 100;
  }
});
}
function work(){
  $('.our-prices-link').click(function(){
    $('html ,body').animate({
      scrollTop: $('.prices').offset().top
    },4000);
  });
  $('.our-work-link').click(function(){
    $('html ,body').animate({
      scrollTop: $('.our-work').offset().top
    },4000);
  });
}
