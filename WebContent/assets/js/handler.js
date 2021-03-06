/**
 * Handler Module
 */

//페이지간의 전환
$(function GnbHandler() {
	$('.page').hide();
	$('#page_home').show();

	//GNB 핸들러
	$('.page-locater').click(function(e){

		e.stopImmediatePropagation();
		var targetRef = $(this).attr('ref');

		if(targetRef=='play'){
			if(window.sessionStorage.length == 0){
				alert('로그인을 먼저 해야 합니다.');
				return false;
			}
		}else if(targetRef=='stats'){
			if(window.sessionStorage.length != 0){
				stats.init();
			}else{
				alert('로그인을 먼저 해야 합니다.');
				return false;
			}
		}

		$('.page').hide();
		$('#page_'+targetRef).show();

		$('.page-locater').parent('li').removeClass('active');
		$(this).parent('li').addClass('active');

		//게임 진행중에 나왔을 시 기존 게임 컨테이너 clear
		game.clearGame();
	});

});

//Home 페이지 핸들러
$(function HomeHandler() {
	//Home Page 게임 플레이 버튼 핸들러 및 로그인 유무에 따른 게임페이지 이용제한
	$('#hello button').click(function(){
		if(window.sessionStorage.length != 0){
			$('.page-locater[ref="play"]').trigger('click');
		}
		else{
			alert('로그인을 먼저 해야 합니다.');	
		}
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
					$('#register').modal('hide');
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
			url		:	"jsp/login.jsp?id="+id,
			type	:	"GET",
			datatype:	"json",
			success	: function(res){
				var jsonr = JSON.parse(res);
				if(jsonr.result == 1){
					alert(jsonr.name+'님 환영합니다.');

					sessionStorage.removeItem('id');
					sessionStorage.removeItem('name');
					
					sessionStorage.setItem("id", id);
					sessionStorage.setItem("name", jsonr.name);

					$('.login-modal').modal('hide');

					onSession();
					
					$.ajax({
						url		:	"jsp/postvisit.jsp?id="+id,
						type	: 	"POST",
						datatype:	"json",
						success :	function(data){
							//alert(data);
						}
					});
				}
				else{
					alert('로그인에 실패하였습니다.');
					$('#input-login-id').val("");
				}
			},
			error	: function(){
				console.log('error from get');
			}
		});
	});
	
	//로그인시 엔터키로 로그인할 수 있게끔 핸들링
	$('#input-login-id').keypress(function(e) {
	    if (e.which == '13') {
	    	$('#login').trigger('click');
	        
	    }
	});
	
	$('#logout-btn').click(function(){
		outSession();
	});
	
	
	$('#back_to_select').click(function(){
		alert('hello');
	});
});

