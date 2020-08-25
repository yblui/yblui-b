var mmm = 0,num = document.getElementById("t"),jgl = false,i;
var mhd=false;
function Int(intv){
	if(intv>0){
		return Math.floor(intv)
	}
	if(intv<0){
		return Math.ceil(intv)
	}
	if(intv==0){
		return 0;
	}
}
function calCulate(val) {
	switch (val) {
		case "=":
			var calcval=num.value.replace(/sin\(/g,"Math.sin(").replace(/cos\(/g,"Math.cos(").replace(/tan\(/g,"Math.tan(");
			calcval=calcval.replace(/sinh/g,"Math.sinh").replace(/cosh/g,"Math.cosh").replace(/tanh/g,"Math.tanh");
			calcval=calcval.replace(/π/g,"Math.PI");
			calcval=calcval.replace(/\+/g,"@+@").replace(/\-/g,"@-@").replace(/\×/g,"@*@").replace(/\÷/g,"@/@").split("@");
			for (i = 0; i < calcval.length; i++) {
				if (calcval[i].indexOf("%")!=-1){
					calcval[i]=Number(calcval[i].replace("%",""))/100;
				}
			}
			num.value = eval(calcval.join(""));
			break;
		case "<":
			num.value = num.value.slice(0,-1);
			break;
		case ">":
			for (i = 0; i < document.getElementsByClassName("gj").length; i++) {
				if(mhd==false){
					document.getElementsByClassName("gj")[i].style.display="inline"
				} else{
					document.getElementsByClassName("gj")[i].style.display="none"
				}
			}
			if (mhd){
				document.getElementById("exp").className=""
				mhd=false
			} else{
				document.getElementById("exp").className="equ"
				mhd=true;
			}
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
			if(jgl==false){
				num.value = num.value+val;
				jgl=true;
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
		case "Int"
			num.value = num.value+val+"(";
			break;
		case "pi":
			num.value = num.value+"π"
		default:
			num.value = num.value+val;
			jgl=false;
			break;
	}
}
