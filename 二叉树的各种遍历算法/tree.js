window.onload=function(){

	      var root=document.getElementsByClassName('root')[0];
	      var second=document.getElementsByClassName('second')[0];
	      var third=document.getElementsByClassName('third')[0];
	      var pre=document.getElementsByClassName('pre')[0];
	      var middle=document.getElementsByClassName('middle')[0];
	      var next=document.getElementsByClassName('next')[0];
          var time=0;
	      
	     /* //建立链表函数
	      function create(){
                
	      } */
	      //改变背景颜色
	    function changeColor(ele){
	       
	     //	obj.classname="a";*/
	       	setTimeout(function(){
               ele.style.backgroundColor="red";
                /* obj.classname="b";*/
	 	     },time+=500);
	      	setTimeout(function(){
                  ele.style.backgroundColor="#fff";
                  /* obj.classname="a";*/
	    	},time+=500);
	      }
	      //前序遍历
	    function preOrder(root){
	    	if(root){
              changeColor(root);
              preOrder(root.children[0]);
              preOrder(root.children[1]);
            }
	      }
	      //中序遍历
	      function inOrder(root){
             if(root){
             	inOrder(root.children[0]);
             	changeColor(root);
             	inOrder(root.children[1]);
             }
	      }
	      //后序遍历
	      function nextOrder(root){
	      	if(root){
	      		nextOrder(root.children[0]);
             	nextOrder(root.children[1]);
             	changeColor(root);
	      	}
	      }
	    /* pre.addEventListener('click',preOrder,false);*/
	 /* pre.onclick = preOrder(root);*/
	// pre.addEventListener('click',preOrder(root),false);
	/*  middle.onclick = inOrder(root);*/
	   next.onclick = nextOrder(root);
}