//alert("1");
function fun(){
	var sum=0;
	var a=document.getElementsByTagName("input")[0];
    var b=document.getElementsByTagName("button")[0];
    var c=document.getElementById("div2");
    a=a.value.replace(/[^(\d)|(,)]/g,"");
    a=a.split(",");
	for(i=0;i<a.length;i++)
	sum+=parseInt(a[i]);
    c.innerHTML=sum;
}