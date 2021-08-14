$(document).ready(function() {      

  // Subscribe Form Alert Message
  $("#subscribe-form").submit(function(e) {

    var url = "../../subscribe.php"; // the script where you handle the form input.

    $.ajax({
      type: "POST",
      url: url,
      data: $("#subscribe-form").serialize(), // serializes the form's elements.
      success: function(data)
      {
        $('#subscribe-modal').show().addClass('in'); // show response from the php script.
        $('#subscribe-form #emailsubscribe').val('');  // clear form 
        setTimeout(function(){
          $('#subscribe-modal').hide().removeClass('in'); // autohide modal after 2s
        }, 2000);
      }

    });

    e.preventDefault(); // avoid to execute the actual submit of the form.
  });

  //Contact Form Alert Message
  $("#contact-form").submit(function(e) {

    var url = "../../send.php"; // the script where you handle the form input.

    $.ajax({
      type: "POST",
      url: url,
      data: $("#contact-form").serialize(), // serializes the form's elements.
      success: function(data)
      {
        $('#contact-modal').show().addClass('in'); // show response from the php script.
        $('#contact-form #name').val('');  // clear form
        $('#contact-form #email').val('');  // clear form 
        $('#contact-form #message').val('');  // clear form  
        setTimeout(function(){
          $('#contact-modal').hide().removeClass('in'); // autohide modal after 2s
        }, 2000);
      }

    });

    e.preventDefault(); // avoid to execute the actual submit of the form.
  });

  // Close Modal Subscribe
  $('#subscribe-modal button.close').click(function(e){
    e.preventDefault();
    $('#subscribe-modal').removeClass('in').hide(); // hide modal   
    $('#subscribe-form #email').val(''); // clear form
  });

  // Close Modal Contact
  $('#contact-modal button.close').click(function(e){
    e.preventDefault();
    $('#contact-modal').removeClass('in').hide(); // hide modal    
    $('#contact-form #name').val('');  // clear form
    $('#contact-form #email').val('');  // clear form 
    $('#contact-form #message').val('');  // clear form  
  });

	// Tabs
	$('#offers a', '#about a', '#testimonials a').click(function (e) {
	  e.preventDefault();
	  $(this).tab('show');
	});

	setTimeout(function() {
    triggerClick('#offers a', 0),
    triggerClick('#about a', 0),
    triggerClick('#testimonials a', 0)
  }, 2000);
  function triggerClick(selector, index) {
    var buttons = $(selector);
    var mod = index++ % buttons.length;
    $(buttons[mod]).trigger('click');
    setTimeout(function() {
        triggerClick(selector, index);
    }, 3000);
  }

  // Easy Scrooling
  
  $('nav a, #intro a.start-btn, footer a.top').bind('click',function(e) {
    e.preventDefault(); 
    
    var $anchor = $(this);

    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - 0
    }, 1500,'easeInOutExpo');

    $('.navbar-collapse.in').removeClass('in');
  
  });

});