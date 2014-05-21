
var runTimer = function(){

	var limitSec = 10;
	var duration = 1000 * limitSec;

	var progressElem = $('#timeline-progress');
	var scoreElem = $('#score');

	progressElem.stop().width(0).animate({
		width: '600px',
	}, {
		duration: duration,
		specialEasing :{
			width: 'linear'
		},
		step: function(now, fx){
			currentTime = Math.round((now * duration) / 600);
			var nRemainTime =  parseInt(currentTime/1000);
			var scoreText = limitSec - nRemainTime;
			scoreElem.text(scoreText);
			//_elem.current.text(nRemainTime.toString());
		},
		complete: function(){
			console.log('complete!!');
		}

	});

}
