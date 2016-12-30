$('.btn-x').click(function(){
  $(this).addClass('active');
});

$('.btn-x').on('animationend webkitAnimationEnd oAnimationEnd', function(){     
  $('.btn-x').removeClass('active');
});