function change(x){
var a=document.getElementById("a");
var b=document.getElementById("b");
var c=document.getElementById("c");
var div2=document.getElementById("div2");
var div3=document.getElementById("div3");
var div4=document.getElementById("div4");
	if(x==1)
	{
		div2.style.border="2px solid blue";
		div3.style.border="2px solid blue";
		a.style.width="30px";
		a.style.height="30px";
		b.style.width="20px";
		b.style.height="20px";
		c.style.width="20px";
		c.style.height="20px";
		div4.style.backgroundColor="blue";
	}
	if(x==2)
	{
		div2.style.border="2px solid red";
		div3.style.border="2px solid red";
		div4.style.backgroundColor="red";
		b.style.width="30px";
		b.style.height="30px";
		a.style.width="20px";
		a.style.height="20px";
		a.style.width="20px";
		a.style.height="20px";
	}
    if(x==3){
        div2.style.border="2px solid black";
		div3.style.border="2px solid black";
		div4.style.backgroundColor="black";
		c.style.width="30px";
		c.style.height="30px";
		b.style.width="20px";
		b.style.height="20px";
		a.style.width="20px";
		a.style.height="20px"
    }
}