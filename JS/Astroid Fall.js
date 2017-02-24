// start below
$(document).ready(function() {
	$(document).keydown(function(b) {
		
		if(b.keyCode === 37){
		$("#orange").animate({left: "-1px"}, "slow");
		
		}
		if(b.keyCode === 39) {
		$("#orange").animate({rightt: "-1px"}, "slow");
		}
	
	})

});