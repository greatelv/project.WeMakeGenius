//게임 공통 요소 처리 모듈
var stats = function(){

	var _this = $('#page_stats');

	var elem = {
		gmae1_tale : _this.find('.game1 table'),
		gmae2_tale : _this.find('.game2 table'),
		game1_mystats : _this.find('.game1 ul'),
		game2_mystats : _this.find('.game2 ul')
	}

	var requestTop5 = function(gameType, callback){

		var data = {
			"id" : window.sessionStorage.id,
			"type" : "top5",
			"game_type" : gameType
		}

		$.ajax({
			url		:	"jsp/getscore.jsp",
			type	:	"GET",	
			data	:	data,
			datatype:	"json",
			
			success	: function(result){
				callback && callback(result);				
			},
			error	: function(){
				console.log('error from post');
			},
			complete: function(){
			}
		});
	};

	var requestMystats = function(gameType, callback){

		var data = {
			"id" : window.sessionStorage.id,
			"type" : "mystats",
			"game_type" : gameType
		}

		$.ajax({
			url		:	"jsp/getscore.jsp",
			type	:	"GET",	
			data	:	data,
			datatype:	"json",
			success	: function(result){
				callback && callback(result);				
			},
			error	: function(){
				console.log('error from post');
			},
			complete: function(){
			}
		});
	};

	return {

		init : function(callback){	//레디고 출력

			elem.gmae1_tale.find('tbody').empty();
			elem.gmae2_tale.find('tbody').empty();

			requestTop5('1', function(res){
				var result = JSON.parse(res);
				console.log('result : '+result);
				//var rankTable = $('#page_stats')
				
				$.each(result, function(idx, item){
					var itemElem = 
						"<tr>"+
							"<td>"+(idx+1)+"</td>"+
							"<td>"+item.ID+"</td>"+
							"<td>"+item.SCORE+"</td>"+
							"<td>"+item.PLAY_TIME+"</td>"+
						"</tr>";

					elem.gmae1_tale.find('tbody').append(itemElem);
				});
			});			

			requestTop5('2', function(res){
				var result = JSON.parse(res);
				console.log('result : '+result);
				$.each(result, function(idx, item){
					var itemElem = 
						"<tr>"+
							"<td>"+(idx+1)+"</td>"+
							"<td>"+item.ID+"</td>"+
							"<td>"+item.SCORE+"</td>"+
							"<td>"+item.PLAY_TIME+"</td>"+
						"</tr>";

					elem.gmae2_tale.find('tbody').append(itemElem);
				});
			});

			requestMystats('1', function(res){
				var result = JSON.parse(res)[0];

				console.log('result : '+JSON.stringify(result));
				elem.game1_mystats.find('.play-cnt > span').text(result.play_cnt);
				elem.game1_mystats.find('.max-combo > span').text(result.max_combo);
				elem.game1_mystats.find('.max-score > span').text(result.max_score);
			});

			requestMystats('2', function(res){
				var result = JSON.parse(res)[0];
				console.log('result : '+JSON.stringify(result));
				elem.game2_mystats.find('.play-cnt > span').text(result.play_cnt);
				elem.game2_mystats.find('.max-combo > span').text(result.max_combo);
				elem.game2_mystats.find('.max-score > span').text(result.max_score);
			});

		}
		
	};
}();
