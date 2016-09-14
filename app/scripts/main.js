"use strict";
function preLoader(){setTimeout(function(){$("#preloader").delay(250).fadeOut({duration:950})},300)}$(window).load(preLoader);

var main=function(){
    
    $(".parallax").parallax(),$(".scrollspy").scrollSpy();
    $('.carousel').carousel();
    $('.parallax').parallax();


var waypoint = new Waypoint({
  element: document.getElementById('productos'),
  handler: function() {
    $('#logobarra').fadeIn();
  }, offset:100
});
    
var waypoint = new Waypoint({
  element: document.getElementById('contenedor2'),
  handler: function() {
    $('#logobarra').fadeOut();
  }, offset:-160
});
    
var waypoint = new Waypoint({
  element: document.getElementById('productos'),
  handler: function() {
    $('#uno').fadeIn(2000);
    $('#dos').fadeIn(3000);
    $('#tres').fadeIn(4000);
    $('#cuatro').fadeIn(5000); 
    $('#cinco').fadeIn(6000); 
    $('#seis').fadeIn(7000);   
  },offset:100
});
     
    

};


jQuery(window).load(function() {
        // will first fade out the loading animation
    jQuery("#status").fadeOut(200);
        // will fade out the whole DIV that covers the website.
    jQuery("#preloader").delay(800).fadeOut(2000);
        
})

 
$(document).ready(main);