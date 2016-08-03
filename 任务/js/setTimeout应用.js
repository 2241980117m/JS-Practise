window.onload=function(){
    var li=document.getElementsByTagName("li");
	for(i=0;i<li.length;i++){
	  li[i].onmouseover=function(){
		this.className="current";
	}
	li[i].onmouseout=function(){
		this.className="";
	}
  }
}