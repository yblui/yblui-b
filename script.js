var mmm = 0
	var num = document.getElementById("t");
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
			num.value = mmm.toString()
			break;
		case "M-":
			mmm -= Number(num.value)
			break;
		case "MC":
			mmm=0
			break;
		default:
			num.value = num.value+val;
			break;
	}
}
