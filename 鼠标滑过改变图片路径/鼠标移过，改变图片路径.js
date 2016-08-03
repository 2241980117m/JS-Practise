window.onload=function(){
	var img=document.getElementsByTagName("img");
	for(i=1;i<img.length;i++){
		img[i].onmouseover=function(){
			 //img[0].src=this.src.replace(/small/,"big");;
			 img[0].src=this.src;
			 img[0].id="first";
		}
	}
}