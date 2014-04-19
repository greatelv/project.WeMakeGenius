//메인 초기화
$(function gnbClickHandler() {

	$('.page-locater').click(function(){
		var targetRef = $(this).attr('ref');

		$('.page').hide();
		$('#page_'+targetRef).show();

		$('.page-locater').parent('li').removeClass('active');
		$(this).parent('li').addClass('active');

		//alert('targetRef : '+targetRef);
	})

});