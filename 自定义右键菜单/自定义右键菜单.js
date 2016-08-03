window.onload=function(){
     var li=document.getElementsByTagName("li");
     var ul=document.getElementsByTagName("ul")[0];
     ul.style.display="none";
     for(i=0;i<li.length;i++){
     	li[i].onmouseover=function(){
     		this.className="current";
     	}
     	li[i].onmouseout=function(){
     		this.className="";
     	}
     }
     document.oncontextmenu=function(event){
     	var event=event||window.event;
     	ul.style.display="block";
     	ul.style.left=event.clientX+"px";
     	ul.style.top=event.clientY+"px";
     	return false;
     }
     document.onclick=function(){
     	ul.style.display="none";
     }
}