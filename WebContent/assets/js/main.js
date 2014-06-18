//메인 초기화
$(function () {
	$('#rank-scroll').scrollbox({
	  linear: true,
	  step: 1,
	  delay: 0,
	  speed: 100
	});
	
	onSession();
	
});


//배열 프로토타입함수 작성
Array.prototype.remove = function(from) {
		var nPos = this.indexOf(from);
		if ( ~nPos ) this.splice(nPos, 1);
		return this;
};
