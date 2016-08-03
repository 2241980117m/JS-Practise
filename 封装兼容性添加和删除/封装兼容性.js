var thing={
	addHandler:function(ele,str,fun){
      ele.addEventListener ? ele.addEventListener(str,fun,false)
      :ele.attachEvent("on"+str,fun)
	},
	removeHandler:function(ele,str,fun){
	   ele.removeEventListener ? ele.removeEventListener(str,fun,false)
	   :ele.detachEvent("on"+str,fun)
	},
	addLoadHandler: function (fnHandler) {
		this.addHandler(window, "load", fnHandler);
	}
};
thing.addLoadHandler(function(){
	var button=document.getElementsByTagName("button");
	 thing.addHandler(button[1],"click",function(){
	 	   thing.addHandler(button[0],"click",fun);
	 	   button[0].innerHTML="我可以点击了!";
	 });
	 thing.addHandler(button[2],"click",function(){
	 	button[0].innerHTML="毫无用处的按钮";
	 	thing.removeHandler(button[0],"click",fun);
	 });
	function fun(){
   		alert("事件绑定成功!");
	}
})
