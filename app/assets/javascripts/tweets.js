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
      dataType: 'json',
    }).done(function(responseData) {
      console.log('successfully completed');
      var listElement = $('<li>', {
      html: '<p>' + responseData.message + '</p> <time>' + moment(responseData.created_at).format("MMM D, h:mm A") + '</time>',
      class: "tweet"
      });
      $('.tweets').prepend(listElement);
    }).fail(function(responseData){
      console.log('failed');
    }).always(function(responseData) {
      console.log('this should always be logged back');
      $('#create-tweet').removeAttr('disabled'); //remove the disable attribute after the ajax call so that you can submit again.
    })
    })
  })
