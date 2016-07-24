function fun(){
	var a=document.getElementById("a").value;
	var b=document.getElementById("b").value;
	var submit=document.getElementById("submit");
    submit.onclick=function(){
    	alert(a);
    	alert(b);
    }
}
