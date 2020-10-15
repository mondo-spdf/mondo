'use strict'

$('img').hide().fadeIn(2500);
$('.logo').removeClass('logo-start');
let exit_count = 0;
let elems_count = 0;
function repeat_show(elems$) {
  elems_count = elems$.length;
  elems$.eq(exit_count).show(300, () => {
    exit_count ++;
    if(exit_count < elems_count) {
      repeat_show(elems$);
    }
  });
}
$("li").delay(2200);

// repeat_show($("li"));
$("li").hide().fadeIn(1600);

document.getElementById('search').focus();