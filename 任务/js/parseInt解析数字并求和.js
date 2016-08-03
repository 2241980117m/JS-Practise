window.onload=function(){
	var input=document.getElementsByTagName("input");
	var button=document.getElementsByTagName("button")[0];
	var span=document.getElementsByTagName("span")[2];
	button.onclick=function(){
		span.innerHTML=parseInt(input[0].value)+parseInt(input[1].value);
	}
}