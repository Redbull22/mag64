$(document).ready(function() {

  setContentHeight();
  $('.js--truncate').truncate({
    token: '&hellip; <a href="#" onclick="showFullContent(this)">далее</a>',
    multiline: true,
    addfulltext: true
  });

});

$( window ).resize(function() {
  setContentHeight();
  $('.js--truncate').truncate({
    token: '&hellip; <a href="#" onclick="showFullContent(this)">далее</a>',
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
  $('.content64__center').find('img').hide();
  var representContainer = document.getElementById('js--content_represent');
  representContainer.style.display='block';

  representContainer.innerHTML = $(elem.parentNode).data('fulltext');

}