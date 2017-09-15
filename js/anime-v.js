$(document).ready(function(){
	var basicTime = anime.timeline();
	basicTime.add
	({
	  targets: '#reason ',

		opacity: [0,1],
	  translateY: [-50,0],
		duration: 6000,
		offset: 200

	})
	.add({
		targets: '.about-unit',

		translateX: [-30,0],
		duration: 4000,
		offset: 200,
		opacity: 1,
		delay: function(el, i, l){
			return 1000+(i*1000);
		}
	})
});
