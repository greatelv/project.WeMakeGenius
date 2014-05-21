//메인 초기화
$(function () {
	
	//Play Page에서 게임 리스트 Over시 Info Container 정보 조회 
	$( "#game_list_ctr li" ).hover(function() {
    	var curElem = $(this);
	
		curElem.children('button').fadeIn();
    	
    	var curMeta = _.find(gameMeta, function(item){
    		console.log(item);
    		console.log(curElem.attr('gameId'));
    		return item.id == curElem.attr('gameId');
    	});



    	$('#game_info_ctr h1').text(curMeta.title);
    	$('#game_info_ctr p').text(curMeta.desc);
    	
    	$('#game_info_ctr')
    		.css('background-image', 'url(./assets/img/intention/'+curMeta.id+'.gif)')
    		.css('background-color', curMeta.guideColor);
    	

  	}, function() {
    	$(this).children('button').fadeOut();
  	});


    $('#game_list_ctr').find('button').click(function(){
        $('.page').hide();
        $('#page_games').show();
        
        setTimeout(function(){
        	$("#start_message").html("<img src='assets/img/game/img_ready.png'></img>");
        	
        	setTimeout(function(){
        		$("#start_message").html("<img src='assets/img/game/img_go.png'></img>");
        		
        		setTimeout(function(){
            		$("#start_message").html("");
            	}, 1000);
        		
        	}, 1500);
        	
        }, 500);
    });
});



