window.onload=function(){
	var a=document.getElementsByTagName("button")[0];
	var b=document.getElementById("div2");
	var c=document.getElementById("div3");
	a.onclick=function(){
		b.style.display=b.style.display=="block"?   "none":"block";
	}
	c.onclick=function(){
		b.style.display="none";
	}
    
}