//메인 초기화
//페이지간의 전환
$(function GnbHandler() {

	$('.page').hide();
	$('#page_home').show();

	//GNB 핸들러
	$('.page-locater').click(function(){
		var targetRef = $(this).attr('ref');

		$('.page').hide();
		$('#page_'+targetRef).show();

		$('.page-locater').parent('li').removeClass('active');
		$(this).parent('li').addClass('active');

		//alert('targetRef : '+targetRef);
	})

	//순위 정보 Marquee
	$("#rank-scroll > ul").liScroll({travelocity: 0.13});

});

//Home 페이지 핸들러
$(function HomeHandler() {

	//Home Page 게임 플레이 버튼 핸들러
	$('#hello button').click(function(){
		$('.page-locater[ref="play"]').trigger('click');
	});

});