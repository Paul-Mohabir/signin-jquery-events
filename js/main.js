$(function(){

	  $(".signin").click(function() {
	    $("div.modal").fadeIn("div.modal");
	  });
	  $("button.close").click(function() {
	    $("div.modal").fadeOut("div.modal");
	  });
	  $("button.submit").click(function() {
	    $("input").addClass("error");
	  });
	  $("input").click(function() {
	    $(this).removeClass("error");
	  });
	});
