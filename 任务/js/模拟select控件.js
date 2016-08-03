window.onload=function(){
	var input=document.getElementsByTagName("input")[0];
	var button=document.getElementsByTagName("button")[0];
	var ul=document.getElementsByTagName("ul")[0];
	var li=ul.getElementsByTagName("li");
    input.onclick=function(){
        ul.style.display=(ul.style.display=="block"?  "none":"block");
        (event||window.event).cancelBubble=true;
    }
     for(i=0;i<li.length;i++){
    	li[i].onmouseover=function(){
    		this.className="current";
    	}
    	li[i].onmouseout=function(){
    		this.className="";
    	}
    	li[i].onclick=function(){
    		input.value=this.innerHTML;
    		ul.style.display="none";
    	}
    }
    button.onmouseout=function(){
    	this.removeAttribute("style");
    }
    button.onmouseover=function(){
    	this.style.color="red";
    }
   document.onclick=function(){
    	if(ul.style.display=="block")
    	     ul.style.display="none";
    }
}