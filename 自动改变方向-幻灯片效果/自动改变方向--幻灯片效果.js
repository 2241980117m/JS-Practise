window.onload=function(){
	var timer=play=null;
	var index=0;
	var b=true;
	var outer=document.getElementById("outer");
	var lli=document.getElementById("list").getElementsByTagName("li");
	var cli=document.getElementById("count").getElementsByTagName("li");
	for(i=0;i<cli.length;i++){
		cli[i].index=i;
		cli[i].onmouseover=function(){
			show(this.index);
		}
	}
	//悬浮时停止
	outer.onmouseover=function(){
		clearInterval(play);
	}
	//离开时开始
	outer.onmouseout=function(){
		autoplay();
	}
	//自动播放
	function autoplay(){ 
		    var account=1;
		    play=setInterval(function(){
		    	if(account==1)
		    	{
			   		 index++;

			   		 index>=cli.length&&(index=cli.length-2,account=0);
		        }else{
		        	//index=cli.length;
		        	index--;
		        	index<=0&&(index=0,account=1);
		        	//account++;
		        	//if(account==9) account=0;
		        }
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
		//clearInterval(timer);
	    for(i=0;i<lli.length;i++)
	    	lli[i].style.opacity=0;
	    //lli[i].style.filter=alpha(opacity=0);
	    timer=setInterval(function(){
	    		alpha+=2;
	    		alpha>100&&(alpha=100);
	    		lli[index].style.opacity=alpha/100;
	    		//lli[index].style.filter="alpha(opacity='+alpha+')";
	    		alpha==100&&clearInterval(timer);
	    },20);
	}
};