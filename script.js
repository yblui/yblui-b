var mmm = 0;
var num = document.getElementById("t");
var jgl = false;
var i;
function calCulate(val) {
	switch (val) {
		case "=":
			var calcval=num.value.replace(/\+/g,"@+@").replace(/\-/g,"@-@").replace(/\*/g,"@*@").replace(/\//g,"@/@").split("@");
			for (i = 0; i < calcval.length; i++) {
				if (calcval[i].indexOf("%")!=-1){
					calcval[i]=Number(calcval[i].split().pop().join(""))/100
				}
			}
			num.value = eval(calcval.join(""));
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
