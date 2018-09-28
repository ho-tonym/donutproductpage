jQuery(document).ready(function($) {
  var addRemoveClass = function() {
    var w = document.body.clientWidth;
    if (w < 768) {
      $('.s4').find( "span" ).removeClass('left_right_pad bot_pad');
    } else if (w >= 768) {
      $('.s4').find( "span" ).addClass('left_right_pad bot_pad');
    };
  };
  $(window).resize(function(){
    addRemoveClass();
  });
  addRemoveClass();
});
