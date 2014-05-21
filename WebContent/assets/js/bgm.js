$(function bgm() {
	//게임 실행시 나오는 ready~go~!통제
	//숫자비교게임
	$('#number_compare').click(function(){
		$(".main_audio").trigger('pause');
		
		var new_audio = "assets/sound/ready.mp3";
		
		main_audio = $('#main_audio').attr("src",new_audio)[0];
		main_audio = $('#main_audio').attr("loop",false)[0];
		
	});
	
	//사진 숫자 맞추기 게임
	$('#count_number').click(function(){
		$(".main_audio").trigger('pause');
		
		var new_audio = "assets/sound/ready.mp3";
		
		main_audio = $('#main_audio').attr("src",new_audio)[0];
		main_audio = $('#main_audio').attr("loop",false)[0];
		
	});
	
	//통계화면으로 돌아갈때
});