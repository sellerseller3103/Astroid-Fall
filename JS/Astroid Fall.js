// start below
$(document).ready(function() {
	$(document).keydown(function(b) {
		
		if(b.keyCode === 37){
		$("#orange").animate({left: "-=25px"}, "fast");
		
		}
		if(b.keyCode === 39) {
		$("#orange").animate({left: "+=25px"}, "fast");
		}
	
	})

});