$(document).ready(function(){
	  var functionBasedDuration = anime({
  targets: '.work-unit',
  translateX: [-25,0],
	opacity: [0,1],
  delay: function(el, i, l) {
    return 1000 + (i * 1000);
  }

})

});
