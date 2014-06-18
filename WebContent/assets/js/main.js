//메인 초기화
$(function () {

	//GNB 하단 Marquee에 들어갈 계정 스코어 정보
	$.ajax({
		url		:	"jsp/getscore.jsp?type=marquee",
		type	:	"GET",	
		datatype:	"json",
		
		success	: function(result){
			var res = JSON.parse(result);

			$.each(res, function(idx, item){
				var itemElem = 
					'<li>'+
						'<span class="rank">'+(idx+1)+'위 </span>'+
						'<span class="user">'+item.name+' [<b>'+item.user_id+'</b>] </span> '+
						'<span class="point">'+item.score+'점 </span>'+
					'</li>';

				$('#rank-scroll ul').append(itemElem);
			});


			//순위 정보 Marquee
			$("#rank-scroll > ul").liScroll({travelocity: 0.13});
		}
	});

	
	
	onSession();
	
});


//배열 프로토타입함수 작성
Array.prototype.remove = function(from) {
		var nPos = this.indexOf(from);
		if ( ~nPos ) this.splice(nPos, 1);
		return this;
};
