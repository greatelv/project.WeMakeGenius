//게임 공통 요소 처리 모듈
var stats = function(){

	var requestTop5 = function(gameType){

		var data = {id:window.sessionSto}

		$.ajax({
			url		:	"jsp/getScore.jsp",
			type	:	"GET",	
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

	return {

		init : function(callback){	//레디고 출력


		}
		
	};
}();
