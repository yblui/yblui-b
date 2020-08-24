var mmm = 0;
var num = document.getElementById("t");
var jgl = false;
function calCulate(val) {
	switch (val) {
		case "=":
			var wb="";
			var lsval=num.value;
			var calcval=num.value;
			while (true){
				var jg=lsval.search(/[\+\-\*\/].*?\%/);
				if(jg!=-1){
					wb=Number(lsval.slice(jg+1,lsval.search("%")-1))/100;
					calcval=calcval.replace(lsval.slice(jg,lsval.search("%")),lsval[jg]+wb+"%")
					lsval=lsval.replace(/[\+\-\*\/].*?\%/,"")
				}
				else{
					break;
				}
			}
			num.value = eval(calcval);
			break;
		case "<":
			num.value = num.value.slice(0,-1);
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
		case "*":
		case "/":
			if(jgl==false){
				num.value = num.value+val;
				jgl=true
			}
			else{
				num.value = num.value.slice(0,-1)+val;
			}
			break;
		default:
			num.value = num.value+val;
			jgl=false;
			break;
	}
}
