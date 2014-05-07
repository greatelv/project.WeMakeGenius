
$(document).ready(function(){
	$('#join').click(function(){
			$postid 		= document.getElementById("input-id").value;
			$postname		= document.getElementById("input-name").value;
			$postavatar		= document.getElementById("input-pass").value;
			var json = {"AVATAR":$postavatar,"NAME":$postname,"ID":$postid};
			console.log(json);
			$.ajax({
				url		:	"join.jsp",
				type	:	"POST",
				data	:	json,
				datatype:	"json",
				
				success	: function(datapost){
					alert(datapost);
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
