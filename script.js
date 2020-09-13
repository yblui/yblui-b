var mmm = 0,num = document.getElementById("t"),jgl = false,i,mhd=false,ivd=false,hst="",hex=false;
function Int(intv){
	if(intv > 0){
		return Math.floor(intv);
	} else if(intv < 0){
		return Math.ceil(intv);
	} else {
		return 0;
	}
}
function ike(event){
	switch (event.keyCode){
		case 49:
		case 97:
			calCulate("1");
			break;
		case 50:
		case 98:
			calCulate("2");
			break;
		case 51:
		case 99:
			calCulate("3");
			break;
		case 52:
		case 100:
			calCulate("4");
			break;
		case 53:
		case 101:
			calCulate("5");
			break;
		case 54:
		case 102:
			calCulate("6");
			break;
		case 55:
		case 103:
			calCulate("7");
			break;
		case 56:
		case 104:
			calCulate("8");
			break;
		case 57:
		case 105:
			calCulate("9");
			break;
		case 48:
		case 96:
			calCulate("0");
			break;
		case 107:
			calCulate("+");
			break;
		case 189:
		case 109:
			calCulate("-");
			break;
		case 106:
			calCulate("×");
			break;
		case 191:
		case 111:
			calCulate("÷");
			break;
		case 187:
			calCulate("=");
			break;
	}
}
function frac(frv) {
	return frv - Int(frv);
}
function dms(dmsv){
	var min=(Int((dmsv - Int(dmsv)) * 60)).toString();
	if (Int((dmsv-Int(dmsv)) * 60) < 10){
		min="0"+min;
	}
	if ((((dmsv-Int(dmsv)) * 60-Int((dmsv - Int(dmsv))*60)) * 60)<10) {
		var sec="0"+(((dmsv-Int(dmsv))*60-Int((dmsv-Int(dmsv))*60))*60).toString().replace(/\./,"");
	} else {
		var sec=(((dmsv-Int(dmsv))*60-Int((dmsv-Int(dmsv))*60))*60).toString().replace(/\./,"");
	}
	return Number(Int(dmsv).toString() + "."+min+sec);
}
function fact(fav){
	fav=Int(fav);
	fcr=1;
	for (var fai=1; fai<=fav; fai++){
		fcr *= fai;
	}
	return fcr;
}
function epow(epv){
	return Math.E ** epv;
}
function deg(dgv){
	dgv=dgv.toString()
	if (dgv.slice(dgv.indexOf(".")+1,-1).length==1){
		dgv=dgv+"000";
	} else if (dgv.slice(dgv.indexOf(".")+1,-1).length==3){
		dgv += "0";
	} else if (dgv.indexOf(".")==-1){
		dgv += ".0000";
	}
	return Int(Number(dgv))+(Number(dgv.slice(dgv.indexOf(".")+1,dgv.indexOf(".")+3))*3.6)+(Number(dgv.substr(dgv.indexOf(".")+3).split("").splice(2,0,".").join(""))*0.036);
}
function ln(lnv){
	var fwa=[-800, 800];
	if(lnv<1) {
		fwa[1]=0
	} else if(lnv>1) {
		fwa[0]=0
	} else{
		return 0;
	}
	while ((fwa[1]-fwa[0])>0.0000000001){
		if(epow((fwa[0]+fwa[1])/2)<lnv){
			fwa[0]=(fwa[0]+fwa[1])/2;
		} else if(epow((fwa[0]+fwa[1])/2)>lnv){
			fwa[1]=(fwa[0]+fwa[1])/2;
		} else{
			return (fwa[0]+fwa[1])/2;
		}
	}
	return (fwa[1]+fwa[0])/2
}
function history(){
	hst=hst.replace(/;/g,"<hr />")
	if(hex){
		hex=false;
		document.getElementById("hsp").innerHTML="";
	}
	else{
		hex=true;
		document.getElementById("hsp").innerHTML=hst;
	}
}
function ism(){
	if(mmm == 0){
		document.getElementById("mxs").innerHTML="";
	} else {
		document.getElementById("mxs").innerHTML="M";
	}
}
function dyh(){
	hst+=num.value+"=";
	var calcval = num.value.replace(/sin\(/g,"Math.sin(").replace(/cos\(/g,"Math.cos(").replace(/tan\(/g,"Math.tan(");
	calcval = calcval.replace(/sinh/g,"Math.sinh").replace(/cosh/g,"Math.cosh").replace(/tanh/g,"Math.tanh");
	calcval = calcval.replace(/aMath\.sin/g,"Math.asin").replace(/aMath\.cos/g,"Math.acos").replace(/aMath\.tan/g,"Math.atan");
	calcval = calcval.replace(/aMath\.sinh/g,"Math.asinh").replace(/aMath\.cosh/g,"Math.acosh").replace(/aMath\.tanh/g,"Math.atanh");
	calcval = calcval.replace(/π/g,"Math.PI").replace(/\^/g,"**").replace(/log\(/g,"Math.log(").replace(/e\*\*/,"Math.E**");
	calcval = calcval.replace(/\+√\(/g, "+Math.sqrt(").replace(/\-√\(/g, "-Math.sqrt(").replace(/\×√\(/g, "×Math.sqrt(").replace(/\÷√\(/g, "÷Math.sqrt(");
	calcval = calcval.replace(/√/g,"√@").replace(/\+/g,"@+@").replace(/\-/g,"@-@").replace(/\×/g,"@×@").replace(/\÷/g,"@÷@").split("@");
	if(calcval[0]=="√"){
		calcval[0]="Math.sqrt"
	}
	for (i = 0; i < calcval.length; i++) {
		if (calcval[i].indexOf("√")!=-1){
			calcval[i+1]=calcval[i+1].split("").slice(0,-1).join("")+",1/"+calcval[i].replace("√","")+")";
			calcval[i]="Math.pow";
		}
	}
	calcval = calcval.join("")
	calcval = calcval.replace(/\+/g,"@+@").replace(/\-/g,"@-@").replace(/\×/g,"@*@").replace(/\÷/g,"@/@").split("@");
	for (i = 0; i < calcval.length; i++) {
		if (calcval[i].indexOf("%")!=-1){
			calcval[i]=Number(calcval[i].replace("%",""))/100;
		}
	}
	calcval=calcval.join("").replace(/Mod/g,"%");
	num.value = eval(calcval);
	hst+=eval(calcval)+";"
}
function calCulate(val) {
	switch (val) {
		case "=":
			dyh();
			break;
		case "<":
			num.value = num.value.slice(0,-1);
			break;
		case ">":
			for (i = 0; i < document.getElementsByClassName("gj").length; i++) {
				if(mhd==false){
					document.getElementsByClassName("gj")[i].style.display = "inline";
				} else{
					document.getElementsByClassName("gj")[i].style.display = "none";
				}
			}
			if (mhd){
				document.getElementById("exp").className="";
				mhd=false;
			} else{
				document.getElementById("exp").className="equ";
				mhd=true;
			}
			break;
		case "AC":
			num.value = "";
			break;
		case "M+":
			var calcval = num.value.replace(/sin\(/g,"Math.sin(").replace(/cos\(/g,"Math.cos(").replace(/tan\(/g,"Math.tan(");
			calcval = calcval.replace(/sinh/g,"Math.sinh").replace(/cosh/g,"Math.cosh").replace(/tanh/g,"Math.tanh");
			calcval = calcval.replace(/aMath\.sin/g,"Math.asin").replace(/aMath\.cos/g,"Math.acos").replace(/aMath\.tan/g,"Math.atan");
			calcval = calcval.replace(/aMath\.sinh/g,"Math.asinh").replace(/aMath\.cosh/g,"Math.acosh").replace(/aMath\.tanh/g,"Math.atanh");
			calcval = calcval.replace(/π/g,"Math.PI").replace(/\^/g,"**").replace(/log\(/g,"Math.log(").replace(/e\*\*/,"Math.E**");
			calcval = calcval.replace(/\+√\(/g, "+Math.sqrt(").replace(/\-√\(/g, "-Math.sqrt(").replace(/\×√\(/g, "×Math.sqrt(").replace(/\÷√\(/g, "÷Math.sqrt(");
			calcval = calcval.replace(/√/g,"√@").replace(/\+/g,"@+@").replace(/\-/g,"@-@").replace(/\×/g,"@×@").replace(/\÷/g,"@÷@").split("@");
			if(calcval[0]=="√"){
				calcval[0]="Math.sqrt"
			}
			for (i = 0; i < calcval.length; i++) {
				if (calcval[i].indexOf("√")!=-1){
					calcval[i+1]=calcval[i+1].split("").slice(0,-1).join("")+",1/"+calcval[i].replace("√","")+")";
					calcval[i]="Math.pow";
				}
			}
			calcval = calcval.join("")
			calcval = calcval.replace(/\+/g,"@+@").replace(/\-/g,"@-@").replace(/\×/g,"@*@").replace(/\÷/g,"@/@").split("@");
			for (i = 0; i < calcval.length; i++) {
				if (calcval[i].indexOf("%")!=-1){
					calcval[i]=Number(calcval[i].replace("%",""))/100;
				}
			}
			calcval=calcval.join("").replace(/Mod/g,"%");
			if (isNaN(eval(calcval))==false){
			mmm += Number(eval(calcval));
			ism();
			}
			break;
		case "MR":
			num.value += mmm.toString();
			break;
		case "M-":
			var calcval = num.value.replace(/sin\(/g,"Math.sin(").replace(/cos\(/g,"Math.cos(").replace(/tan\(/g,"Math.tan(");
			calcval = calcval.replace(/sinh/g,"Math.sinh").replace(/cosh/g,"Math.cosh").replace(/tanh/g,"Math.tanh");
			calcval = calcval.replace(/aMath\.sin/g,"Math.asin").replace(/aMath\.cos/g,"Math.acos").replace(/aMath\.tan/g,"Math.atan");
			calcval = calcval.replace(/aMath\.sinh/g,"Math.asinh").replace(/aMath\.cosh/g,"Math.acosh").replace(/aMath\.tanh/g,"Math.atanh");
			calcval = calcval.replace(/π/g,"Math.PI").replace(/\^/g,"**").replace(/log\(/g,"Math.log(").replace(/e\*\*/,"Math.E**");
			calcval = calcval.replace(/\+√\(/g, "+Math.sqrt(").replace(/\-√\(/g, "-Math.sqrt(").replace(/\×√\(/g, "×Math.sqrt(").replace(/\÷√\(/g, "÷Math.sqrt(");
			calcval = calcval.replace(/√/g,"√@").replace(/\+/g,"@+@").replace(/\-/g,"@-@").replace(/\×/g,"@×@").replace(/\÷/g,"@÷@").split("@");
			if(calcval[0]=="√"){
				calcval[0]="Math.sqrt"
			}
			for (i = 0; i < calcval.length; i++) {
				if (calcval[i].indexOf("√")!=-1){
					calcval[i+1]=calcval[i+1].split("").slice(0,-1).join("")+",1/"+calcval[i].replace("√","")+")";
					calcval[i]="Math.pow";
				}
			}
			calcval = calcval.join("")
			calcval = calcval.replace(/\+/g,"@+@").replace(/\-/g,"@-@").replace(/\×/g,"@*@").replace(/\÷/g,"@/@").split("@");
			for (i = 0; i < calcval.length; i++) {
				if (calcval[i].indexOf("%")!=-1){
					calcval[i]=Number(calcval[i].replace("%",""))/100;
				}
			}
			calcval=calcval.join("").replace(/Mod/g,"%")
			if (isNaN(eval(calcval))==false){
			mmm -= Number(eval(calcval));
			ism();
			}
			break;
		case "MC":
			mmm = 0;
			ism();
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
		case "deg":
		case "ln":
		case "Int":
		case "√":
		case "log":
			num.value = num.value+val+"(";
			break;
		case "!":
			num.value = num.value+"fact(";
			break;
		case "sin^-1":
		case "cos^-1":
		case "tan^-1":
		case "sinh^-1":
		case "cosh^-1":
		case "tanh^-1":
			num.value = num.value+"a"+val.slice(0,-3)+"(";
			break;
		case "pi":
			num.value += "π";
			break;
		case "F-E":
			dyh();
			if(num.value.indexOf(".")==-1){
				num.value += "."
			}
			var aws=num.value.length-num.value.indexOf(".");
			var tmp=num.value.replace(".","").split("");
			tmp[1]="."+tmp[1];
			tmp=tmp.join("");
			var awb=tmp.length-tmp.indexOf(".")
			num.value=Number(tmp)+"e"+(awb-aws)
			break;
		case "Exp":
			num.value += "e";
			break;
		case "e^x":
			num.value += "e^";
			break;
		case "Inv":
			if (ivd) {
	        		document.getElementById("inb").style.color="black";
	        		document.getElementById("inb").style.backgroundColor="white";
	        		document.getElementById("lnb").value="ln";
	        		document.getElementById("sinb").value="sin";
	        		document.getElementById("cosb").value="cos";
	        		document.getElementById("tanb").value="tan";
	        		document.getElementById("sinhb").value="sinh";
	        		document.getElementById("coshb").value="cosh";
	        		document.getElementById("tanhb").value="tanh";
	        		document.getElementById("intb").value="Int";
	        		document.getElementById("dmsb").value="dms";
	        		document.getElementById("pib").value="pi";
	        		ivd = false;
	        	} else {
	        		document.getElementById("inb").style.color="white";
	        		document.getElementById("inb").style.backgroundColor="black";
	        		document.getElementById("lnb").value="e^x";
	        		document.getElementById("sinb").value="sin^-1";
	        		document.getElementById("cosb").value="cos^-1";
	        		document.getElementById("tanb").value="tan^-1";
	        		document.getElementById("sinhb").value="sinh^-1";
	        		document.getElementById("coshb").value="cosh^-1";
	        		document.getElementById("tanhb").value="tanh^-1";
	        		document.getElementById("intb").value="Frac";
	        		document.getElementById("dmsb").value="deg";
	        		document.getElementById("pib").value="2*π";
	        		ivd = true;
	        	}
			break;
		default:
			num.value = num.value + val;
			jgl=false;
			break;
	}
}
