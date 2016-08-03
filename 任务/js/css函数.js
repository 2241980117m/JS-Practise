window.onload=function(){
	var div=document.getElementsByTagName("div");
	var context=document.defaultView.getComputedStyle(div[0],null);
	document.onclick=function(){
		div[4].style.display="block";
	}
	div[1].onclick=function(){
		alert("width:"+context.width+"\nheight:"+context.height+"\nbackground-color:"+context.backgroundColor);
	}
	div[2].onclick=function(){
		 div[0].className="div2";
		 for(i=1;i<div.length-1;i++){
               div[i].style.backgroundColor="#A5D352";
		 } 
	}
	div[3].onclick=function(){
		div[0].className="div1";
		 for(i=1;i<div.length-1;i++){
               div[i].style.backgroundColor="#0062E8";
           }

	}
}