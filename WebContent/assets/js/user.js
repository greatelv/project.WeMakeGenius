/*
*//**
 * 회원 가입 Ajax
 *//*
$(document).ready(function(){
	$('#join').click(function(){
		var postid = document.getElementById("input-register-id").value;
		var postname = document.getElementById("input-register-name").value;
		alert(postid +" 님 회원가입을 시도중입니다.");
		var json = {"NAME":postname,"ID":postid};
		console.log(json);
		$.ajax({
			url		:	"jsp/join.jsp",
			type	:	"POST",
			data	:	json,
			datatype:	"json",
			
			success	: function(result){
				console.log(result);
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




*/