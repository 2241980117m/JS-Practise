var x=document.getElementsByTagName("div");
var f=document.getElementById("click");
//alert("1");
function fun(){
	for(i=2;i<x.length;i++)	
       changecolor(x[i]);
}
function changecolor(obj){
	obj.style.backgroundColor="red";
}
