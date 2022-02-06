$('.side-bar ul li').on('click', function(){
  let id = $(this)[0].id;
  $('.side-bar ul li').removeClass('li-line')
  $('#'+id).addClass('li-line');

  let content = $('#content');
  $('#content').load('./components/' + id +'.html');
});

$('.dismiss').on('click', function(){
  $(this).parent()[0].style.visibility = 'hidden'
});

$('.alert .close').on('click', function(){
  $(this).parent()[0].style.display = 'none';
});
