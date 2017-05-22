$(document).ready(function() {
    $('.mobile').click(function () {
	    $('nav').toggleClass('active'); 
    });
  /*
    $('nav ul li ul').each(function() {
        $(this).before('<span class=\"arrow\"></span>');
    });
  
    $('nav ul li').click(function() {
        $(this).children('ul').toggleClass('active');
        $(this).children('.arrow').toggleClass('rotate');
    });
    */
    $(".new-toggle").hide();
    $('.list.menu').hide();
});

$(".container-bars").click(function(){
    this.classList.toggle("change");    
    this.classList.toggle("special-effect-1"); 
    $('.logo-2').toggle();
    $(".list-menu").toggle();
    $('#main').toggleClass('margin-left');
    $('#main').toggleClass('opacity');
    
});

$(".toggle").click(function(){
    $(".new-toggle").toggle('slow');
    $(".icon-submenu-2").toggleClass('rotate');    
});


