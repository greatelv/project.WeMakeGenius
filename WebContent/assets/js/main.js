//메인 초기화
$(function () {
	$('#rank-scroll').scrollbox({
	  linear: true,
	  step: 1,
	  delay: 0,
	  speed: 100
	});
	
	onSession();
	
	$(".main_audio").trigger('load');
});



