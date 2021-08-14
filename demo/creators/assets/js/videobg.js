$(document).ready(function() {
  var videobackground = new $.backgroundVideo($('#intro'), {
    "align": "centerXY",
    "width": 2560,
    "height": 1440,
    "path": "assets/media/",
    "filename": "videobg",
    "types": ["mp4","ogg","webm"],
    "preload": true,
    "autoplay": true,
    "muted": true,
    "loop": false
  });

  var vid = document.getElementById("video_background");

  function playVid() { 
      vid.play(); 
  } 
  function pauseVid() { 
      vid.pause(); 
  }

  $('.pause-video').bind('click', function(e) {
    e.preventDefault();        
    vid.pause();
    $(this).toggle();
    $('.play-video').toggle();
    $('.sound-off').toggle();
  });

   $('.play-video').bind('click', function(e) {
    e.preventDefault();
    vid.play();
    $(this).toggle();
    $('.pause-video').toggle();
    $('.sound-off').toggle();
    $('video').prop('muted', false);
  });

   // Video Background
  $('.sound-off').bind('click', function(e) {
    e.preventDefault();
    $('video').prop('muted', true);
    $(this).toggle();
    $('.sound-on').toggle();
  });

   $('.sound-on').bind('click', function(e) {
    e.preventDefault();
    $('video').prop('muted', false);
    $(this).toggle();
    $('.sound-off').toggle();
  });
});