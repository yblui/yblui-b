var mmm = 0, num = document.getElementById("t"), jgl = false, i, mhd = false, ivd = false, hst = "", hex = false, prg = false;

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
        case 50:
        case 98:
        case 51:
        case 99:
        case 52:
        case 100:
        case 101:
        case 54:
        case 102:
        case 55:
        case 103:
        case 56:
        case 104:
        case 105:
        case 96:
        case 110:
        case 190:
            calCulate(event.key);
            break;
        case 53:
            if (event.shiftKey) {
                calCulate("%");
            } else {
                calCulate("5");
            }
            break;
        case 57:
            if (event.shiftKey) {
                calCulate("(");
            } else {
                calCulate("9")
            }
            break;
        case 48:
            if (event.shiftKey) {
                calCulate(")");
            } else {
                calCulate("0")
            }
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
            if (document.getElementById("tjx").classList.contains("sld")) {
                calCulate("Add");
            } else {
                calCulate("=");
            }
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
        case 37:
            if (mhd) {
                calCulate(">");
            }
            break;
        case 39:
            if (!mhd) {
                calCulate(">");
            }
            break;
        case 32:
            chsld();
            break;
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
            calCulate(event.key);
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

function chsld() {
    for (var y = 0; y < document.getElementsByTagName("input").length; y++) {
        if (document.getElementsByTagName("input")[y].type == "button") document.getElementsByTagName("input")[y].style.display = "inline";
    }
    if (!arguments[0]) {
        if (document.getElementById("sci").classList.contains("sld")) {
            document.getElementById("sci").classList.remove("sld");
            document.getElementById("tjx").classList.remove("sld");
            document.getElementById("pro").classList.add("sld");
        } else if (document.getElementById("pro").classList.contains("sld")) {
            document.getElementById("pro").classList.remove("sld");
            document.getElementById("sci").classList.remove("sld");
            document.getElementById("tjx").classList.add("sld");
        } else {
            document.getElementById("sci").classList.add("sld");
            document.getElementById("pro").classList.remove("sld");
            document.getElementById("tjx").classList.remove("sld");
        }
    } else {
        for (var t = 0; t < document.getElementsByClassName("b").length; t++) {
            document.getElementsByClassName("b")[t].classList.remove("sld");
        }
        arguments[0].classList.add("sld");
    }
    if (document.getElementById("pro").classList.contains("sld")) {
        if (document.getElementById("hex").classList.contains("ivt")) {
            num.value = Number(num.value).toString(16);
        } else if (document.getElementById("oct").classList.contains("ivt")) {
            num.value = Number(num.value).toString(8);
        } else if (document.getElementById("bin").classList.contains("ivt")) {
            num.value = Number(num.value).toString(2);
        }
        document.getElementById("pre").style.display = "block";
        document.getElementById("dot").value = "Mod";
        prg = true;
        for (i = 0; i < document.getElementsByClassName("ppl").length; i++) {
            document.getElementsByClassName("ppl")[i].style.display = "inline";
        }
        document.getElementById("equ").value = "=";
        document.getElementById("tjb").style.display = "none";
        document.getElementById("pec").style.display = "none";
        document.getElementById("tjb").style.display = "none";
        document.getElementById("tle").style.display = "none";
        document.getElementById("cng").style.display = "inline-block";
        document.getElementById("cus").style.display = "inline-block";
        document.getElementById("prv").style.display = "block";
    } else if (document.getElementById("tjx").classList.contains("sld")) {
        if (document.getElementById("hex").classList.contains("ivt")) {
            num.value = parseInt(num.value, 16);
        } else if (document.getElementById("oct").classList.contains("ivt")) {
            num.value = parseInt(num.value, 8);
        } else if (document.getElementById("bin").classList.contains("ivt")) {
            num.value = parseInt(num.value, 2);
        }
        document.getElementById("pre").style.display = "none";
        document.getElementById("dot").value = ".";
        prg = false;
        for (i = 0; i < document.getElementsByClassName("ppl").length; i++) {
            document.getElementsByClassName("ppl")[i].style.display = "none";
        }
        for (i = 0; i < 8; i++) {
            document.getElementById("s" + ["2", "3", "4", "5", "6", "7", "8", "9"][i]).style.display = "inline";
        }
        document.getElementById("equ").value = "Add";
        document.getElementById("tjb").style.display = "block";
        document.getElementById("tle").style.display = "block";
        document.getElementById("pec").style.display = "inline-block";
        document.getElementById("pec").value = "CAD";
        document.getElementById("cng").style.display = "none";
        document.getElementById("cus").style.display = "none";
        document.getElementById("prv").style.display = "none";
    } else {
        for (i = 0; i < document.getElementsByClassName("ppl").length; i++) {
            document.getElementsByClassName("ppl")[i].style.display = "none";
        }
        document.getElementById("equ").value = "=";
        document.getElementById("tjb").style.display = "none";
        document.getElementById("pec").style.display = "inline-block";
        document.getElementById("pec").value = "%";
        document.getElementById("tjb").style.display = "none";
        document.getElementById("tle").style.display = "none";
        document.getElementById("cng").style.display = "inline-block";
        document.getElementById("cus").style.display = "inline-block";
        document.getElementById("prv").style.display = "block";
        document.getElementById("pre").style.display = "none";
    }
    if (document.getElementById("rq").classList.contains("sld")) {
        document.getElementsByClassName("hie")[0].style.display = "block";
        document.getElementsByClassName("hie")[1].style.display = "none";
        for (var y = 0; y < document.getElementsByTagName("input").length; y++) {
            if (document.getElementsByTagName("input")[y].type == "button") document.getElementsByTagName("input")[y].style.display = "none";
        }
    } else if (!document.getElementById("sci").classList.contains("sld") && !document.getElementById("pro").classList.contains("sld") && !document.getElementById("tjx").classList.contains("sld")) {
        document.getElementsByClassName("hie")[1].style.display = "block";
        document.getElementsByClassName("hie")[0].style.display = "none";
    }
    calCulate(">");
    calCulate(">");
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

function sin(a) {
    return Math.sin(a);
}

function cos(a) {
    return Math.cos(a);
}

function tan(a) {
    return Math.tan(a);
}

function sinh(a) {
    return Math.sinh(a);
}

function cosh(a) {
    return Math.cosh(a);
}

function tanh(a) {
    return Math.tanh(a);
}

function asin(a) {
    return Math.asin(a);
}

function acos(a) {
    return Math.acos(a);
}

function atan(a) {
    return Math.atan(a);
}

function asinh(a) {
    return Math.asinh(a);
}

function acosh(a) {
    return Math.acosh(a);
}

function atanh(a) {
    return Math.atanh(a);
}

function degrees(dgv) {
    dgv = dgv.toString();
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

function ism() {
    if (mmm == 0) {
        document.getElementById("mxs").innerHTML = "";
    } else {
        document.getElementById("mxs").innerHTML = "M";
    }
}

function cfh(a, b, c) {
    var spl = a;
    var fuh = b;
    var tpl = 0;
    while (tpl <= spl.length - 1) {
        if (!spl[tpl]) {
            spl.splice(tpl, 1);
            tpl--;
        }
        tpl++;
    }
    tpl = 0;
    while (tpl <= fuh.length - 1) {
        if (!fuh[tpl]) {
            fuh.splice(tpl, 1);
            tpl--;
        }
        tpl++;
    }
    tpl = 0;
    for (var tpl in spl) {
        spl[tpl] = parseInt(spl[tpl], c);
    }
    calcval = "";
    tpl = 0;
    if (num.value[0] == "(" || ((num.value[0] == "+" || num.value[0] == "-") && num.value[1] == "(")) {
        spl.splice(0, 0, "");
    }
    while (tpl <= fuh.length - 1) {
        calcval = calcval + spl[tpl] + fuh[tpl];
        tpl++;
    }
    if (spl[tpl]) calcval += spl[tpl];
    num.value = eval(calcval).toString(c);
}

function dyh(typ) {
    if (typ) {
        hst += num.value + "=";
    }
    var calcval = num.value.replace(/π/g, "Math.PI").replace(/\^/g, "**").replace(/log\(/g, "Math.log(").replace(/e\*\*/,
        "Math.E**");
    calcval = calcval.replace(/\+√\(/g, "+Math.sqrt(").replace(/\-√\(/g, "-Math.sqrt(").replace(/\×√\(/g, "×Math.sqrt(")
        .replace(/\÷√\(/g, "÷Math.sqrt(");
    calcval = calcval.replace(/Xor/g, "^").replace(/And/g, "&").replace(/Or/g, "|").replace(/Lsh/g, "<<").replace(
        /Rsh/g, ">>>");
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
        if (prg) {
            if (document.getElementById("hex").classList.contains("ivt")) {
                cfh(calcval.split(/[^0-9abcdef]+/g), calcval.split(/[0-9abcdef]+/g), 16);
            } else if (document.getElementById("oct").classList.contains("ivt")) {
                cfh(calcval.split(/[^01234567]+/g), calcval.split(/[01234567]+/g), 8);
            } else if (document.getElementById("bin").classList.contains("ivt")) {
                cfh(calcval.split(/[^01]+/g), calcval.split(/[01]+/g), 2);
            } else {
                num.value = eval(calcval);
            }
        } else {
            num.value = eval(calcval);
        }
        hst += eval(calcval) + ";";
    } else {
        if (prg) {
            if (document.getElementById("hex").classList.contains("ivt")) {
                var spl = calcval.split(/[^0-9abcdef]+/g);
                var fuh = calcval.split(/[0-9abcdef]+/g);
                var tpl = 0;
                while (tpl <= spl.length - 1) {
                    if (!spl[tpl]) {
                        spl.splice(tpl, 1);
                        tpl--;
                    }
                    tpl++;
                }
                tpl = 0
                while (tpl <= fuh.length - 1) {
                    if (!fuh[tpl]) {
                        fuh.splice(tpl, 1);
                        tpl--;
                    }
                    tpl++;
                }
                tpl = 0;
                for (var tpl in spl) {
                    spl[tpl] = parseInt(spl[tpl], 16);
                }
                calcval = "";
                tpl = 0;
                if (num.value[0] == "(" || ((num.value[0] == "+" || num.value[0] == "-") && num.value[1] == "(")) {
                    spl.splice(0, 0, "");
                }
                while (tpl <= fuh.length - 1) {
                    calcval = calcval + spl[tpl] + fuh[tpl];
                    tpl++;
                }
                if (spl[tpl]) calcval += spl[tpl];
                document.getElementById("prv").innerText = eval(calcval).toString(16);
            } else if (document.getElementById("oct").classList.contains("ivt")) {
                var spl = calcval.split(/[^01234567]+/g);
                var fuh = calcval.split(/[01234567]+/g);
                var tpl = 0;
                while (tpl <= spl.length - 1) {
                    if (!spl[tpl]) {
                        spl.splice(tpl, 1);
                        tpl--;
                    }
                    tpl++;
                }
                tpl = 0;
                while (tpl <= fuh.length - 1) {
                    if (!fuh[tpl]) {
                        fuh.splice(tpl, 1);
                        tpl--;
                    }
                    tpl++;
                }
                tpl = 0;
                for (var tpl in spl) {
                    spl[tpl] = parseInt(spl[tpl], 8);
                }
                calcval = "";
                tpl = 0;
                if (num.value[0] == "(" || ((num.value[0] == "+" || num.value[0] == "-") && num.value[1] == "(")) {
                    spl.splice(0, 0, "");
                }
                while (tpl <= fuh.length - 1) {
                    calcval = calcval + spl[tpl] + fuh[tpl];
                    tpl++;
                }
                if (spl[tpl]) calcval += spl[tpl];
                document.getElementById("prv").innerText = eval(calcval).toString(8)
            } else if (document.getElementById("bin").classList.contains("ivt")) {
                var spl = calcval.split(/[^01]+/g);
                var fuh = calcval.split(/[01]+/g);
                var tpl = 0
                while (tpl <= spl.length - 1) {
                    if (!spl[tpl]) {
                        spl.splice(tpl, 1);
                        tpl--;
                    }
                    tpl++;
                }
                tpl = 0;
                while (tpl <= fuh.length - 1) {
                    if (!fuh[tpl]) {
                        fuh.splice(tpl, 1);
                        tpl--;
                    }
                    tpl++;
                }
                tpl = 0;
                for (var tpl in spl) {
                    spl[tpl] = parseInt(spl[tpl], 2);
                }
                calcval = "";
                tpl = 0;
                if (num.value[0] == "(" || ((num.value[0] == "+" || num.value[0] == "-") && num.value[1] == "(")) {
                    spl.splice(0, 0, "");
                }
                while (tpl <= fuh.length - 1) {
                    calcval = calcval + spl[tpl] + fuh[tpl];
                    tpl++;
                }
                if (spl[tpl]) {
                    calcval += spl[tpl];
                }
                document.getElementById("prv").innerText = eval(calcval).toString(2);
            } else {
                document.getElementById("prv").innerText = eval(calcval);
            }
            var tbi = "";
            tbi = Number(eval(calcval)).toString(2);
            if (document.getElementById("b1").classList.contains("ivt")) {
                var lsn = 32;
            } else if (document.getElementById("b2").classList.contains("ivt")) {
                var lsn = 16
            } else {
                var lsn = 8;
            }
            if (tbi.length > lsn) {
                num.value = num.value.slice(0, -1);
            }
            while (tbi.length < lsn) {
                tbi = "0" + tbi;
            }
            if (tbi.indexOf("-") != -1) {
                tbi = tbi.replace("-", "0");
                tbi = tbi.split("");
                for (var i = 0; i <= (lsn - 1); i++) {
                    if (tbi[i] == "0") {
                        tbi[i] = "1";
                    } else {
                        tbi[i] = "0";
                    }
                }
                tbi = tbi.join("");
                tbi = (parseInt(tbi, 2) + 1).toString(2)
            }
            for (var i = (32 - lsn); i <= 31; i++) {
                document.getElementById("bi" + (i + 1)).innerText = tbi[i - (32 - lsn)];
            }
        } else {
            document.getElementById("prv").innerHTML = eval(calcval);
        }
    }
    hsp.innerHTML = "";
    hst = hst.split(";").slice(0, hst.split(";").length - 1);
    for (var i = 0; i < hst.length; i++) {
        document.getElementById("hsp").innerHTML = document.getElementById("hsp").innerHTML +
            "<p onclick='document.getElementById(`t`).value=`" + hst[i] + "`.split(`=`)[1];dyh(false)'>" + hst[i] +
            "</p><hr />";
    }
    document.getElementById("hsp").innerHTML = document.getElementById("hsp").innerHTML + "<p onclick='hst=``;document.getElementById(`hsp`).innerHTML=`<p>清空历史</p>`'>清空历史</p>"
    hst = hst.join(";") + ";";
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
            if (prg) {
                var geb = "pr";
            } else if (document.getElementById("sci").classList.contains("sld")) {
                var geb = "gj";
            } else {
                var geb = "tj";
            }
            for (i = 0; i < document.getElementsByClassName("pr").length; i++) {
                document.getElementsByClassName("pr")[i].style.display = "none";
            }
            for (i = 0; i < document.getElementsByClassName("gj").length; i++) {
                document.getElementsByClassName("gj")[i].style.display = "none";
            }
            for (i = 0; i < document.getElementsByClassName("tj").length; i++) {
                document.getElementsByClassName("tj")[i].style.display = "none";
            }
            for (i = 0; i < document.getElementsByClassName(geb).length; i++) {
                if (!mhd) {
                    document.getElementsByClassName(geb)[i].style.display = "inline";
                } else {
                    document.getElementsByClassName(geb)[i].style.display = "none";
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
            var calcval = num.value.replace(/π/g, "Math.PI").replace(/\^/g, "**").replace(/log\(/g, "Math.log(").replace(
                /e\*\*/, "Math.E**");
            calcval = calcval.replace(/\+√\(/g, "+Math.sqrt(").replace(/\-√\(/g, "-Math.sqrt(").replace(/\×√\(/g,
                "×Math.sqrt(").replace(/\÷√\(/g, "÷Math.sqrt(");
            calcval = calcval.replace(/Xor/g, "^").replace(/And/g, "&").replace(/Or/g, "|")
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
            document.getElementById("jyi").innerHTML = "<p>" + mmm + "</p><button>MC</button><button>M+</button><button>M-</button>";
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
            calcval = calcval.replace(/Xor/g, "^").replace(/And/g, "&").replace(/Or/g, "|")
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
            if (!isNaN(eval(calcval))) {
                mmm -= Number(eval(calcval));
                ism();
            }
            document.getElementById("jyi").innerHTML = "<p>" + mmm + "</p><button>MC</button><button>M+</button><button>M-</button>";
            break;
        case "MC":
            mmm = 0;
            ism();
            document.getElementById("jyi").innerHTML = "<p>" + mmm + "</p><button>MC</button><button>M+</button><button>M-</button>";
            break;
        case "+":
        case "-":
        case "×":
        case "÷":
            if (!jgl) {
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
        case "RoL":
            dyh(false)
            if (document.getElementById("b1").classList.contains("ivt")) {
                lsn = 32
            } else if (document.getElementById("b2").classList.contains("ivt")) {
                lsn = 16
            } else {
                lsn = 8
            }
            if (document.getElementById("dec").classList.contains("ivt")) {
                if ((Number(num.value) << 1).toString(2).length > lsn) {
                    num.value = parseInt((Number(num.value) << 1).toString(2).slice((Number(num.value) << 1).toString(2).length - lsn, (Number(num.value) << 1).toString(2).length), 2);
                } else {
                    num.value = (Number(num.value) << 1)
                }
            } else if (document.getElementById("hex").classList.contains("ivt")) {
                if ((parseInt(num.value, 16) << 1).toString(2).length > lsn) {
                    num.value = parseInt((parseInt(num.value, 16) << 1).toString(2).slice((parseInt(num.value, 16) << 1).toString(2).length - lsn, (parseInt(num.value, 16) << 1).toString(2).length), 2).toString(16);
                } else {
                    num.value = (parseInt(num.value, 16) << 1).toString(16)
                }
            } else if (document.getElementById("oct").classList.contains("ivt")) {
                if ((parseInt(num.value, 8) << 1).toString(2).length > lsn) {
                    num.value = parseInt((parseInt(num.value, 8) << 1).toString(2).slice((parseInt(num.value, 8) << 1).toString(2).length - lsn, (parseInt(num.value, 8) << 1).toString(2).length), 2).toString(8);
                } else {
                    num.value = (parseInt(num.value, 8) << 1).toString(8)
                }
            } else {
                if ((parseInt(num.value, 2) << 1).toString(2).length > lsn) {
                    num.value = parseInt((parseInt(num.value, 2) << 1).toString(2).slice((parseInt(num.value, 2) << 1).toString(2).length - lsn, (parseInt(num.value, 2) << 1).toString(2).length), 2).toString(2);
                } else {
                    num.value = (parseInt(num.value, 2) << 1).toString(2)
                }
            }
            break;
        case "RoR":
            dyh(false)
            if (document.getElementById("dec").classList.contains("ivt")) {
                num.value = Number(num.value) >>> 1;
            } else if (document.getElementById("hex").classList.contains("ivt")) {
                num.value = (parseInt(num.value, 16) >>> 1).toString(16)
            } else if (document.getElementById("oct").classList.contains("ivt")) {
                num.value = (parseInt(num.value, 8) >>> 1).toString(8)
            } else {
                num.value = (parseInt(num.value, 2) >>> 1).toString(2)
            }
            break;
        case "Not":
            dyh(false)
            if (document.getElementById("dec").classList.contains("ivt")) {
                num.value = ~Number(num.value);
            } else if (document.getElementById("hex").classList.contains("ivt")) {
                num.value = (~parseInt(num.value, 16)).toString(16)
            } else if (document.getElementById("oct").classList.contains("ivt")) {
                num.value = (~parseInt(num.value, 8)).toString(8)
            } else {
                num.value = (~parseInt(num.value, 2)).toString(2)
            }
            break;
        case "Add":
            document.getElementById("tjb").innerHTML += ("<span contenteditable='true'>" + num.value + "</span><hr />");
            document.getElementById("tle").innerHTML = "计数=" + (document.getElementById("tjb").innerHTML.split("<hr>").length - 1);
            num.value = "";
            break;
        case "∑x":
            var sxm = 0;
            for (var sxi in document.getElementById("tjb").innerHTML.split("<hr>")) {
                if (document.getElementById("tjb").innerHTML.split("<hr>")[sxi] != "") {
                    sxm = sxm + Number(document.getElementById("tjb").innerText.split("\n")[sxi]);
                }
            }
            num.value = sxm;
            break;
        case "∑x^2":
            var sxm = 0;
            for (var sxi in document.getElementById("tjb").innerHTML.split("<hr>")) {
                if (document.getElementById("tjb").innerHTML.split("<hr>")[sxi] != "") {
                    sxm = sxm + Number(document.getElementById("tjb").innerText.split("\n")[sxi]) ** 2;
                }
            }
            num.value = sxm;
            break;
        case "x":
            var sxm = 0;
            for (var sxi in document.getElementById("tjb").innerHTML.split("<hr>")) {
                if (document.getElementById("tjb").innerHTML.split("<hr>")[sxi] != "") {
                    sxm = sxm + Number(document.getElementById("tjb").innerText.split("\n")[sxi]) / (document.getElementById(
                        "tjb").innerHTML.split("<hr>").length - 1);
                }
            }
            num.value = sxm;
            break;
        case "x^2":
            var sxm = 0;
            for (var sxi in document.getElementById("tjb").innerHTML.split("<hr>")) {
                if (document.getElementById("tjb").innerHTML.split("<hr>")[sxi] != "") {
                    sxm = sxm + Number(document.getElementById("tjb").innerText.split("\n")[sxi]) ** 2 / (document.getElementById(
                        "tjb").innerHTML.split("<hr>").length - 1);
                }
            }
            num.value = sxm;
            break;
        case "σn":
            var sxm = 0;
            for (var sxi in document.getElementById("tjb").innerHTML.split("<hr>")) {
                if (document.getElementById("tjb").innerHTML.split("<hr>")[sxi] != "") {
                    sxm = sxm + Number(document.getElementById("tjb").innerText.split("\n")[sxi]) ** 2;
                }
            }
            var sxn = 0;
            for (var sxi in document.getElementById("tjb").innerHTML.split("<hr>")) {
                if (document.getElementById("tjb").innerHTML.split("<hr>")[sxi] != "") {
                    sxn = sxn + Number(document.getElementById("tjb").innerText.split("\n")[sxi]);
                }
            }
            num.value = Math.sqrt(sxm / (document.getElementById("tjb").innerHTML.split("<hr>").length - 1) - (sxn ** 2) /
                (document.getElementById("tjb").innerHTML.split("<hr>").length - 1) ** 2);
            break;
        case "σn-1":
            var sxm = 0;
            for (var sxi in document.getElementById("tjb").innerHTML.split("<hr>")) {
                if (document.getElementById("tjb").innerHTML.split("<hr>")[sxi] != "") {
                    sxm = sxm + Number(document.getElementById("tjb").innerText.split("\n")[sxi]) ** 2;
                }
            }
            var sxn = 0;
            for (var sxi in document.getElementById("tjb").innerHTML.split("<hr>")) {
                if (document.getElementById("tjb").innerHTML.split("<hr>")[sxi] != "") {
                    sxn = sxn + Number(document.getElementById("tjb").innerText.split("\n")[sxi]);
                }
            }
            num.value = Math.sqrt(sxm / (document.getElementById("tjb").innerHTML.split("<hr>").length - 2) - (sxn ** 2) /
                (document.getElementById("tjb").innerHTML.split("<hr>").length - 2) ** 2);
            break;
        case "CAD":
            document.getElementById("tjb").innerHTML = "";
            document.getElementById("tle").innerText = "计数=0"
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

function ch(cjz) {
    if (prg) {
        if (cjz == "dec") {
            dyh(false);
            num.value = parseInt(document.getElementById("pre").innerText.replace(/\s/g, ""), 2);
            document.getElementById("dec").classList.add("ivt");
            document.getElementById("hex").classList.remove("ivt");
            document.getElementById("oct").classList.remove("ivt");
            document.getElementById("bin").classList.remove("ivt");
            for (var i = 2; i <= 9; i++) {
                document.getElementById("s" + i).style.display = "inline-block";
            }
            for (i = 0; i < ["a", "b", "c", "d", "e", "f"].length; i++) {
                document.getElementById("s" + ["a", "b", "c", "d", "e", "f"][i]).style.display = "none";
            }
        } else if (cjz == "hex") {
            dyh(false);
            num.value = parseInt(document.getElementById("pre").innerText.replace(/\s/g, ""), 2).toString(16)
            document.getElementById("hex").classList.add("ivt");
            document.getElementById("dec").classList.remove("ivt");
            document.getElementById("oct").classList.remove("ivt");
            document.getElementById("bin").classList.remove("ivt");
            for (i = 0; i < 14; i++) {
                document.getElementById("s" + ["2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"][i])
                    .style.display = "inline-block";
            }
        } else if (cjz == "oct") {
            dyh(false);
            num.value = parseInt(document.getElementById("pre").innerText.replace(/\s/g, ""), 2).toString(8)
            document.getElementById("oct").classList.add("ivt");
            document.getElementById("hex").classList.remove("ivt");
            document.getElementById("dec").classList.remove("ivt");
            document.getElementById("bin").classList.remove("ivt");
            for (var i = 2; i <= 7; i++) {
                document.getElementById("s" + i).style.display = "inline-block";
            }
            for (i = 0; i < ["8", "9", "a", "b", "c", "d", "e", "f"].length; i++) {
                document.getElementById("s" + ["8", "9", "a", "b", "c", "d", "e", "f"][i]).style.display = "none";
            }
        } else if (cjz == "bin") {
            dyh(false);
            num.value = parseInt(document.getElementById("pre").innerText.replace(/\s/g, ""), 2).toString(2)
            document.getElementById("bin").classList.add("ivt");
            document.getElementById("hex").classList.remove("ivt");
            document.getElementById("oct").classList.remove("ivt");
            document.getElementById("dec").classList.remove("ivt");
            for (i = 0; i < 14; i++) {
                document.getElementById("s" + ["2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"][i])
                    .style.display = "none";
            }
        } else if (cjz == "b1") {
            document.getElementById("b1").classList.add("ivt");
            document.getElementById("b2").classList.remove("ivt");
            document.getElementById("b3").classList.remove("ivt");
            document.getElementById("fb").style.display = "inline-block";
            document.getElementById("fb2").style.display = "inline-block";
        } else if (cjz == "b2") {
            document.getElementById("b2").classList.add("ivt");
            document.getElementById("b1").classList.remove("ivt");
            document.getElementById("b3").classList.remove("ivt");
            document.getElementById("fb").style.display = "none";
            document.getElementById("fb2").style.display = "inline-block";
        } else {
            document.getElementById("b3").classList.add("ivt");
            document.getElementById("b2").classList.remove("ivt");
            document.getElementById("b1").classList.remove("ivt");
            document.getElementById("fb").style.display = "none";
            document.getElementById("fb2").style.display = "none";
        }
    }
}

function cgebi(civ) {
    if (document.getElementById("bi" + civ).innerText == "0") {
        document.getElementById("bi" + civ).innerText = "1";
    } else {
        document.getElementById("bi" + civ).innerText = "0";
    }
    if (document.getElementById("hex").classList.contains("ivt")) {
        num.value = parseInt(document.getElementById("bis").innerText.replace(/\s/g, ""), 2).toString(16);
    } else if (document.getElementById("oct").classList.contains("ivt")) {
        num.value = parseInt(document.getElementById("bis").innerText.replace(/\s/g, ""), 2).toString(8);
    } else if (document.getElementById("bin").classList.contains("ivt")) {
        num.value = parseInt(document.getElementById("bis").innerText.replace(/\s/g, ""), 2).toString(2);
    } else {
        num.value = parseInt(document.getElementById("bis").innerText.replace(/\s/g, ""), 2);
        if (document.getElementById("bis").innerText.replace(/\s/g, "")[0] == "1") {
            var tbi = document.getElementById("bis").innerText.replace(/\s/g, "");
            tbi = (parseInt(tbi, 2) - 1).toString(2);
            tbi = tbi.replace("1", "-");
            tbi = tbi.split("");
            for (var i = 1; i <= 31; i++) {
                if (tbi[i] == "0") {
                    tbi[i] = "1";
                } else {
                    tbi[i] = "0";
                }
            }
            tbi = tbi.join("");
            num.value = parseInt(tbi, 2);
        }
    }
}

function set(a) {
    a.classList.add("set");
    if (a.id == "hip") {
        document.getElementById("jbt").classList.remove("set");
        document.getElementById("hsp").style.display = "block";
        document.getElementById("jyi").style.display = "none";
    } else {
        document.getElementById("hip").classList.remove("set");
        document.getElementById("hsp").style.display = "none";
        document.getElementById("jyi").style.display = "block";
    }
}

function rqj(a) {
    document.getElementsByClassName("jsa")[a].style.display = "block";
    if (a == 0) {
        document.getElementsByClassName("jsa")[1].style.display = "none";
    } else {
        document.getElementsByClassName("jsa")[0].style.display = "none";
    }
}

function cck() {
    var zt = (new Date(document.getElementById("startDate").value) - new Date(document.getElementById("endDate").value)) / 86400000
    if ((new Date(document.getElementById("startDate").value) - new Date(document.getElementById("endDate").value)) > 0) {
        document.getElementById("czh").innerText = zt + "天";
    } else {
        document.getElementById("czh").innerText = -zt + "天";
    }
    var riqi = document.getElementById("startDate").value.split("-");
    for (let v = 0; v < riqi.length; v++) {
        riqi[v] = Number(riqi[v])
    }
    var jia = [Number(document.getElementById("year").value), Number(document.getElementById("month").value), Number(document.getElementById("day").value)];
    var ping = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var run = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if(document.getElementById("ad").checked) {
        riqi[0] += jia[0];
        riqi[1] += jia[1];
        riqi[2] += jia[2];
        do {
            riqi[0] += (riqi[1] - riqi[1] % 12) / 12;
            riqi[1] = riqi[1] % 12;
            if (!riqi[1]) riqi[1] = 12;
            if ((riqi[0] % 4 == 0 && riqi[0] % 100 != 0) || riqi[0] % 400 == 0) {
                var nian = run;
            } else {
                var nian = ping;
            }
            if (riqi[2] > nian[riqi[1] - 1]) {
                riqi[2] -= nian[riqi[1] - 1];
                riqi[1]++;
                if (riqi[1] == 13) riqi[1] = 1;
            }
        } while (riqi[2] > nian[riqi[1] - 1]);
    } else {
        riqi[0] -= jia[0];
        riqi[1] -= jia[1];
        riqi[2] -= jia[2];
        /*do {
            
        } while (riqi[2] < nian[riqi[1] - 1]);*/
    }
    document.getElementById("jsb").innerText = riqi[0] + "年" + riqi[1] + "月" + riqi[2] + "日";
}