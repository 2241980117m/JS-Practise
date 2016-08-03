window.onload=function(){
	var input=document.getElementsByTagName("input");
	var a=document.getElementsByTagName("a")[0];
	var label=document.getElementsByTagName("label")[0];
	function changetext(){
		for(i=1,n=0;i<input.length;i++)
			input[i].checked && n++;
		input[0].checked=n==input.length-1
		label.innerHTML=(n==input.length-1)? "全不选":"全选";
	}
	// 改变全选的状态
     input[0].onclick=function(){
     	   for(i=1;i<input.length;i++){
     	   	   input[i].checked=this.checked;
     	   }
     	   changetext();
     }
     //按全选、全不选时改变其他多选框的状态及第一个多选框的内容
     a.onclick=function() {
     	  for(i=1;i<input.length;i++)
     	  	input[i].checked=!input[0].checked;
     	  changetext();
     }
     //按反选时改变其他多选框的内容及状态
     for(i=1;i<input.length;i++){
     	   input[i].onclick=function(){
     	   	   changetext();
     	   }
    }
     //按照选框的数量改变第一个复选框的内容 
}