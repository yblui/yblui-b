var mmm = 0,
    num = document.getElementById("t"),
    jgl = false,
    i, mhd = false,
    ivd = false,
    hst = "",
    hex = false,
    prg = false;

function Int(intv) {
    if (intv > 0) {
        return Math.floor(intv);
    } else if (intv < 0) {
        return Math.ceil(intv);
    } else {
        return 0;
    }
}

function ike(event) {
    switch (event.keyCode) {
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
            if (event.shiftKey) {
                calCulate("%");
            } else {
                calCulate("5");
            }
            break;
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
            if (event.shiftKey) {
                calCulate("(");
            } else {
                calCulate("9")
            }
            break;
        case 105:
            calCulate("9");
            break;
        case 48:
            if (event.shiftKey) {
                calCulate(")");
            } else {
                calCulate("0")
            }
            break;
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
        case 13:
            calCulate("=");
            break;
        case 8:
            calCulate("<");
            break;
        case 46:
            calCulate("AC");
            break;
        case 27:
            history.go(-1);
            break;
        case 110:
        case 190:
            calCulate(".");
            break;
        case 37:
            if (mhd) {
                calCulate(">");
            }
            break;
        case 39:
            if (mhd == false) {
                calCulate(">");
            }
            break;
        case 32:
            if (document.getElementById("sci").classList.contains("sld")) {
                document.getElementById("sci").classList.remove("sld")
                document.getElementById("pro").classList.add("sld")
                document.getElementById("pre").style.display = "block"
                prg = true
            } else {
                document.getElementById("pro").classList.remove("sld")
                document.getElementById("sci").classList.add("sld")
                document.getElementById("pre").style.display = "none"
                prg = false
            }
            break;
    }
    try {
        dyh(false);
        if (document.getElementById("prv").innerHTML.indexOf(";") != -1) {
            throw "错误";
        }
    } catch (err) {
        document.getElementById("prv").innerHTML = "错误";
    }
}

function frac(frv) {
    return frv - Int(frv);
}

function dms(dmsv) {
    var min = Int(frac(dmsv) * 60) / 100;
    var sec = (frac(dmsv) - min * 100 / 60) * 3600 / 10000;
    return Int(dmsv) + min + sec;
}

function fact(fav) {
    fav = Int(fav);
    fcr = 1;
    for (var fai = 1; fai <= fav; fai++) {
        fcr *= fai;
    }
    return fcr;
}

function epow(epv) {
    return Math.E ** epv;
}

function degrees(dgv) {
    dgv = dgv.toString()
    if (dgv.slice(dgv.indexOf(".") + 1, -1).length == 1) {
        dgv = dgv + "000";
    } else if (dgv.slice(dgv.indexOf(".") + 1, -1).length == 3) {
        dgv += "0";
    } else if (dgv.indexOf(".") == -1) {
        dgv += ".0000";
    }
    return Int(Number(dgv)) + (Number(dgv.slice(dgv.indexOf(".") + 1, dgv.indexOf(".") + 3)) * 3.6) + (Number(dgv.substr(
        dgv.indexOf(".") + 3).split("").splice(2, 0, ".").join("")) * 0.036);
}

function ln(lnv) {
    var fwa = [-800, 800];
    if (lnv < 1) {
        fwa[1] = 0;
    } else if (lnv > 1) {
        fwa[0] = 0;
    } else {
        return 0;
    }
    while ((fwa[1] - fwa[0]) > 0.0000000001) {
        if (epow((fwa[0] + fwa[1]) / 2) < lnv) {
            fwa[0] = (fwa[0] + fwa[1]) / 2;
        } else if (epow((fwa[0] + fwa[1]) / 2) > lnv) {
            fwa[1] = (fwa[0] + fwa[1]) / 2;
        } else {
            return (fwa[0] + fwa[1]) / 2;
        }
    }
    return (fwa[1] + fwa[0]) / 2;
}

function his() {
    if (hex) {
        hex = false;
        document.getElementById("hsp").innerHTML = "";
    } else {
        hex = true;
        hst = hst.split(";").slice(0, hst.split(";").length - 1)
        for (var i = 0; i < hst.length; i++) {
            document.getElementById("hsp").innerHTML = document.getElementById("hsp").innerHTML +
                "<p onclick='document.getElementById(`t`).value=`" + hst[i] + "`.split(`=`)[1];dyh(false)'>" + hst[i] +
                "</p><hr />";
        }
        hst = hst.join(";") + ";"
    }
}

function ism() {
    if (mmm == 0) {
        document.getElementById("mxs").innerHTML = "";
    } else {
        document.getElementById("mxs").innerHTML = "M";
    }
}

function dyh(typ) {
    if (typ) {
        hst += num.value + "=";
    }
    var calcval = num.value.replace(/sin\(/g, "Math.sin(").replace(/cos\(/g, "Math.cos(").replace(/tan\(/g, "Math.tan(");
    calcval = calcval.replace(/sinh/g, "Math.sinh").replace(/cosh/g, "Math.cosh").replace(/tanh/g, "Math.tanh");
    calcval = calcval.replace(/aMath\.sin/g, "Math.asin").replace(/aMath\.cos/g, "Math.acos").replace(/aMath\.tan/g,
        "Math.atan");
    calcval = calcval.replace(/aMath\.sinh/g, "Math.asinh").replace(/aMath\.cosh/g, "Math.acosh").replace(
        /aMath\.tanh/g, "Math.atanh");
    calcval = calcval.replace(/π/g, "Math.PI").replace(/\^/g, "**").replace(/log\(/g, "Math.log(").replace(/e\*\*/,
        "Math.E**");
    calcval = calcval.replace(/\+√\(/g, "+Math.sqrt(").replace(/\-√\(/g, "-Math.sqrt(").replace(/\×√\(/g, "×Math.sqrt(")
        .replace(/\÷√\(/g, "÷Math.sqrt(");
    calcval = calcval.replace(/√/g, "√@").replace(/\+/g, "@+@").replace(/\-/g, "@-@").replace(/\×/g, "@×@").replace(
        /\÷/g, "@÷@").split("@");
    if (calcval[0] == "√") {
        calcval[0] = "Math.sqrt";
    }
    for (i = 0; i < calcval.length; i++) {
        if (calcval[i].indexOf("√") != -1) {
            calcval[i + 1] = calcval[i + 1].split("").slice(0, -1).join("") + ",1/" + calcval[i].replace("√", "") + ")";
            calcval[i] = "Math.pow";
        }
    }
    calcval = calcval.join("");
    calcval = calcval.replace(/\+/g, "@+@").replace(/\-/g, "@-@").replace(/\×/g, "@*@").replace(/\÷/g, "@/@").split("@");
    for (i = 0; i < calcval.length; i++) {
        if (calcval[i].indexOf("%") != -1) {
            calcval[i] = Number(calcval[i].replace("%", "")) / 100;
        }
    }
    calcval = calcval.join("").replace(/Mod/g, "%");
    if (typ) {
        num.value = eval(calcval);
        if (prg) {
            if (document.getElementById("hex").classList.contains("ivt")) {
                var spl = calcval.split(/[\+\-\*\/]/g)
                for (var tpl in spl) {
                    if (isNaN(Number(spl[tpl])) == false) {
                        calcval = calcval.replace(spl[tpl], parseInt(spl[tpl], 16).toString())
                    }
                }
                num.value = eval(calcval).toString(16)
            } else if (document.getElementById("oct").classList.contains("ivt")) {
                var spl = calcval.split(/[\+\-\*\/]/g)
                for (var tpl in spl) {
                    if (isNaN(Number(spl[tpl])) == false) {
                        calcval = calcval.replace(spl[tpl], parseInt(spl[tpl], 8).toString())
                    }
                }
                num.value = eval(calcval).toString(8)
            } else if (document.getElementById("bin").classList.contains("ivt")) {
                var spl = calcval.split(/[\+\-\*\/]/g)
                for (var tpl in spl) {
                    if (isNaN(Number(spl[tpl])) == false) {
                        calcval = calcval.replace(spl[tpl], parseInt(spl[tpl], 2).toString())
                    }
                }
                num.value = eval(calcval).toString(2)
            }
        }
        hst += eval(calcval) + ";";
    } else {
        document.getElementById("prv").innerHTML = eval(calcval);
        if (prg) {
            document.getElementById("bis").innerHTML = eval(calcval).toString(2);
            if (document.getElementById("hex").classList.contains("ivt")) {
                document.getElementById("bis").innerHTML = parseInt(eval(calcval), 16).toString(2);
            } else if (document.getElementById("oct").classList.contains("ivt")) {
                document.getElementById("bis").innerHTML = parseInt(eval(calcval), 8).toString(2);
            } else if (document.getElementById("bin").classList.contains("ivt")) {
                document.getElementById("bis").innerHTML = eval(calcval)
            }
            if (document.getElementById("bis").innerHTML.length > 32) {
                num.value = num.value.slice(0, -1);
            }
            while (document.getElementById("bis").innerText.length < 32) {
                document.getElementById("bis").innerText = "0" + document.getElementById("bis").innerText
            }
        }
    }
}

function calCulate(val) {
    switch (val) {
        case "=":
            dyh(true);
            break;
        case "<":
            num.value = num.value.slice(0, -1);
            break;
        case ">":
            for (i = 0; i < document.getElementsByClassName("gj").length; i++) {
                if (mhd == false) {
                    document.getElementsByClassName("gj")[i].style.display = "inline";
                } else {
                    document.getElementsByClassName("gj")[i].style.display = "none";
                }
            }
            if (mhd) {
                document.getElementById("exp").className = "";
                mhd = false;
            } else {
                document.getElementById("exp").className = "equ";
                mhd = true;
            }
            break;
        case "AC":
            num.value = "";
            break;
        case "M+":
            var calcval = num.value.replace(/sin\(/g, "Math.sin(").replace(/cos\(/g, "Math.cos(").replace(/tan\(/g,
                "Math.tan(");
            calcval = calcval.replace(/sinh/g, "Math.sinh").replace(/cosh/g, "Math.cosh").replace(/tanh/g, "Math.tanh");
            calcval = calcval.replace(/aMath\.sin/g, "Math.asin").replace(/aMath\.cos/g, "Math.acos").replace(
                /aMath\.tan/g, "Math.atan");
            calcval = calcval.replace(/aMath\.sinh/g, "Math.asinh").replace(/aMath\.cosh/g, "Math.acosh").replace(
                /aMath\.tanh/g, "Math.atanh");
            calcval = calcval.replace(/π/g, "Math.PI").replace(/\^/g, "**").replace(/log\(/g, "Math.log(").replace(
                /e\*\*/, "Math.E**");
            calcval = calcval.replace(/\+√\(/g, "+Math.sqrt(").replace(/\-√\(/g, "-Math.sqrt(").replace(/\×√\(/g,
                "×Math.sqrt(").replace(/\÷√\(/g, "÷Math.sqrt(");
            calcval = calcval.replace(/√/g, "√@").replace(/\+/g, "@+@").replace(/\-/g, "@-@").replace(/\×/g, "@×@").replace(
                /\÷/g, "@÷@").split("@");
            if (calcval[0] == "√") {
                calcval[0] = "Math.sqrt";
            }
            for (i = 0; i < calcval.length; i++) {
                if (calcval[i].indexOf("√") != -1) {
                    calcval[i + 1] = calcval[i + 1].split("").slice(0, -1).join("") + ",1/" + calcval[i].replace("√",
                        "") + ")";
                    calcval[i] = "Math.pow";
                }
            }
            calcval = calcval.join("");
            calcval = calcval.replace(/\+/g, "@+@").replace(/\-/g, "@-@").replace(/\×/g, "@*@").replace(/\÷/g, "@/@").split(
                "@");
            for (i = 0; i < calcval.length; i++) {
                if (calcval[i].indexOf("%") != -1) {
                    calcval[i] = Number(calcval[i].replace("%", "")) / 100;
                }
            }
            calcval = calcval.join("").replace(/Mod/g, "%");
            if (isNaN(eval(calcval)) == false) {
                mmm += Number(eval(calcval));
                ism();
            }
            break;
        case "MR":
            num.value += mmm.toString();
            break;
        case "M-":
            var calcval = num.value.replace(/sin\(/g, "Math.sin(").replace(/cos\(/g, "Math.cos(").replace(/tan\(/g,
                "Math.tan(");
            calcval = calcval.replace(/sinh/g, "Math.sinh").replace(/cosh/g, "Math.cosh").replace(/tanh/g, "Math.tanh");
            calcval = calcval.replace(/aMath\.sin/g, "Math.asin").replace(/aMath\.cos/g, "Math.acos").replace(
                /aMath\.tan/g, "Math.atan");
            calcval = calcval.replace(/aMath\.sinh/g, "Math.asinh").replace(/aMath\.cosh/g, "Math.acosh").replace(
                /aMath\.tanh/g, "Math.atanh");
            calcval = calcval.replace(/π/g, "Math.PI").replace(/\^/g, "**").replace(/log\(/g, "Math.log(").replace(
                /e\*\*/, "Math.E**");
            calcval = calcval.replace(/\+√\(/g, "+Math.sqrt(").replace(/\-√\(/g, "-Math.sqrt(").replace(/\×√\(/g,
                "×Math.sqrt(").replace(/\÷√\(/g, "÷Math.sqrt(");
            calcval = calcval.replace(/√/g, "√@").replace(/\+/g, "@+@").replace(/\-/g, "@-@").replace(/\×/g, "@×@").replace(
                /\÷/g, "@÷@").split("@");
            if (calcval[0] == "√") {
                calcval[0] = "Math.sqrt";
            }
            for (i = 0; i < calcval.length; i++) {
                if (calcval[i].indexOf("√") != -1) {
                    calcval[i + 1] = calcval[i + 1].split("").slice(0, -1).join("") + ",1/" + calcval[i].replace("√",
                        "") + ")";
                    calcval[i] = "Math.pow";
                }
            }
            calcval = calcval.join("");
            calcval = calcval.replace(/\+/g, "@+@").replace(/\-/g, "@-@").replace(/\×/g, "@*@").replace(/\÷/g, "@/@").split(
                "@");
            for (i = 0; i < calcval.length; i++) {
                if (calcval[i].indexOf("%") != -1) {
                    calcval[i] = Number(calcval[i].replace("%", "")) / 100;
                }
            }
            calcval = calcval.join("").replace(/Mod/g, "%");
            if (isNaN(eval(calcval)) == false) {
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
            if (jgl == false) {
                num.value = num.value + val;
                jgl = true;
            } else {
                num.value = num.value.slice(0, -1) + val;
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
        case "log":
            num.value = num.value + val + "(";
            break;
        case "deg":
            num.value = num.value + "degrees(";
            break;
        case "!":
            num.value += "fact(";
            break;
        case "sin^-1":
        case "cos^-1":
        case "tan^-1":
        case "sinh^-1":
        case "cosh^-1":
        case "tanh^-1":
            num.value = num.value + "a" + val.slice(0, -3) + "(";
            break;
        case "pi":
            num.value += "π";
            break;
        case "F-E":
            dyh(true);
            if (Number(num.value) >= 10) {
                if (num.value.indexOf(".") == -1) {
                    num.value += ".";
                }
                var aws = num.value.length - num.value.indexOf(".");
                var tmp = num.value.replace(".", "").split("");
                tmp[1] = "." + tmp[1];
                tmp = tmp.join("");
                var awb = tmp.length - tmp.indexOf(".");
                num.value = Number(tmp) + "e+" + (awb - aws);
            } else if (Number(num.value) < 1) {
                var jnu = 0;
                while (Number(num.value) < 1) {
                    num.value = Number(num.value) * 10;
                    jnu++;
                }
                num.value = num.value + "e-" + jnu;
            }
            break;
        case "Exp":
            num.value += "e";
            break;
        case "e^x":
            num.value += "e^";
            break;
        case "Inv":
            if (ivd) {
                document.getElementById("inb").style.color = "black";
                document.getElementById("inb").style.backgroundColor = "white";
                document.getElementById("lnb").value = "ln";
                document.getElementById("sinb").value = "sin";
                document.getElementById("cosb").value = "cos";
                document.getElementById("tanb").value = "tan";
                document.getElementById("sinhb").value = "sinh";
                document.getElementById("coshb").value = "cosh";
                document.getElementById("tanhb").value = "tanh";
                document.getElementById("intb").value = "Int";
                document.getElementById("dmsb").value = "dms";
                document.getElementById("pib").value = "pi";
                ivd = false;
            } else {
                document.getElementById("inb").style.color = "white";
                document.getElementById("inb").style.backgroundColor = "black";
                document.getElementById("lnb").value = "e^x";
                document.getElementById("sinb").value = "sin^-1";
                document.getElementById("cosb").value = "cos^-1";
                document.getElementById("tanb").value = "tan^-1";
                document.getElementById("sinhb").value = "sinh^-1";
                document.getElementById("coshb").value = "cosh^-1";
                document.getElementById("tanhb").value = "tanh^-1";
                document.getElementById("intb").value = "Frac";
                document.getElementById("dmsb").value = "deg";
                document.getElementById("pib").value = "2*π";
                ivd = true;
            }
            break;
        default:
            num.value = num.value + val;
            jgl = false;
            break;
    }
    try {
        dyh(false);
        if (document.getElementById("prv").innerHTML.indexOf(";") != -1) {
            throw "错误";
        }
    } catch (err) {
        document.getElementById("prv").innerHTML = "错误";
    }
}

function c(cjz) {
    if (cjz == "dec") {
        document.getElementById("dec").classList.add("ivt")
        document.getElementById("hex").classList.remove("ivt")
        document.getElementById("oct").classList.remove("ivt")
        document.getElementById("bin").classList.remove("ivt")
    } else if (cjz == "hex") {
        document.getElementById("hex").classList.add("ivt")
        document.getElementById("dec").classList.remove("ivt")
        document.getElementById("oct").classList.remove("ivt")
        document.getElementById("bin").classList.remove("ivt")
    } else if (cjz == "oct") {
        document.getElementById("oct").classList.add("ivt")
        document.getElementById("hex").classList.remove("ivt")
        document.getElementById("dec").classList.remove("ivt")
        document.getElementById("bin").classList.remove("ivt")
    } else {
        document.getElementById("bin").classList.add("ivt")
        document.getElementById("hex").classList.remove("ivt")
        document.getElementById("oct").classList.remove("ivt")
        document.getElementById("dec").classList.remove("ivt")
    }
}
