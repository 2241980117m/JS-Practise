window.onload=function(){
	var a=document.getElementsByTagName("input")[0];
	var button=document.getElementsByTagName("button")[0];
	button.onclick=function(){
		a.value=a.value.replace(/[^(\d)]/,"");
		if(a.value==""){
			alert("请输入数字!");
		}else{
			(/^\d{2}$/.test(a.value))?     alert("是两位数！"):alert("这是"+a.value.length+"位数");
	}
  }
}