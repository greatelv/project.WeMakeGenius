
$(document).ready(function(){
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
});
