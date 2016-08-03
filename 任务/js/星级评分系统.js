window.onload=function(){
	var li=document.getElementsByTagName('li');
	var ul=document.getElementsByTagName('ul')[0];
	var p=document.getElementsByTagName("p")[0];
	var s1=s2=0;
	var array=[
         "很不满意|差得太离谱，与卖家描述的严重不帆符,非常不满",
         "不满意|部分有破损,与卖家描述不符，不满意",
         "一般|质量一般,没有卖家描述的那么好",
         "满意|质量不错,与卖家描述的基本一致,还是挺满意的",
         "非常满意|质量非常好,与卖家描述的完全一致，非常满意"
	];
	for(i=1;i<=li.length;i++){
		li[i-1].index=i;
		li[i-1].onmouseover=function(){
               changeState(this.index);
               p.style.left=this.offsetWidth*this.index+(this.index-1)*5-150+"px";
               p.innerHTML="<h5><strong>"+this.index+"分</strong>"+array[this.index-1].match(/(.+)\|/)[1]+"</h5>"+array[this.index-1].match(/\|(.+)/)[1];
               p.style.display="block";
		}
		/*li[i-1].onmouseout=function(){
            changeState();
		}*/
		li[i-1].onclick=function(){
			changeState(this.index);
			
		}
	}
	function changeState(value){
      for(j=0;j<li.length;j++){
       	  li[j].className=j<value? "cover":"";
       }
	}
}