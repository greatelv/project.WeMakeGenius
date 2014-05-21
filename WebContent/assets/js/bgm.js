$(function bgm() {
	//게임플레이 화면으로 넘어가는 버튼
	$('#game_play_home').click(function(){
		$(".main_audio").trigger('pause');
		
		var new_audio = "assets/sound/game.mp3";
		main_audio = $('#main_audio').attr("src",new_audio)[0];
		audio_core.play();
	});
	$('#game_play_menu').click(function(){
		$(".main_audio").trigger('pause');
		
		var new_audio = "assets/sound/game.mp3";
		main_audio = $('#main_audio').attr("src",new_audio)[0];
		audio_core.play();
	});
});