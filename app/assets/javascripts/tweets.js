// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(function() {

  $('#new_tweet').submit(function(event) { //the id selector needs to be on the form itself
    event.preventDefault();
    console.log($(this).serialize());
    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: $(this).serialize(),
      dataType: 'html',
    }).done(function(responseData) {
      console.log('successfully completed');
      $(responseData).prependTo($('.tweets'));
    }).fail(function(responseData){
      console.log('failed');
    }).always(function(responseData) {
      console.log('this should always be logged back')
    })
    })
  })
