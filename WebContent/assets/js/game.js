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

	var type = null;

	//문제 풀이시 획득 포인트
	var acqPoint = 1000;

	var point = 0;
	var combo = 0;

	var limitSec = 60;
	
	var sycPoint = function(){
		elem.score.html(point+' Point'+'&nbsp;&nbsp;<span> '+combo+' Combo</span>');
	};
	//setTimer 객체들
	var setTimerArray = [];

	//게임 오버에서 홈으로 버튼 핸들러
	$('#finish_message .home').click(function(){
		$('.page-locater[ref="play"]').trigger('click');
		$(".main_audio").trigger('pause');
	});

	return {

		readyGo : function(callback){	//레디고 출력

			$('.page').hide();
		    $('#page_games').show();
		    $('#rank-scroll').hide();
		    $("#finish_message").hide();
		    
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

		        		$("#finish_message").show();
		        		$("#finish_message").find('.point').text(point+' Point');
		        		$("#finish_message").find('.combo').text(combo+' Combo');

		        		$(".main_audio").trigger('pause');	
						var ending = "assets/sound/BT_ending.mp3";
						main_audio = $('#main_audio').attr("src",ending)[0];
						main_audio = $('#main_audio').attr("loop",true)[0];       
						
		        	}, 100);
					
					var id =  window.sessionStorage.id  || '';
					var json = {"GAMETYPE":type, "ID":id, "SCORE":point, "MAXCOMBO":combo};
					
					$.ajax({
						url		:	"jsp/putscore.jsp",
						type	:	"POST",	
						data	:	json,
						datatype:	"json",
						
						success	: function(result){
							//alert(result);
						},
						error	: function(){
							console.log('error from post');
						},
						complete: function(){
						}
					});
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

			$(".main_audio").trigger('pause');
		},
		getScore : function(){
			return point;
		},
		getCombo : function(){
			return combo;
		},
		setType : function(gameType){
			type = gameType;
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
			game.setType(1);
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
		picture : 	_this.find('.picture'),
		option : 	_this.find('.option'),
		num1 :  	_this.find('.num1'),
		num2 :  	_this.find('.num2'),
		num3 :  	_this.find('.num3'),
		num4 :  	_this.find('.num4'),
		title : 	$('#game_title')
	};

	var level = 1;
	var currentPicMeta = {};
	var example = {}


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

		/*이 함수에 레벨을 정수로 입력하면 해당 레벨의 문제가 랜덤으로 반환됩니다.
	 * 콘솔 창에 반환된 JSON과 레벨이 표시됩니다.
	 * 입력 : 정수
	 * 출력 : JSON 배열
	 */
	var getRanPicMeta = function(input_level){
		var random_number;
		switch(input_level)
		{
			case 1:
				console.log("레벨1 문제를 랜덤으로 가져옵니다.");
				random_number = Math.floor(Math.random() * picture.level_1.length);
				// 랜덤숫자를 만들지만 최대 숫자가 해당 레벨의 최대 배열을 못넘습니다.
				console.log(picture.level_1[random_number]);
				return picture.level_1[random_number];
				break;
			
			case 2:
				console.log("레벨2 문제를 랜덤으로 가져옵니다.");
				random_number = Math.floor(Math.random() * picture.level_2.length);
				// 랜덤숫자를 만들지만 최대 숫자가 해당 레벨의 최대 배열을 못넘습니다.
				console.log(picture.level_2[random_number]);
				return picture.level_2[random_number];
				break;
				
			case 3:
				console.log("레벨3 문제를 랜덤으로 가져옵니다.");
				random_number = Math.floor(Math.random() * picture.level_3.length);
				// 랜덤숫자를 만들지만 최대 숫자가 해당 레벨의 최대 배열을 못넘습니다.
				console.log(picture.level_3[random_number]);
				return picture.level_3[random_number];
				break;
				
			case 4:
				console.log("레벨4 문제를 랜덤으로 가져옵니다.");
				random_number = Math.floor(Math.random() * picture.level_4.length);
				// 랜덤숫자를 만들지만 최대 숫자가 해당 레벨의 최대 배열을 못넘습니다.
				console.log(picture.level_4[random_number]);
				return picture.level_4[random_number];
				break;
				
			case 5:
				console.log("레벨5 문제를 랜덤으로 가져옵니다.");
				random_number = Math.floor(Math.random() * picture.level_5.length);
				// 랜덤숫자를 만들지만 최대 숫자가 해당 레벨의 최대 배열을 못넘습니다.
				console.log(picture.level_5[random_number]);
				return picture.level_5[random_number];
				break;
				
			default :
				console.log("예외 : random_picture 함수에는 1~5만 입력가능합니다.");
				return -1;
		}
	}

	var getExample = function(nCorrectAnswer) {
		var nStart = Math.max(nCorrectAnswer-2 , 0);
		var aPool = _.range(nStart, nCorrectAnswer+2);
		aPool = aPool.remove(nCorrectAnswer);

		var aExamples = _.flatten([_.sample(aPool, 4), nCorrectAnswer]);
		
		return _.shuffle(aExamples);
	};

	var upgradeLevel = function(){
		if(game.getScore() == 4000){
			level = 1;
		}else if(game.getScore() == 7000){
			level = 2;
		}else if(game.getScore() == 12000){
			level = 3;
		}else if(game.getScore() == 16000){
			level = 4;
		}
	};

	//정답 제출 핸들러
	elem.option.find('> div').click(function(){
		var submitVal = $(this).text();
		game2.submit(submitVal);
	});
	
	return{
		init : function(){
			_this.show();
			elem.title.text('사진숫자퀴즈');
			game2.playSet();
			game.setType(2);
		},
		playSet : function(){
			elem.picture.hide();
			elem.option.find('> div').hide();

			upgradeLevel();

			currentPicMeta = getRanPicMeta(level);
			var exampleArray = getExample(currentPicMeta.ANSWER);

			$.each(exampleArray, function(idx, item){
				elem.option.find('> div').eq(idx).text(item).fadeIn(200);
			})

			elem.picture.css('background-image', 'url(assets/game/'+level+'/'+currentPicMeta.URL+')');
			elem.picture.fadeIn(350);
		},
		submit : function(submitVal){
			if(submitVal == currentPicMeta.ANSWER){
				processSumbit(true);
			}else{
				processSumbit(false);
			}
		}
	};
}();