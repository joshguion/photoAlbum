$(document).ready(function(){

  $('.album1').click(function(event){
    event.preventDefault();
    console.log(event.target);
    $('.album1').css('display', 'none');
    $('.album2').css('display', 'none');
    $('.album3').css('display', 'none');
    $('.album4').css('display', 'none');
    $('.album5').css('display', 'none');
    $('.album6').css('display', 'none');
    $('header').css('display', 'none');
    $('.albumNav').css('display', 'inline');
    $('.photosView1').removeClass('hidden');
  });

$('.album2').click(function(event){
  event.preventDefault();
  $('.album1').css('display', 'none');
  $('.album2').css('display', 'none');
  $('.album3').css('display', 'none');
  $('.album4').css('display', 'none');
  $('.album5').css('display', 'none');
  $('.album6').css('display', 'none');
  $('header').css('display', 'none');
  $('.albumNav').css('display', 'inline');
  $('.photosView2').removeClass('hidden');
  $('.photosView1').addClass('hidden');
  $('.photosView3').addClass('hidden');
  $('.photosView4').addClass('hidden');
  $('.photosView5').addClass('hidden');
  $('.photosView6').addClass('hidden');
});

$('.album3').click(function(event){
  event.preventDefault();
  $('.album1').css('display', 'none');
  $('.album2').css('display', 'none');
  $('.album3').css('display', 'none');
  $('.album4').css('display', 'none');
  $('.album5').css('display', 'none');
  $('.album6').css('display', 'none');
  $('header').css('display', 'none');
  $('.albumNav').css('display', 'inline');
  $('.allalbums3').css('display', 'none');
  $('.photosView1').addClass('hidden');
  $('.photosView2').addClass('hidden');
  $('.photosView3').removeClass('.hidden');
  $('.photosView4').addClass('hidden');
  $('.photosView5').addClass('hidden');
  $('.photosView6').addClass('hidden');
});

$('.album4').click(function(event){
  event.preventDefault();
  $('.album1').css('display', 'none');
  $('.album2').css('display', 'none');
  $('.album3').css('display', 'none');
  $('.album4').css('display', 'none');
  $('.album5').css('display', 'none');
  $('.album6').css('display', 'none');
  $('header').css('display', 'none');
  $('.albumNav').css('display', 'inline');
  $('.allalbums4').css('display', 'none');
  $('.photosView1').addClass('hidden');
  $('.photosView2').addClass('hidden');
  $('.photosView3').addClass('hidden');
  $('.photosView4').removeClass('hidden');
  $('.photosView5').addClass('hidden');
  $('.photosView6').addClass('hidden');
});

$('.album5').click(function(event){
  event.preventDefault();
  $('.album1').css('display', 'none');
  $('.album2').css('display', 'none');
  $('.album3').css('display', 'none');
  $('.album4').css('display', 'none');
  $('.album5').css('display', 'none');
  $('.album6').css('display', 'none');
  $('header').css('display', 'none');
  $('.albumNav').css('display', 'inline');
  $('.allalbums5').css('display', 'none');
  $('.photosView1').addClass('hidden');
  $('.photosView2').addClass('hidden');
  $('.photosView3').addClass('hidden');
  $('.photosView4').addClass('hidden');
  $('.photosView5').removeClass('hidden');
  $('.photosView6').addClass('hidden');
});

$('.album6').click(function(event){
  event.preventDefault();
  $('.album1').css('display', 'none');
  $('.album2').css('display', 'none');
  $('.album3').css('display', 'none');
  $('.album4').css('display', 'none');
  $('.album5').css('display', 'none');
  $('.album6').css('display', 'none');
  $('header').css('display', 'none');
  $('.albumNav').css('display', 'inline');
  $('.allalbums6').css('display', 'none');
  $('.photosView1').addClass('hidden');
  $('.photosView2').addClass('hidden');
  $('.photosView3').addClass('hidden');
  $('.photosView4').addClass('hidden');
  $('.photosView5').addClass('hidden');
  $('.photosView6').removeClass('hidden');
});

//page 2 click events//////////////////////////////////////////////////////////////////////

$('.allAlbumButton').click(function(event){
  event.preventDefault();
  $('.album1').css('display', 'inline-block');
  $('.album2').css('display', 'inline-block');
  $('.album3').css('display', 'inline-block');
  $('.album4').css('display', 'inline-block');
  $('.album5').css('display', 'inline-block');
  $('.album6').css('display', 'inline-block');
  $('header').css('display', 'block');
  $('.albumNav').css('display', 'inline');
  $('.allalbums1').css('display', 'none');

});

$('.albumButton1').click(function(event){
  event.preventDefault();
  $('.album1').css('display', 'none');
  $('.album2').css('display', 'none');
  $('.album3').css('display', 'none');
  $('.album4').css('display', 'none');
  $('.album5').css('display', 'none');
  $('.album6').css('display', 'none');
  $('header').css('display', 'none');
  $('.albumNav').css('display', 'inline');
  $('.photosView2').addClass('hidden');
  $('.photosView1').removeClass('hidden');
  $('.photosView3').addClass('hidden');
  $('.photosView4').addClass('hidden');
  $('.photosView5').addClass('hidden');
  $('.photosView6').addClass('hidden');


});
$('.albumButton2').click(function(event){
  event.preventDefault();
  $('.album1').css('display', 'none');
  $('.album2').css('display', 'none');
  $('.album3').css('display', 'none');
  $('.album4').css('display', 'none');
  $('.album5').css('display', 'none');
  $('.album6').css('display', 'none');
  $('header').css('display', 'none');
  $('.albumNav').css('display', 'inline');
  $('.photosView2').removeClass('hidden');
  $('.photosView1').addClass('hidden');
  $('.photosView3').addClass('hidden');
  $('.photosView4').addClass('hidden');
  $('.photosView5').addClass('hidden');
  $('.photosView6').addClass('hidden');
});

$('.albumButton3').click(function(event){
  event.preventDefault();
  $('.album1').css('display', 'none');
  $('.album2').css('display', 'none');
  $('.album3').css('display', 'none');
  $('.album4').css('display', 'none');
  $('.album5').css('display', 'none');
  $('.album6').css('display', 'none');
  $('header').css('display', 'none');
  $('.albumNav').css('display', 'inline');
  $('.allalbums3').css('display', 'none');
  $('.photosView3').removeClass('hidden');
  $('.photosView1').addClass('hidden');
  $('.photosView2').addClass('hidden');
  $('.photosView4').addClass('hidden');
  $('.photosView5').addClass('hidden');
  $('.photosView6').addClass('hidden');

});
$('.albumButton4').click(function(event){
  event.preventDefault();
  $('.album1').css('display', 'none');
  $('.album2').css('display', 'none');
  $('.album3').css('display', 'none');
  $('.album4').css('display', 'none');
  $('.album5').css('display', 'none');
  $('.album6').css('display', 'none');
  $('header').css('display', 'none');
  $('.albumNav').css('display', 'inline');
  $('.allalbums4').css('display', 'none');
  $('.photosView1').addClass('hidden');
  $('.photosView2').addClass('hidden');
  $('.photosView3').addClass('hidden');
  $('.photosView4').removeClass('hidden');
  $('.photosView5').addClass('hidden');
  $('.photosView6').addClass('hidden');

});
$('.albumButton5').click(function(event){
  event.preventDefault();
  $('.album1').css('display', 'none');
  $('.album2').css('display', 'none');
  $('.album3').css('display', 'none');
  $('.album4').css('display', 'none');
  $('.album5').css('display', 'none');
  $('.album6').css('display', 'none');
  $('header').css('display', 'none');
  $('.albumNav').css('display', 'inline');
  $('.allalbums5').css('display', 'none');
  $('.photosView1').addClass('hidden');
  $('.photosView2').addClass('hidden');
  $('.photosView3').addClass('hidden');
  $('.photosView4').addClass('hidden');
  $('.photosView5').removeClass('hidden');
  $('.photosView6').addClass('hidden');

});
$('.albumButton6').click(function(event){
  event.preventDefault();
  $('.album1').css('display', 'none');
  $('.album2').css('display', 'none');
  $('.album3').css('display', 'none');
  $('.album4').css('display', 'none');
  $('.album5').css('display', 'none');
  $('.album6').css('display', 'none');
  $('header').css('display', 'none');
  $('.albumNav').css('display', 'inline');
  $('.allalbums6').css('display', 'none');
  $('.photosView1').addClass('hidden');
  $('.photosView2').addClass('hidden');
  $('.photosView3').addClass('hidden');
  $('.photosView4').addClass('hidden');
  $('.photosView5').addClass('hidden');
  $('.photosView6').removeClass('hidden');
});

$('a').click(function(event){
  event.preventDefault();
  if ($(this).href === '#album1'){

  }
});















});
