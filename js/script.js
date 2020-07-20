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

});