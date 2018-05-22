var Links = {
  SetColor:function(color){
    $('a').css('color',color);
  }
}
    var Body = {
      SetColor:function(color){
        document.querySelector('body').style.color = color;
      },
      SetBackgroundColor:function(color){
        document.querySelector('body').style.backgroundColor
         = color;
      }
    }
function nightDayHandler(play){
var target = document.querySelector('body');
if (play.value === 'night') {
Body.SetBackgroundColor('black');
Body.SetColor('white');
play.value = 'day';

links.SetColor('powderblue');
} else {
Body.SetBackgroundColor('white');
Body.SetColor('black');
play.value = 'night';

links.SetColor('blue');
  }
}
