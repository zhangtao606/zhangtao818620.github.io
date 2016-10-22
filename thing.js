	//a为元素,b为事件,c为函数,bol选择是绑定事件,还是解除事件
	//需要提前定义a,b,c,bol使用
	function thing(Ys,Sj,Hs,bol){
		var info=navigator.userAgent;
		if (info.indexOf('NSIE')!=-1) {
			var Sj='on'+Sj;
			if (bol==true) {
				Ys.attachEvent(Sj,Hs);
			} else{
				Ys.detachEvent(Sj,Hs);
			}
		} else{
			if (bol==true) {
				Ys.addEventListener(Sj,Hs,false);
			} else{
				Ys.removeEventListener(Sj,Hs,false);
			}
		}
	}