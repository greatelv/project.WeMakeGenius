/**
 * Handler Module
 */

var onSession = function(){
	
	if(window.sessionStorage.length != 0){
		
		var id = window.sessionStorage.id  || '';
		var name = window.sessionStorage.name || '';
		
		var navElem = $('.navbar .nav');

		navElem.find('li').eq(3).hide();
		navElem.find('li').eq(4).hide();

		navElem.append('<li class="session-on">'+id+'님 환영합니다. <span class="glyphicon glyphicon-log-out" id="logout" alt="Logout"></span></li>');
	}
};


