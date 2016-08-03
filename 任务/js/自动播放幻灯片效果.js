window.onload=function(){
	var lli=document.getElementById("list").getElementsByTagName("li");
	var cli=document.getElementById("count").getElementsByTagName("li");
	var outer=document.getElementById("outer");
	var timer=play=null;
	var index=0;
	//鼠标划过停止
	for(i=0;i<cli.length;i++){
		cli[i].index=i;
		cli[i].onmouseover=function(){
			
			//this.className="current";
			show(this.index);
		}
	}
	//鼠标悬浮时停止
     outer.onmouseover=function(){
     	clearInterval(play);
     }
     //鼠标离开后启动自动播放
     outer.onmouseout=function(){
     	autoplay();
     }
	//自动播放函数
	function autoplay(){
        play=setInterval(function(){
        	index++;
        	index>=lli.length&&(index=0);
        	show(index);
        },2000);
	}
	autoplay();
      //渐入
     function show(a){
     	var index=a;
     	var alpha=0;
     	for(n=0;n<cli.length;n++)
		   cli[n].className="";
	     cli[index].className="current";
	     clearInterval(timer);
	     for(i=0;i<lli.length;i++){
	         lli[i].style.opacity=0;
	         //lli[i].style.filter="alpha(opacity=0)";
	     }
	     timer=setInterval(function(){
               alpha+=2;
               alpha>100&&(alpha=100);
               lli[index].style.opacity=alpha/100;
               lli[index].style.filter="alpha(opacity='+alpha+')";
               alpha==100&&clearInterval(timer);
	     },20);
     }
};