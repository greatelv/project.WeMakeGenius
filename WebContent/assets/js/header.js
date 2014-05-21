/**
 * Handler Module
 */
	
var navElem = $('.navbar .nav');

var onSession = function(){
	
	if(window.sessionStorage.length != 0){
		
		var id = window.sessionStorage.id  || '';
		var name = window.sessionStorage.name || '';
		
		navElem.find('li').eq(3).hide();
		navElem.find('li').eq(4).hide();

		navElem.append('<li class="session-on">'+id+'님 환영합니다. <span class="glyphicon glyphicon-log-out" id="logout" alt="Logout" data-toggle="modal" data-target=".logout-modal"></span></li>');
	}
};

var outSession = function(){
	sessionStorage.removeItem('id');
	sessionStorage.removeItem('name');

	location.reload();	
};