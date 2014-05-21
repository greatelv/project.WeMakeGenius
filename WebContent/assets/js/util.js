function random(input_length)
{
	var length = 1;
	while(input_length)
	{
		length = length * 10;
		input_length--;
		if(input_length == 0)
		{
			break;
		}
	}		
	return Math.floor(Math.random()*length);
}

function sleep(num){	//[1/1000초]
 var now = new Date();
   var stop = now.getTime() + num;
   while(true){
	 now = new Date();
	 if(now.getTime() > stop)return;
   }
}

function good_or_bad(bool)
{
	if(bool)
	{
		
	}
}