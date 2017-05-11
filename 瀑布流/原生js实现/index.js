window.onload=function () {
    var obj= {
        "data": [{"src":"../image/aaa.jpg"}, {"src":"../image/ab.jpg"},{"src":"../image/ac.jpg"}]
}
    waterfall("main","box");
    window.onscroll=function () {
          if(checkScroll){
       //         console.log("length:"+obj.data.length);
               var oparent=document.getElementById("main");
               for(var i=0;i<obj.data.length;i++){
                   var obox=document.createElement("div");
                   obox.className="box";
                   var opic=document.createElement("div");
                   opic.className="pic";
                   var oimg=document.createElement("img");
                   oimg.src=obj.data[i].src;
                   obox.appendChild(opic);
                   opic.appendChild(oimg);
                   oparent.appendChild(obox);
                   waterfall('main','box');
               }
          }
    }
}
function  waterfall(parent,box) {
    var oparent=document.getElementById(parent);
    var arr=[];
   // console.log(oparent.id);
    var obox=getByClass(oparent,box);
    var oboxW=obox[0].offsetWidth;
    console.log(oboxW);
    var cols=Math.floor(document.documentElement.offsetWidth/oboxW);
    oparent.style.cssText="margin:0px auto;width:" +cols*oboxW+'px';
    for(var i in obox){
         if(i<cols){
             arr.push(obox[i].offsetHeight);
         }else{
             var  minH=Math.min.apply(null,arr);
             var index=getIndex(arr,minH);
             console.log("minH:"+minH);
             console.log("index:"+index);
             obox[i].style.position="absolute";
             obox[i].style.top=minH+'px';
           //  obox[i].style.left=obox[index].offsetLeft+"px";
             obox[i].style.left=oboxW*index+'px';
             arr[index]+=obox[i].offsetHeight;
         }
    }

}
function checkScroll(parent){
     var oparent=document.getElementById(parent);
     var oscroll=document.body.scrollTop||document.documentElement.scrollTop;
     var oH=document.documentElement.clientHeight||document.body.clientHeight;
     var oboxH=Math.floor(oparent.clientHeight/2)+oparent.clientTop;
     return (oboxH<=oH+oscroll)?    true:false;
}
function getIndex(arr,val) {
     for(var i in arr){
          if(arr[i]==val){
              return i;
          }
     }
}
function  getByClass(oparent,sclass) {
     var arr=[];
     var obox=oparent.getElementsByTagName("*");
    for(var i in obox){
        if(obox[i].className==sclass){
             arr.push(obox[i]);
        }
    }
    return arr;
}