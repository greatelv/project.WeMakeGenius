var runTimer = function(){

	var limitSec = 10;
	var duration = 1000 * limitSec;

	var progressElem = $('#timeline-progress');
	var timerElem = $('#timer');

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
			var curSec = limitSec - nRemainTime;
			timerElem.text(curSec);
			//_elem.current.text(nRemainTime.toString());
		},
		complete: function(){
			console.log('complete!!');
		}

	});

}