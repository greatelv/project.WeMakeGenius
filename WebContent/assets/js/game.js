//게임 공통 요소 처리 모듈
var game = function(){

	//필요한 엘리먼트 캐싱
	var elem = {
		This : 			$('#page_games'),
		score : 		$('#score'),
		startMessge : 	$('#start_message'),
		finishMessage : $('#finish_message'),
		gameHeader : 	$('.game-info-header'),
		timer : 		$('#timer'),
		progess : 		$('#timeline-progress')
	};

	//문제 풀이시 획득 포인트
	var acqPoint = 1000;

	var point = 0;
	var combo = 0;

	var limitSec = 5;
	
	var sycPoint = function(){
		elem.score.text(point+' Point' +  + combo +' COMBO');
	};

	//setTimer 객체들
	var setTimerArray = [];

	return {

		readyGo : function(callback){	//레디고 출력

			$('.page').hide();
		    $('#page_games').show();
		    $('#rank-scroll').hide();
		    $("#finish_message").html("");
		    
		    setTimerArray.push(setTimeout(function(){
		    	$("#start_message").html("<img src='assets/img/game/img_ready.png'></img>");
		    	
		    	setTimerArray.push(setTimeout(function(){
		    		$("#start_message").html("<img src='assets/img/game/img_go.png'></img>");
		    		
		    		setTimerArray.push(setTimeout(function(){
		        		$("#start_message").empty();
						$('.game-info-header').show();

		        		game.runTimer();
		        		callback && callback();

		        	}, 1000));
		    		
		    	}, 1500));
		    	
		    }, 500));
		},
		runTimer : function(){ //타이머 출력
			
			var duration = 1000 * limitSec;
			
			elem.progess.stop().width(0).animate({
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
					elem.timer.text(curSec);
					//_elem.current.text(nRemainTime.toString());
				},
				complete: function(){
					//게임이 끝나고 할 액션 정보
					console.log('complete!!');
					setTimeout(function(){
						$(".game-info-header").hide();
						$(".play-ground").hide();
		        		$("#finish_message").html(
		        				"<img src='assets/img/game/img_gameover.png'></img><br/>" +
		        				"<h2>점수 : "+ point +"</h2>");
		        	}, 100);
				}

			});
		},
		solve : function(isCorrect){
			if(isCorrect){
				point = point + acqPoint;
				combo++;
			}else{
				point = point - acqPoint;
				combo=0;
			}
			sycPoint();
		},
		clearGame : function(){
			combo = 0;
			point = 0;
			sycPoint();

			elem.gameHeader.hide();
			elem.progess.stop().width(0);
			elem.timer.text(10);

			$.each(setTimerArray, function(idx, item){
				item.clearTimeout();
			});
		}
	};
}();


//숫자 대소비교 게임 인스턴스
var game1 = function(){

	var _this = $('#game_g1');

	var elem = {
		question : 	_this.find('.question'),
		leftNum :  	_this.find('.left-num'),
		rightNum :  _this.find('.right-num'),
		option : 	_this.find('.option'),
		title : 	$('#game_title')
	};

	var currentQNum = {
		left : 0,
		right : 0
	};

	var getRanNum = function(size){
		var length = 1;
		while(size)
		{
			length = length * 10;
			size--;
			if(size == 0)
			{
				break;
			}
		}		
		return Math.floor(Math.random()*length);
	};

	//정답 제출 핸들러

	elem.option.find('> div').click(function(){
		var largeT = $(this).attr('largeT');
		game1.submit(largeT);
	});

	//제출함수 로 부터 UI 처리
	var	processSumbit = function(bool){
		if(bool){
			$("#result_message").html("<img src='assets/img/game/img_feedback_o.png'></img>").show();
			$("#result_message").fadeOut(500);
			game.solve(true);
			game1.playSet();

		}
		else if(!bool){
			$("#result_message").html("<img src='assets/img/game/img_feedback_x.png'></img>").show();
			$("#result_message").fadeOut(500);
			game.solve(false);
			game1.playSet();
		}
	};
	
	return{
		init : function(){
			_this.show();
			elem.title.text('숫자대소비교');
			game1.playSet();
		},
		playSet : function(){
			elem.question.hide();

			currentQNum.left = getRanNum(2);
			currentQNum.right = getRanNum(2); 

			elem.leftNum.text(currentQNum.left);
			elem.rightNum.text(currentQNum.right);
			elem.question.fadeIn(350);
		},
		submit : function(largeT){

			switch (largeT){
				case 'left' :
					if(currentQNum.left > currentQNum.right){
						processSumbit(true);
					}else{
						processSumbit(false);
					}
				break;
				case 'right' :
					if(currentQNum.left < currentQNum.right){
						processSumbit(true);
					}else{
						processSumbit(false);
					}

				break;
				case 'equal' :

					if(currentQNum.left == currentQNum.right){
						processSumbit(true);
					}else{
						processSumbit(false);
					}

				break;
			}
		}
	};
}();

//사진숫자세기 게임 인스턴스
var game2 = function(){

	var _this = $('#game_g2');

	var elem = {
		question : 	_this.find('.question'),
		leftNum :  	_this.find('.left-num'),
		rightNum :  _this.find('.right-num'),
		option : 	_this.find('.option'),
		title : 	$('#game_title')
	};

	var currentQNum = {
		left : 0,
		right : 0
	};

	var getRanNum = function(size){
		var length = 1;
		while(size)
		{
			length = length * 10;
			size--;
			if(size == 0)
			{
				break;
			}
		}		
		return Math.floor(Math.random()*length);
	};

	//정답 제출 핸들러

	elem.option.find('> div').click(function(){
		var largeT = $(this).attr('largeT');
		game2.submit(largeT);
	});

	//제출함수 로 부터 UI 처리
	var	processSumbit = function(bool){
		if(bool){
			$("#result_message").html("<img src='assets/img/game/img_feedback_o.png'></img>").show();
			$("#result_message").fadeOut(500);
			game.solve(true);
			game2.playSet();

		}
		else if(!bool){
			$("#result_message").html("<img src='assets/img/game/img_feedback_x.png'></img>").show();
			$("#result_message").fadeOut(500);
			game.solve(false);
			game2.playSet();
		}
	};
	
	return{
		init : function(){
			_this.show();
			elem.title.text('사진숫자세기');
			game2.playSet();
		},
		playSet : function(){

		},
		submit : function(largeT){
		}
	};
}();