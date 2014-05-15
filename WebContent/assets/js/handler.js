/**
 * Handler Module
 */

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

//유저 관련 핸들러
$(function UserHandler() {
	
	//회원가입
	$('#join').click(function(){
		var postid = document.getElementById("input-register-id").value;
		var postname = document.getElementById("input-register-name").value;
		var json = {"NAME":postname,"ID":postid};
		console.log(json);
		$.ajax({
			url		:	"jsp/join.jsp",
			type	:	"POST",
			data	:	json,
			datatype:	"json",
			
			success	: function(result){
				var jsonObject = JSON.parse(result);
				if (jsonObject.result == 0) {
					alert("회원가입에 실패 했습니다. 이유 : " + jsonObject.message);
				} else {
					alert("회원가입을 성공했습니다. 로그인 해 주세요.");
					$('#register').modal('hide')
				}
			},
			error	: function(){
				console.log('error from post');
			},
			complete: function(){
				console.log('complete from post');
			}
		});
	});
	
	
	//로그인
	$('#login').click(function(){
		var id = document.getElementById("input-login-id").value;
		
		$.ajax({
			url		:	"jsp/login.jsp?ID="+id,
			type	:	"GET",
			data	:	json,
			datatype:	"json",
			success	: function(res){
				var result = JSON.parse(res);
				
				if(result == 1){
					alert('환영합니다.');
				}else{
					alert('로그인에 실패하였습니다.');
				}
				
				console.log(result);
			},
			error	: function(){
				console.log('error from get');
			},
			complete: function(){
				console.log('complete from get');
			}
		});
	});
});

