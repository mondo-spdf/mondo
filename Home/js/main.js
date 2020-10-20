'use strict'

$('img').hide().fadeIn(2500);
$('.logo').removeClass('logo-start');
$("li").delay(2200).hide().fadeIn(1600);

$(() => {
  let hour = new Date().getHours();
  if(hour <= 5 || hour >= 18) {
    $('body').removeClass('white');
    $('body').addClass('black');
  } else {
    $('body').removeClass('black');
    $('body').addClass('white');
  }
});