//메인 초기화
$(function () {
	
	//Play Page에서 게임 리스트 Over시 Info Container 정보 조회 
	$( "#game_list_ctr li" ).hover(function() {
    	var curElem = $(this);
	
		curElem.children('button').fadeIn();
    	
    	var curMeta = _.find(gameMeta, function(item){
    		return item.id == curElem.attr('gameId');
    	});

    	$('#game_info_ctr')
    		.css('background-image', 'url(./assets/img/intention/'+curMeta.id+'.gif)')
    		.css('background-color', curMeta.guideColor);
    	

  	}, function() {
    	$(this).children('button').fadeOut();
  	});


    //게임시작버튼 클릭
    $('#game_list_ctr').find('button').click(function(){

        var curElem = $(this).parent('li');
        var curGameId = curElem.attr('gameId');

        console.log('curGameIdcurGameId : '+curGameId);

        game.readyGo(function(){
            if(curGameId == 'g1'){
                game1.init();
            }
            if(curGameId == 'g2'){
                game2.init();
            }       
        });
    });
});



