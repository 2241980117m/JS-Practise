window.onload=function(){
	var li=document.getElementsByTagName("li");
	var foot=document.getElementById("footer-1");
	for(var i=0;i<li.length;i++){
		li[i].index=i;
		li[i].onmouseover=function(){
			this.className="current";
			var img=document.createElement("img");
			img.src=document.getElementsByTagName("img")[this.index].src;
			img.id="footer";
			foot.appendChild(img);
			foot.style.display="block";
		  }
		li[i].onmouseout=function(){
			this.className="";
			foot.style.display="none";
			foot.removeChild(foot.lastChild);
		}
		li[i].onmousemove=function fun(event){
                 var event=event||window.event;
                 foot.style.top=event.clientY+"px";
                 var width=document.documentElement.offsetWidth-event.clientX;
 foot.style.left=(width<foot.offsetWidth? event.clientX-foot.offsetWidth:event.clientX)+"px";
		}
	}
}