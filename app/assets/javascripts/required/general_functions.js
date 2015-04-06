$(document).ready(function() {



});

$( window ).resize(function() {
  // setContentHeight();
  restoreFullContent();
  $('.js--truncate').truncate({
    token: '&hellip;',
    multiline: true,
    addfulltext: true
  });
});

var setContentHeight = function() {
  if($(window).width() > 980)
    $( ".js--content_height" ).height($( ".content64__center" ).height() - 10);
  else
    $( ".js--content_height" ).height('auto');
}

function showFullContent(elem) {
  $('.content64__center__image').find('img').css({'opacity': 0});
  var representContainer = document.getElementById('js--content_represent');
  $(representContainer).closest('.content64__center__represent_container').fadeIn().css({'z-index': 10});

  var dataRubric = $(elem).closest('.content64').data('rubric');
  if (dataRubric != '')
    $(representContainer).siblings('.content64__center__represent_container__rubric').html(dataRubric);

  representContainer.innerHTML = $(elem).closest('.row').siblings('.black_header').html() + $(elem).find('.js--truncate').data('fulltext');
}

function showBottomContent(elem) {
  $('.content64__center__image').find('img').css({'opacity': 0});
  var representContainer = document.getElementById('js--content_represent');
  $('.content64__center__represent_container__rubric').html('');
  $(representContainer).closest('.content64__center__represent_container').fadeIn().css({'z-index': 10});
  representContainer.innerHTML = '<h2>' + $(elem).find('.content64__bottom__link__header').html() + '</h2>' + $(elem).find('.content64__bottom__link__text').html();
}

function restoreFullContent(elem) {
  for(var i=0, size = $('.js--truncate').length; i<size; i++){
    $($('.js--truncate')[i]).html($($('.js--truncate')[i]).data('fulltext'));
  }
}

function truncateText() {
  $('.js--truncate').truncate({
    token: '&hellip;',
    multiline: true,
    addfulltext: true
  });
}