$(document).ready(function(){
	
	$("#newroom").click(function() {
		$("#modal-container").show();
	})

	$("#login").click(function() {
		$("#login-container").show();
	})

	$("#submit").click(function() {
		$("#modal-container").hide();
		
	})

	$("#cancel").click(function() {
		$("#modal-container").hide();
	})	
	
	$("#login-cancel").click(function() {
		$("#login-container").hide();
	})	

	$("#login-submit").click(function() {
		$("#login-container").hide();
	})	

	$(".alert-icon").hover(function() {
	    $('.message').animate({width:'100%'});
		$('.message').html("Alert: Out of Eggs! 12:20AM April 26, 2016");
		$('.message').css("padding-left", 10);
	}, function() {
	    $('.message').animate({width:'0%'});
	    $('.message').html("");
	    $('.message').css("padding-left", 0);
	})

	$(".grocery-item").click(function() {
		if ($(this).hasClass("grocery-item-complete")) {
			$(this).removeClass("grocery-item-complete");
		} else {
			$(this).addClass("grocery-item-complete");
		}
	})



});