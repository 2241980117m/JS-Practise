window.onload=function(){
	//alert("1");
	 var i=0;
	 var p=document.getElementsByTagName("p")[0];
	 function add(){
	 	p.innerHTML=++i;
	 }
	 setInterval(add,1000);
}