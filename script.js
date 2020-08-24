var mmm = 0
var num = document.getElementById("t");
var jgl=false;
function calCulate(val) {
	switch (val) {
		case "=":
			num.value = eval(num.value);
			break;
		case "AC":
			num.value = "";
			break;
		case "M+":
			mmm += Number(eval(num.value))
			break;
		case "MR":
			num.value += mmm.toString()
			break;
		case "M-":
			mmm -= Number(eval(num.value));
			break;
		case "MC":
			mmm=0;
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
