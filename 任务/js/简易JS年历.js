window.onload=function(){
	var li=document.getElementById("all").getElementsByTagName("li");
	var h=document.getElementsByTagName("h2")[0];
    var p=document.getElementById("content").getElementsByTagName("p")[0];
	var array=[
	"元旦:1月1日到3日放假3天",
	"春节:2月2日到8日春节,放假7天",
    "妇女节:3月8日,妇女节与我无关",
    "清明节：4月3日到4月5日,放假3天",
    "劳动节:4月30日到5月2日,放假3天",
    "端午节:6月4日到6月6日,放假3天",
    "小暑:7月7日，不放假",
    "七夕:8月6日，不放假",
    "中秋:9月10日到12日,放假3天",
    "国庆:10月1日到10月10日,放假7天",
    "立冬:11.8立冬，不放假",
    "艾滋病日:12月1日,<br />废除奴隶制:12月2日."
    ];
   for(i=0;i<li.length;i++){
   	   li[i].index=i;
   	   li[i].onmouseover=function(){
   	   	    for(j=0;j<li.length;j++)
   	   	    	li[j].className="";
   	   	    this.className="current";
   	   	    p.innerHTML=array[this.index];
   	   	    h.innerHTML=this.index+1+"月节日";
        }
   }
}