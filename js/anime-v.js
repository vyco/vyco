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
.add({
	targets: 'footer',
	opacity: [0,1],
	translateY: [-10,0],
	duration: 4000,
	offset: 2000
});
movement();

});
	var newTimeLine = anime({

	targets: clickedAboutUnit,
	translateX: [0,250],
	translateY: [0,100],
	easing: 'easeOutQuart'
});
function movement(){
	var otherAboutUnit = $(".about-unit").data('number', $('2'));
	var clickedAboutUnit = $(".about-unit").data('number', $('1'));
		clickedAboutUnit.click(function(){
			console.log("clicked");
			newTimeLine.play();

		});

}
