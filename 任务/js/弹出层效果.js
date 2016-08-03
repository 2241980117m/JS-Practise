window.onload=function(){
	var button=document.getElementsByTagName("button")[0];
	var all=document.getElementById("div2");
	var footer=document.getElementById("div3");
	var close=document.getElementById("close");
    button.onclick=function(){
    	footer.style.display="block";
    	all.style.backgroundColor="black";
    	all.style.opacity="0.5";
    }
	close.onclick=function(){
		footer.style.display="none";
    	all.style.backgroundColor="white";
    	all.style.opacity="1";	
	}
}