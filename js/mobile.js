$(document).ready(function(){
  $('*').addClass("animated");
  $('.main-body > *').addClass("come-in")
  animations();
});
function animations(){
$('.main-body').css("opacity","0");
  $('section.intro > h3').addClass("fadeInDown");
  setTimeout(function(){
    $('section.intro > h3').animate({
      letterSpacing: '10px'
    },2000);
  },1000);

    setTimeout(function(){

      $('section.intro > h1').addClass("fadeInUp");
      $('section.intro').css("background","#E23F58")
      $('.unit').css('opacity','0');

    },3000);
    setTimeout(function(){

      $('section.intro').animate({
        height: '300px',
        fontSize: '40px'
      },2000);


      $('.main-body').addClass("fadeInUp");
      setTimeout(function(){

          $('.come-in').each(function(i){
            setTimeout(function(){
              $('.unit').eq(i).addClass("fadeInUp");
            },i*300);
          });

      $('.unit').each(function(i){
        setTimeout(function(){
          $('.unit').eq(i).addClass("fadeInUp");
        },i*300);
      });
},3000)
setTimeout(function(){
$('section.intro h1').animate({

  fontSize: '40px'
},1500);

},2000);



    },3000);

}
