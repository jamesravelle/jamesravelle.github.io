$( document ).ready(function() {

var i = 0;
var txt = 'About Me';
var speed = 100; 

function typeWriter() {
  if (i < txt.length) {
    $("#about-header").append(txt[i])
    i++;
    setTimeout(typeWriter, speed);
  }
}   

$( "#browser-window" ).toggle( "slide", function(){
    typeWriter();
});

$(document).on("click", '.print', function(e){
  e.preventDefault();
  $('.modal-tital').text("Print");
  $('.carousel-item:nth-child(1) img').attr('src','./files/print/Services-We-Offer_web.jpg');
  $('.carousel-item:nth-child(2) img').attr('src','./files/print/Hybrid-Model_final_web.jpg');
  $('.carousel-item:nth-child(3) img').attr('src','./files/print/TheraWeb-Flyer_web.jpg');
  $('.carousel-item:nth-child(4) img').attr('src','./files/print/TapeSwap_11-3-17.jpg');
  $('.carousel-item:nth-child(5) img').attr('src','./files/print/TapeSwap_10-3-2017.jpg');
  $('.carousel-item:nth-child(6) img').attr('src','./files/print/Pizza-Box-Final.jpg');
})

$(document).on("click", '.digital', function(e){
  e.preventDefault();
  $('.modal-tital').text("Digital");
  $('.carousel-item:nth-child(1) img').attr('src','./files/digital/Win-email.JPG');
  $('.carousel-item:nth-child(2) img').attr('src','./files/digital/SW-email.JPG');
  $('.carousel-item:nth-child(3) img').attr('src','./files/digital/online-therapy-page.jpg');
  $('.carousel-item:nth-child(4) img').attr('src','./files/digital/newsletter-signup-lp.jpg');
  $('.carousel-item:nth-child(5) img').attr('src','./files/digital/Halloween.JPG');
  $('.carousel-item:nth-child(6) img').attr('src','./files/digital/newsletter.jpg');
})

$(document).on("click", '.branding', function(e){
  e.preventDefault();
  $('.modal-tital').text("Branding");
  $('.carousel-item:nth-child(1) img').attr('src','./files/branding/branding-gcc.jpg');
  $('.carousel-item:nth-child(2) img').attr('src','./files/branding/branding-calyx.jpg');
  $('.carousel-item:nth-child(3) img').attr('src','./files/branding/branding-fenix.jpg');
  $('.carousel-item:nth-child(4) img').attr('src','./files/branding/branding-gcc.jpg');
  $('.carousel-item:nth-child(5) img').attr('src','./files/branding/branding-calyx.jpg');
  $('.carousel-item:nth-child(6) img').attr('src','./files/branding/branding-fenix.jpg');
})

});
