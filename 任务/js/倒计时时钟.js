window.onload=function(){
	  var span=document.getElementsByTagName("span");
	  var button=document.getElementsByTagName("button")[0];
	  //var t;
	  button.onclick=function(){
	  	   this.style.backgroundColor=(this.style.backgroundColor=="red")?  "#63DDC8":"red";
	  	   this.innerHTML=this.innerHTML=="启动"?   "取消":"启动";
	  	   if(this.innerHTML=="取消")
	  	   		fun();
	  	   else
	  	   		fun1();

	  }
	//启动
	function changemin(){
		span[1].innerHTML=parseInt(--span[1].innerHTML);
        if(span[1].innerHTML==0&&span[0].innerHTML!=0)
        {
             changehour();
        }
        if(span[1].innerHTML==0&&span[0].innerHTML==0){
                fun1();
        }
	}
    function changehour(){
    	span[0].innerHTML="00";
        span[1].innerHTML="60";
    }
	function fun(){
		t=setInterval(changemin,1000);
	}
    //取消
    function fun1(){
    	clearInterval(t);
    }
}