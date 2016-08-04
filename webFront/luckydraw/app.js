var arr=['IPad Air','IPad 4','kindle','Apple Watch','IPhone6','IPhone6S','Mac Pro','Mac Air']
var start=document.getElementById("start");
var stop=document.getElementById("stop");
var content=document.getElementsByClassName("content")[0];

start.onclick=_start;
stop.onclick=_stop;
document.onkeydown=function(e){
	if (e.keyCode!=13){
		return
	}else{
		var status=content.getAttribute("status");
		if(!status||status=="true"){
			document.onkeyup=_start;
		}else{
			document.onkeyup=_stop;
		}
	}
	
}
		
	


function _start(e){
	var status=content.getAttribute("status");
	if (status=="false") {
		return
	}else{
		start.style.background='#999';
		timer=setInterval("_move()",100)
		e.stopPropagation();
	}
}
function _move(){
	content.setAttribute("status",false);
	var seq=Math.floor(Math.random()*7);
	content.innerHTML=arr[seq];
}

function _stop(e){
	start.style.background="#ccc";
	content.setAttribute("status",true);
	clearInterval(timer);
	e.stopPropagation();
}
