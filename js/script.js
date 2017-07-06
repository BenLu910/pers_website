// JavaScript Document


$(document).ready(function(){
	var windowH = $(window).height();
	var waypoint = new Waypoint({
  element: document.getElementById('firstFade'),
  handler: function(direction) {
	if(direction == "down"){
		$('#firstFade').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 2000);	
	}else{
		$('#firstFade').css({opacity: 1, visibility: "visible"}).animate({opacity: 0}, 200);
	}
  },
  offset: '100%'
})
	var waypoint2 = new Waypoint({
  element: document.getElementById('secondFade'),
  handler: function(direction) {
	  if(direction == "down"){
		$('#secondFade').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 2000);
	}else{
		$('#secondFade').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 200);
	}
    
  },
  offset: '100%'
})
	var waypoint3 = new Waypoint({
  element: document.getElementById('employment'),
  handler: function(direction) {
	  if(direction == "down"){
		$('#employment').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 2000);
	}else{
		$('#employment').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 200);
	}
    
  },
  offset: '100%'
})
	
	var waypoint4 = new Waypoint({
  element: document.getElementById('Skills'),
  handler: function(direction) {
	  if(direction == "down"){
		$('#Skills').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 2000);
	}else{
		$('#Skills').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 200);
	}
    
  },
  offset: '100%'
})
	
	var waypoint5 = new Waypoint({
  element: document.getElementById('fifthFade'),
  handler: function(direction) {
	  if(direction == "down"){
		$('#fifthFade').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 2000);
	}else{
		$('#fifthFade').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 200);
	}
    
  },
  offset: '0%'
})
	var waypoint6 = new Waypoint({
  element: document.getElementById('lastFade'),
  handler: function(direction) {
	  if(direction == "down"){
		$('#lastFade').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 2000);
	}else{
		$('#lastFade').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 200);
	}
    
  },
  offset: '100%'
})
	
	$('#navlist li').each(function(){
		var link = $(this).find("a").attr('href');
		console.log(link);
    $(this).click(function(){ 
        $("html, body").animate({ scrollTop: $(link).offset().top - (windowH * 0.05) }, 1000);
        return false; 
    });
});
});