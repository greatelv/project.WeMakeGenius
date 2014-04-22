//메인 초기화
//페이지간의 전환
$(function gnbClickHandler() {

	$('.page').hide();
	$('#page_home').show();

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