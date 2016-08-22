'use strict';
var main = function(){
  /*global someFunction Waypoint:true*/
/*eslint no-undef: "error"*/

/*eslint no-unused-vars: "error"*/
  /* global $ */
$('.nav li, .nav li a').click(function (e) {
		e.preventDefault();
		$('ul.nav > li').removeClass('active');
            $(this).addClass('active');

});

$(document).ready(function(){
      $('.parallax').parallax();
    });
    
$(document).ready(main);
