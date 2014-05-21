$(function bgm() {
	$(".btn btn-warning start-game").click(function(){
		$(".main_audio")[0].pause();
		alert('오디오가 꺼졌습니다.');
	});
});