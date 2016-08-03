window.onload=function(){
	var input=document.getElementsByTagName("input");
	var button=document.getElementsByTagName("button");
	var footer=document.getElementById("footer");
	function change(a,b){
         footer.style[a]=b;
	}
          button[1].onclick=function(){
          	  footer.removeAttribute("style");
          }
          button[0].onclick=function(){
          	change(input[0].value,input[1].value);
          }
}