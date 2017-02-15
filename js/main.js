$(function(){

	  $(".signin").click(function() {
	    $("div.modal").fadeIn("div.modal");
	  }); //bring up the sign in box

	  $("button.close").click(function() {
	    $("div.modal").fadeOut("div.modal");
	  }); //close the sign in box

	  $("button.submit").click(function() {
	    $("input").addClass("error");
	  }); //hit submit but no info entered resulting in an error

	  $("input").click(function() {
	    $(this).removeClass("error");
	  }); // remove error if there is an input ....this is the buttom submit 

	}); //close functon
