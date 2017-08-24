	
	window.onload=function () {
		var oRegis=document.querySelector("#regis");
		var oContent=document.querySelector(".content");
		var oLog=document.querySelector("#log");
		var timer=null;
		oRegis.onclick=function () {
			var n=0;
			timer=setInterval(function () {
				n+=5;
				if(n<180){
					oContent.style.transform="rotateY("+n+"deg)";
				}else{
					clearInterval(timer);
				}
				
			}, 20)
		}
		oLog.onclick=function () {
			var n=180;
			timer=setInterval(function () {
				n-=5;
				if(n>0){
					oContent.style.transform="rotateY("+n+"deg)";
				}else{
					clearInterval(timer);
				}
				
			}, 20)
		}
	}