//레디고 출력
var game = function(){

	//필요한 엘리먼트 캐싱
	var elem = {
		this : 			$('#page_games'),
		score : 		$('#score'),
		startMessge : 	$('#start_message'),
		gameHeader : 	$('.game-info-header')
	};

	var point = 0;
	var combo = 0;

	var sycPoint = function(){
		elem.score.text(point+' Point');
	};



	return {
		readyGo : function(){
			$('.page').hide();
		    $('#page_games').show();
		    $('#rank-scroll').hide();
		    
		    setTimeout(function(){
		    	$("#start_message").html("<img src='assets/img/game/img_ready.png'></img>");
		    	
		    	setTimeout(function(){
		    		$("#start_message").html("<img src='assets/img/game/img_go.png'></img>");
		    		
		    		setTimeout(function(){
		        		$("#start_message").empty();
						$('.game-info-header').show();

		        		game.runTimer();

		        	}, 1000);
		    		
		    	}, 1500);
		    	
		    }, 500);
		},
		runTimer : function(){
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
	}
}();
