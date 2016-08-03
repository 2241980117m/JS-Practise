window.onload=function(){
	 var div1=document.getElementsByTagName("div");
	 function fun(){
	 	  var day=new Date();
	 	  var hour=day.getHours();
	 	  var min=day.getMinutes();
	 	  var sec=day.getSeconds();
	 	  var div=[hour,min,sec];
	 	  for(i=0;i<div.length;i++){
	 	  	if(div[i]<10){
	 	  		div[i]="0"+div[i];
	 	  	}
	 	  }
	 	  for(i=1;i<div1.length;i++){
	 	  	div1[i].innerHTML=div[i-1];
	 	  }
	 }
	 setInterval(fun,1000);
}