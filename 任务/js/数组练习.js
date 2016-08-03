window.onload=function(){
	var p=document.getElementsByTagName("p");
	var button=document.getElementsByTagName("button");
	var state1=state2=true;
	for(i=0;i<button.length;i++){
		button[0].onclick=function(){
             var str=get(p[0].innerHTML);
			state1?   
	(str.shift(),this.innerHTML=this.innerHTML.replace("删除","添加"),state1=false):
	(str.unshift("January(1)"),this.innerHTML=this.innerHTML.replace("添加","删除"),state1=true);
	p[0].innerHTML=str.join();
		}
		button[1].onclick=function(){
               var str=get(p[0].innerHTML);
               state2?
               (this.innerHTML=this.innerHTML.replace("删除","添加"),str.pop(),state2=false):
               (this.innerHTML=this.innerHTML.replace("添加","删除"),str.push("December(12)"),state2=true);
               p[0].innerHTML=str.join();
		}
		button[2].onclick=function(){
			  var str=get(p[1].innerHTML);
			  str=str.concat(str);
			  p[1].innerHTML=str.join();
		}
		button[3].onclick=function(){
			var str=get(p[1].innerHTML);
			str.length=10;
			p[1].innerHTML=str.join();
		}
		button[4].onclick=function(){
			var str=["red","green","blue","white","yellow","black","brown"];
			p[2].innerHTML=str;
		}
		button[5].onclick=function(){
			var str=get(p[2].innerHTML);
			str.splice(0,3);
			p[2].innerHTML=str;
		}
		button[6].onclick=function(){
			var str=get(p[2].innerHTML);
			str.splice(2,0,"orange","purple");
			p[2].innerHTML=str;
		}
		button[7].onclick=function(){
			var str=get(p[2].innerHTML);
			str.splice(1,2,"#000","#eee");
			p[2].innerHTML=str;
		}
	}
  function get(ele){
  	var str=[]; 
  	str.length=0;
     ele=ele.split(",")
           for(var i in ele)
      	str.push(ele[i]);
      return str;
  }
}