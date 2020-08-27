var mmm = 0,num = document.getElementById("t"),jgl = false,i,mhd=false,ivd=false;
function Int(intv){
	if(intv > 0){
		return Math.floor(intv);
	}
	if(intv < 0){
		return Math.ceil(intv);
	}
	if(intv == 0){
		return 0;
	}
}
function frac(frv) {
	return frv - Int(frv)
}
function dms(dmsv){
	var min=(Int((dmsv - Int(dmsv)) * 60)).toString();
	if (Int((dmsv-Int(dmsv)) * 60) < 10){
		min="0"+min;
	}
	if ((((dmsv-Int(dmsv))*60-Int((dmsv-Int(dmsv))*60))*60)<10){
		var sec="0"+(((dmsv-Int(dmsv))*60-Int((dmsv-Int(dmsv))*60))*60).toString().replace(/\./,"");
	} else {
		var sec=(((dmsv-Int(dmsv))*60-Int((dmsv-Int(dmsv))*60))*60).toString().replace(/\./,"");
	}
	return Number(Int(dmsv).toString()+"."+min+sec)
}
function epow(epv){
	return Math.E ** epv
}
function ivf(){
	if (ivd) {
		
		ivd = false;
	} else {
		
		ivd = true;
	}
}
function dyh(){
	var calcval = num.value.replace(/sin\(/g,"Math.sin(").replace(/cos\(/g,"Math.cos(").replace(/tan\(/g,"Math.tan(");
	calcval = calcval.replace(/sinh/g,"Math.sinh").replace(/cosh/g,"Math.cosh").replace(/tanh/g,"Math.tanh");
	calcval = calcval.replace(/π/g,"Math.PI").replace(/\^/g,"**").replace(/log\(/g,"Math.log(");
	calcval = calcval.replace(/\+√\(/g, "+Math.sqrt(").replace(/\-√\(/g, "-Math.sqrt(").replace(/\×√\(/g, "×Math.sqrt(").replace(/\÷√\(/g, "÷Math.sqrt(");
	calcval = calcval.replace(/√/g,"√@").replace(/\+/g,"@+@").replace(/\-/g,"@-@").replace(/\×/g,"@×@").replace(/\÷/g,"@÷@").split("@");
	if(calcval[0]=="√"){
		calcval[0]="Math.sqrt"
	}
	for (i = 0; i < calcval.length; i++) {
		if (calcval[i].indexOf("√")!=-1){
			calcval[i+1]=calcval[i+1].split("").slice(0,-1).join("")+",1/"+calcval[i].replace("√","")+")"
			calcval[i]="Math.pow"
			calcval = calcval.join("")
		}
	}
	calcval = calcval.replace(/\+/g,"@+@").replace(/\-/g,"@-@").replace(/\×/g,"@*@").replace(/\÷/g,"@/@").split("@");
	for (i = 0; i < calcval.length; i++) {
		if (calcval[i].indexOf("%")!=-1){
			calcval[i]=Number(calcval[i].replace("%",""))/100;
		}
	}
	num.value = eval(calcval.join(""));
}
function calCulate(val) {
	switch (val) {
		case "=":
			dyh()
			break;
		case "<":
			num.value = num.value.slice(0,-1);
			break;
		case ">":
			for (i = 0; i < document.getElementsByClassName("gj").length; i++) {
				if(mhd==false){
					document.getElementsByClassName("gj")[i].style.display = "inline"
				} else{
					document.getElementsByClassName("gj")[i].style.display = "none"
				}
			}
			if (mhd){
				document.getElementById("exp").className=""
				mhd=false
			} else{
				document.getElementById("exp").className="equ"
				mhd=true;
			}
			break;
		case "AC":
			num.value = "";
			break;
		case "M+":
			mmm += Number(eval(num.value));
			break;
		case "MR":
			num.value += mmm.toString();
			break;
		case "M-":
			mmm -= Number(eval(num.value));
			break;
		case "MC":
			mmm = 0;
			break;
		case "+":
		case "-":
		case "×":
		case "÷":
			if(jgl == false){
				num.value = num.value+val;
				jgl = true;
			}
			else{
				num.value = num.value.slice(0,-1)+val;
			}
			break;
		case "sin":
		case "cos":
		case "tan":
		case "sinh":
		case "cosh":
		case "tanh":
		case "dms":
		case "ln":
		case "Int":
		case "√":
			num.value = num.value+val+"(";
			break;
		case "pi":
			num.value = num.value+"π"
			break;
		case "F-E":
			dyh();
			if(num.value.indexOf(".")==-1){
				num.value += "."
			}
			var aws=num.value.length-num.value.indexOf(".")
			var tmp=num.value.replace(".","").split("")
			tmp[1]="."+tmp[1]
			tmp=tmp.join("")
			var awb=tmp.length-tmp.indexOf(".")
			num.value=Number(tmp)+"e"+(awb-aws)
			break;
		case "Inv":
			ivf()
			break;
		default:
			num.value = num.value+val;
			jgl=false;
			break;
	}
}
