window.onload=function(){
	var li=document.getElementsByTagName("li");
	var mid=document.getElementById("middle");
	var input=document.getElementsByTagName("input")[0];
	var s=false;
	var i=0;
	//输入数字
	for(i=0;i<li.length;i++){
        li[i].onclick=function(){
        	//alert(this.innerHTML);
       	    switch(this.innerHTML){
       	    	case "+":count("+");break;
       	    	case "-":count("-");break;
       	        case "*":count("*");break;
       	    	case "/":count("/");break;
       	    	case "%":count("%");break;
       	    	case "=":{
       	    		s||(input.value+=mid.innerHTML);
       	    		mid.innerHTML=eval(input.value.replace(/\+\-\*\/\%/,""));
       	    		mid.innerHTML=mid.innerHTML.substr(0,10).replace("NaN",0);
       	    		s=true;
       	    		break;
       	    	}
       	    	case "C":{
       	    		mid.innerHTML="0";
       	    		input.value="";
       	    		break;
       	    	}
       	    	case ".":
       	    	if(mid.innerHTML.search(/[\.\*\/\%\+\-]/)!=-1)
       	    	break;

       	    	default:{
       	    		s&&(input.value="",mid.innerHTML="0",s=false);
       	              if(input.value.length<10){
       	              	mid.innerHTML+=this.innerHTML;
       	              mid.innerHTML=mid.innerHTML.replace(/^[0\+\-\*\/\%](\d)/,"$1");
       	          }
       	    	}
       	    }
       }
	}
	function count(a){
		if(s){
			input.value=mid.innerHTML+a;
			mid.innerHTML=a;
			s=false;
		}
		else{
			(input.value+=mid.innerHTML);
            mid.innerHTML=a;
            (input.value+=mid.innerHTML);    
		}
	}
};
