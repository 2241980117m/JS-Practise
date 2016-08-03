window.onload=function(){
	var p=document.getElementsByTagName("p")[0];
	document.onkeydown=function(event){
			var even=event||window.event;
			p.innerHTML=even.keyCode;
			return false;
	}
}