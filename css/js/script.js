(function( $ ){
  
    $.fn.textAnimation = function( animation_speed, text_speed, animation ){
      var text, i = 0;
      var $this = $(this);
      
      // store text and clear
      text = $this.text();
      $this.css('white-space', 'pre');
      $this.html('');
      
      var addLetter = setInterval(function(){
        $this.append('<div class="text_animation" style="display: inline-block; animation: ' + animation + ' ' + animation_speed + 'ms forwards">' + text[i] + '</div>');
        i++;
        if (i == text.length) clearInterval(addLetter);
      }, text_speed);
    }
  })( jQuery )
  
  
  var temp = $('.bounce_in_animation').text();
  var i = 1;
  
  $('.bounce_in_animation').textAnimation(250, 50, 'bounceIn');
  
  setInterval(function(){
    i %= 4;
    $('.bounce_in_animation').html(temp);
    switch(i) {
      case 0:
        $('.bounce_in_animation').textAnimation(250, 50, 'bounceIn');
        break;
      case 1:
        $('.bounce_in_animation').textAnimation(250, 50, 'slideDown');
        break;
      case 2:
        $('.bounce_in_animation').textAnimation(250, 50, 'slideUp');
        break;
      default:
        $('.bounce_in_animation').textAnimation(250, 50, 'spinIn');
            }
    i++;
  }, 1000 + 50 * temp.length + 250)