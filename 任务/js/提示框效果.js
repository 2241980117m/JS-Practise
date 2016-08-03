window.onload=function(){
       var li=document.getElementsByTagName("li");
       for(i=0;i<li.length;i++){
       	   li[i].onmouseover=function(){
       	   	     //this.style.backgroundImage="url(../图片/a.jpg)";
       	   	     this.getElementsByTagName("img")[0].style.display="block";
                 this.getElementsByTagName("h3")[0].style.display="none";
       	   	     this.getElementsByTagName("span")[0].style.display="none";
       	   }
       	   li[i].onmouseout=function(){
       	   	  //this.removeAttribute("style");
       	   	  this.getElementsByTagName("img")[0].removeAttribute("style");
       	   	  this.getElementsByTagName("h3")[0].removeAttribute("style");
       	   	  this.getElementsByTagName("span")[0].removeAttribute("style");
       	   }
       }
}