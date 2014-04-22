//메인 초기화
$(function () {
	
	//Play Page에서 게임 리스트 Over시 Info Container 정보 조회 
	$( "#game_list_ctr li" ).hover(function() {
    	var curElem = $(this)
	
		curElem.children('button').fadeIn();
    	
    	var curMeta = _.find(gameMeta, function(item){
    		console.log(item);
    		console.log(curElem.attr('gameId'));
    		return item.id == curElem.attr('gameId');
    	});



    	$('#game_info_ctr h1').text(curMeta.title);
    	$('#game_info_ctr p').text(curMeta.desc);
    	$('#game_info_ctr .game-pic').css('background-image', 'url(assets/img/'+curMeta.pic+')');

  	}, function() {
    	$(this).children('button').fadeOut();
  	});
});


var gameMeta = [
	{
		id : 'g1',
		title : '숫자비교게임',
		desc : '숫자 비교 게임은 제한 시간 내에 이전 숫자와 새로운 숫자의 크기를 비교하는 게임 입니다.',
		pic : '01.jpg'
	},
	{
		id : 'g2',
		title : '아이템카운트',
		desc : '그림에 나온 아이템의 개수를 기억한 후 정답을 맞추세요!',
		pic : '02.jpg'
	},
];
