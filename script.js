function $(a) {
    if (document.querySelectorAll(a).length <= 1) return document.querySelector(a);
    else return document.querySelectorAll(a);
}

var mmm = 0, num = $("#t"), jgl = false, i, mhd = false, ivd = false, hst = "", hex = false, prg = false;

function Int(intv) {
    if (intv > 0) return Math.floor(intv);
    else if (intv < 0) return Math.ceil(intv);
    else return 0;
}

var eva = (a) => Function("'use strict'; return (" + a + ");")(0);
$("#select2").innerHTML = $("#select1").innerHTML;

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
            if (event.shiftKey) calCulate("%");
            else calCulate("5");
            break;
        case 57:
            if (event.shiftKey) calCulate("(");
            else calCulate("9");
            break;
        case 48:
            if (event.shiftKey) calCulate(")");
            else calCulate("0");
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
            if ($("#tjx").classList.contains("sld")) calCulate("Add");
            else calCulate("=");
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
            if (mhd) calCulate(">");
            break;
        case 39:
            if (!mhd) calCulate(">");
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
        if ($("#prv").innerHTML.indexOf(";") != -1) throw new Error("");
    } catch (err) {
        $("#prv").innerHTML = "错误";
    }
}

function chsld() {
    for (var y of $("input")) {
        if (y.type == "button") y.style.display = "inline";
    }
    if (!arguments[0]) {
        if ($("#sci").classList.contains("sld")) {
            $("#sci").classList.remove("sld");
            $("#tjx").classList.remove("sld");
            $("#pro").classList.add("sld");
        } else if ($("#pro").classList.contains("sld")) {
            $("#pro").classList.remove("sld");
            $("#sci").classList.remove("sld");
            $("#tjx").classList.add("sld");
        } else {
            $("#sci").classList.add("sld");
            $("#pro").classList.remove("sld");
            $("#tjx").classList.remove("sld");
        }
    } else {
        for (var t of $(".b")) {
            t.classList.remove("sld");
        }
        arguments[0].classList.add("sld");
    }
    if ($("#pro").classList.contains("sld")) {
        if ($("#hex").classList.contains("ivt")) num.value = Number(num.value).toString(16);
        else if ($("#oct").classList.contains("ivt")) num.value = Number(num.value).toString(8);
        else if ($("#bin").classList.contains("ivt")) num.value = Number(num.value).toString(2);
        $("#pre").style.display = "block";
        $("#dot").value = "Mod";
        prg = true;
        for (i of $(".ppl")) {
            i.style.display = "inline";
        }
        $("#equ").value = "=";
        $("#tjb").style.display = "none";
        $("#pec").style.display = "none";
        $("#tjb").style.display = "none";
        $("#tle").style.display = "none";
        $("#cng").style.display = "inline-block";
        $("#cus").style.display = "inline-block";
        $("#prv").style.display = "block";
    } else if ($("#tjx").classList.contains("sld")) {
        if ($("#hex").classList.contains("ivt")) num.value = parseInt(num.value, 16);
        else if ($("#oct").classList.contains("ivt")) num.value = parseInt(num.value, 8);
        else if ($("#bin").classList.contains("ivt")) num.value = parseInt(num.value, 2);
        $("#pre").style.display = "none";
        $("#dot").value = ".";
        prg = false;
        for (var p of $(".ppl")) {
            p.style.display = "none";
        }
        for (var q = 0; q < 8; q++) {
            $("#s" + ["2", "3", "4", "5", "6", "7", "8", "9"][q]).style.display = "inline";
        }
        $("#equ").value = "Add";
        $("#tjb").style.display = "block";
        $("#tle").style.display = "block";
        $("#pec").style.display = "inline-block";
        $("#pec").value = "CAD";
        $("#cng").style.display = "none";
        $("#cus").style.display = "none";
        $("#prv").style.display = "none";
    } else {
        for (var v of $(".ppl")) {
            v.style.display = "none";
        }
        $("#equ").value = "=";
        $("#tjb").style.display = "none";
        $("#pec").style.display = "inline-block";
        $("#pec").value = "%";
        $("#tjb").style.display = "none";
        $("#tle").style.display = "none";
        $("#cng").style.display = "inline-block";
        $("#cus").style.display = "inline-block";
        $("#prv").style.display = "block";
        $("#pre").style.display = "none";
    }
    if ($("#rq").classList.contains("sld")) {
        $(".hie")[0].style.display = "block";
        $(".hie")[1].style.display = "none";
        for (var y of $("input")) {
            if (y.type == "button") y.style.display = "none";
        }
    } else if (!$("#sci").classList.contains("sld") && !$("#pro").classList.contains("sld") && !$("#tjx").classList
        .contains("sld")) {
        $(".hie")[1].style.display = "block";
        $(".hie")[0].style.display = "none";
    }
    var clst = ["dwa", "len", "wei", "tem", "ene", "sqr", "spe", "tim", "lyu", "bit", "yal", "dee"];
    for (var b of clst) {
        if (arguments[0] && arguments[0].classList.contains(b)) {
            for (var w of $("select option")) {
                w.style.display = "none";
                if (w.classList.contains(b)) w.style.display = "block";
            }
        }
    }
    calCulate(">");
    calCulate(">");
}

var frac = (frv) => frv - Int(frv);
var dms = (dmsv) => Int(dmsv) + Int(frac(dmsv) * 60) / 100 + (frac(dmsv) - min * 100 / 60) * 3600 / 10000;

function fact(fav) {
    fav = Int(fav);
    var fcr = 1;
    for (var fai = 1; fai <= fav; fai++) {
        fcr *= fai;
    }
    return fcr;
}

var epow = (epv) => Math.E ** epv, sin = (a) => Math.sin(a);
var cos = (a) => Math.cos(a), tan = (a) => Math.tan(a);
var sinh = (a) => Math.sinh(a), cosh = (a) => Math.cosh(a);
var tanh = (a) => Math.tanh(a), asin = (a) => Math.asin(a);
var acos = (a) => Math.acos(a), atan = (a) => Math.atan(a);
var asinh = (a) => Math.asinh(a), acosh = (a) => Math.acosh(a);
var atanh = (a) => Math.atanh(a);

function degrees(dgv) {
    dgv = dgv.toString();
    if (dgv.slice(dgv.indexOf(".") + 1, -1).length == 1) dgv = dgv + "000";
    else if (dgv.slice(dgv.indexOf(".") + 1, -1).length == 3) dgv += "0";
    else if (dgv.indexOf(".") == -1) dgv += ".0000";
    return Int(Number(dgv)) + (Number(dgv.slice(dgv.indexOf(".") + 1, dgv.indexOf(".") + 3)) * 3.6) + (Number(dgv
        .substr(dgv.indexOf(".") + 3).split("").splice(2, 0, ".").join("")) * 0.036);
}

function ln(lnv) {
    var fwa = [-800, 800];
    if (lnv < 1) fwa[1] = 0;
    else if (lnv > 1) fwa[0] = 0;
    else return 0;
    while ((fwa[1] - fwa[0]) > 0.0000000001) {
        if (epow((fwa[0] + fwa[1]) / 2) < lnv) fwa[0] = (fwa[0] + fwa[1]) / 2;
        else if (epow((fwa[0] + fwa[1]) / 2) > lnv) fwa[1] = (fwa[0] + fwa[1]) / 2;
        else return (fwa[0] + fwa[1]) / 2;
    }
    return (fwa[1] + fwa[0]) / 2;
}

function ism() {
    if (mmm == 0) $("#mxs").innerHTML = "";
    else $("#mxs").innerHTML = "M";
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
    for (tpl in spl) {
        spl[tpl] = parseInt(spl[tpl], c);
    }
    var calcval = "";
    tpl = 0;
    if (num.value[0] == "(" || ((num.value[0] == "+" || num.value[0] == "-") && num.value[1] == "(")) spl.splice(0, 0, "");
    while (tpl <= fuh.length - 1) {
        calcval = calcval + spl[tpl] + fuh[tpl];
        tpl++;
    }
    if (spl[tpl]) calcval += spl[tpl];
    return calcval;
}

function dyh(typ) {
    if (typ) hst += num.value + "=";
    var calcval = num.value.replace(/π/g, "Math.PI").replace(/\^/g, "**").replace(/log\(/g, "Math.log(").replace(/e\*\*/,
        "Math.E**");
    calcval = calcval.replace(/\+√\(/g, "+Math.sqrt(").replace(/\-√\(/g, "-Math.sqrt(").replace(/\×√\(/g, "×Math.sqrt(")
        .replace(/\÷√\(/g, "÷Math.sqrt(");
    calcval = calcval.replace(/Xor/g, "^").replace(/And/g, "&").replace(/Or/g, "|").replace(/Lsh/g, "<<").replace(
        /Rsh/g, ">>>");
    calcval = calcval.replace(/√/g, "√@").replace(/\+/g, "@+@").replace(/\-/g, "@-@").replace(/\×/g, "@×@").replace(
        /\÷/g, "@÷@").split("@");
    if (calcval[0] == "√") calcval[0] = "Math.sqrt";
    for (i = 0; i < calcval.length; i++) {
        if (calcval[i].indexOf("√") != -1) {
            calcval[i + 1] = calcval[i + 1].split("").slice(0, -1).join("") + ",1/" + calcval[i].replace("√", "") + ")";
            calcval[i] = "Math.pow";
        }
    }
    calcval = calcval.join("");
    calcval = calcval.replace(/\+/g, "@+@").replace(/\-/g, "@-@").replace(/\×/g, "@*@").replace(/\÷/g, "@/@").split("@");
    for (var z of calcval) {
        if (z.indexOf("%") != -1) z = Number(z.replace("%", "")) / 100;
    }
    calcval = calcval.join("").replace(/Mod/g, "%");
    if (typ) {
        if (prg) {
            if ($("#hex").classList.contains("ivt")) {
                calcval = cfh(calcval.split(/[^0-9abcdef]+/g), calcval.split(/[0-9abcdef]+/g), 16);
                num.value = eva(calcval).toString(16);
            } else if ($("#oct").classList.contains("ivt")) {
                calcval = cfh(calcval.split(/[^01234567]+/g), calcval.split(/[01234567]+/g), 8);
                num.value = eva(calcval).toString(8);
            } else if ($("#bin").classList.contains("ivt")) {
                calcval = cfh(calcval.split(/[^01]+/g), calcval.split(/[01]+/g), 2);
                num.value = eva(calcval).toString(2);
            } else num.value = eva(calcval);
        } else num.value = eva(calcval);
        hst += eva(calcval) + ";";
    } else {
        if (prg) {
            if ($("#hex").classList.contains("ivt")) {
                calcval = cfh(calcval.split(/[^0-9abcdef]+/g), calcval.split(/[0-9abcdef]+/g), 16);
                $("#prv").innerText = eva(calcval).toString(16);
            } else if ($("#oct").classList.contains("ivt")) {
                calcval = cfh(calcval.split(/[^01234567]+/g), calcval.split(/[01234567]+/g), 8);
                $("#prv").innerText = eva(calcval).toString(8)
            } else if ($("#bin").classList.contains("ivt")) {
                calcval = cfh(calcval.split(/[^01]+/g), calcval.split(/[01]+/g), 2);
                $("#prv").innerText = eva(calcval).toString(2);
            } else $("#prv").innerText = eva(calcval);
            var tbi = "";
            tbi = Number(eva(calcval)).toString(2);
            var lsn;
            if ($("#b1").classList.contains("ivt")) lsn = 32;
            else if ($("#b2").classList.contains("ivt")) lsn = 16;
            else lsn = 8;
            if (tbi.length > lsn) num.value = num.value.slice(0, -1);
            while (tbi.length < lsn) {
                tbi = "0" + tbi;
            }
            if (tbi.indexOf("-") != -1) {
                tbi = tbi.replace("-", "0");
                tbi = tbi.split("");
                for (i = 0; i <= (lsn - 1); i++) {
                    if (tbi[i] == "0") tbi[i] = "1";
                    else tbi[i] = "0";
                }
                tbi = (parseInt(tbi.join(""), 2) + 1).toString(2);
            }
            for (i = (32 - lsn); i <= 31; i++) {
                $("#bi" + (i + 1)).innerText = tbi[i - (32 - lsn)];
            }
        } else $("#prv").innerHTML = eva(calcval);
    }
    hsp.innerHTML = "";
    hst = hst.split(";").slice(0, hst.split(";").length - 1);
    for (i of hst) {
        $("#hsp").innerHTML = $("#hsp").innerHTML +
            "<p onclick='document.getElementById(`t`).value=`" + i + "`.split(`=`)[1];dyh(false)'>" + i + "</p><hr />";
    }
    $("#hsp").innerHTML = $("#hsp").innerHTML + "<p onclick='hst=``;document.getElementById(`hsp`).innerHTML=`<p>清空历史</p>`'>清空历史</p>";
    hst = hst.join(";") + ";";
}

function mcaozuo() {
    var calcval = num.value.replace(/π/g, "Math.PI").replace(/\^/g, "**").replace(/log\(/g, "Math.log(").replace(/e\*\*/, "Math.E**");
    calcval = calcval.replace(/\+√\(/g, "+Math.sqrt(").replace(/\-√\(/g, "-Math.sqrt(").replace(/\×√\(/g, "×Math.sqrt(").replace(/\÷√\(/g,
        "÷Math.sqrt(");
    calcval = calcval.replace(/Xor/g, "^").replace(/And/g, "&").replace(/Or/g, "|")
    calcval = calcval.replace(/√/g, "√@").replace(/\+/g, "@+@").replace(/\-/g, "@-@").replace(/\×/g, "@×@").replace(/\÷/g, "@÷@").split("@");
    if (calcval[0] == "√") calcval[0] = "Math.sqrt";
    for (i = 0; i < calcval.length; i++) {
        if (calcval[i].indexOf("√") != -1) {
            calcval[i + 1] = calcval[i + 1].split("").slice(0, -1).join("") + ",1/" + calcval[i].replace("√", "") + ")";
            calcval[i] = "Math.pow";
        }
    }
    calcval = calcval.join("");
    calcval = calcval.replace(/\+/g, "@+@").replace(/\-/g, "@-@").replace(/\×/g, "@*@").replace(/\÷/g, "@/@").split("@");
    for (i = 0; i < calcval.length; i++) {
        if (calcval[i].indexOf("%") != -1) calcval[i] = Number(calcval[i].replace("%", "")) / 100;
    }
    calcval = calcval.join("").replace(/Mod/g, "%");
    return calcval;
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
            var geb;
            if (prg) geb = "pr";
            else if ($("#sci").classList.contains("sld")) geb = "gj";
            else geb = "tj";
            for (i = 0; i < $(".pr").length; i++) {
                $(".pr")[i].style.display = "none";
            }
            for (i = 0; i < $(".gj").length; i++) $(".gj")[i].style.display = "none";
            for (i = 0; i < $(".tj").length; i++) $(".tj")[i].style.display = "none";
            for (i = 0; i < document.getElementsByClassName(geb).length; i++) {
                if (!mhd) document.getElementsByClassName(geb)[i].style.display = "inline";
                else document.getElementsByClassName(geb)[i].style.display = "none";
            }
            if (mhd) {
                $("#exp").className = "";
                mhd = false;
            } else {
                $("#exp").className = "equ";
                mhd = true;
            }
            break;
        case "AC":
            num.value = "";
            break;
        case "M+":
            var calcval = mcaozuo();
            if (!isNaN(eva(calcval))) {
                mmm += Number(eva(calcval));
                ism();
            }
            $("#jyi").innerHTML = "<p>" + mmm + "</p><button onclick='calCulate(\"MC\");'>MC</button><button onclick='calCulate(\"M+\");'>M+</button>"
                + "<button onclick='calCulate(\"M-\");'>M-</button>";
            break;
        case "MR":
            num.value += mmm.toString();
            break;
        case "M-":
            var calcval = mcaozuo();
            if (!isNaN(eva(calcval))) {
                mmm -= Number(eva(calcval));
                ism();
            }
            $("#jyi").innerHTML = "<p>" + mmm + "</p><button onclick='calCulate(\"MC\");'>MC</button><button onclick='calCulate(\"M+\");'>M+</button>"
                + "<button onclick='calCulate(\"M-\");'>M-</button>";
            break;
        case "MC":
            mmm = 0;
            ism();
            $("#jyi").innerHTML = "<p>" + mmm + "</p><button onclick='calCulate(\"MC\");'>MC</button><button onclick='calCulate(\"M+\");'>M+</button>"
                + "<button onclick='calCulate(\"M-\");'>M-</button>";
            break;
        case "+":
        case "-":
        case "×":
        case "÷":
            if (!jgl) {
                num.value = num.value + val;
                jgl = true;
            } else num.value = num.value.slice(0, -1) + val;
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
                if (num.value.indexOf(".") == -1) num.value += ".";
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
                $("#inb").style.color = "black";
                $("#inb").style.backgroundColor = "white";
                $("#lnb").value = "ln";
                $("#sinb").value = "sin";
                $("#cosb").value = "cos";
                $("#tanb").value = "tan";
                $("#sinhb").value = "sinh";
                $("#coshb").value = "cosh";
                $("#tanhb").value = "tanh";
                $("#intb").value = "Int";
                $("#dmsb").value = "dms";
                $("#pib").value = "pi";
                ivd = false;
            } else {
                $("#inb").style.color = "white";
                $("#inb").style.backgroundColor = "black";
                $("#lnb").value = "e^x";
                $("#sinb").value = "sin^-1";
                $("#cosb").value = "cos^-1";
                $("#tanb").value = "tan^-1";
                $("#sinhb").value = "sinh^-1";
                $("#coshb").value = "cosh^-1";
                $("#tanhb").value = "tanh^-1";
                $("#intb").value = "Frac";
                $("#dmsb").value = "deg";
                $("#pib").value = "2*π";
                ivd = true;
            }
            break;
        case "RoL":
            dyh(false);
            var lsn;
            if ($("#b1").classList.contains("ivt")) lsn = 32;
            else if ($("#b2").classList.contains("ivt")) lsn = 16;
            else lsn = 8;
            if ($("#dec").classList.contains("ivt")) {
                if ((Number(num.value) << 1).toString(2).length > lsn) {
                    num.value = parseInt((Number(num.value) << 1).toString(2).slice((Number(num.value) << 1).toString(2).length - lsn,
                        (Number(num.value) << 1).toString(2).length), 2);
                } else num.value = (Number(num.value) << 1);
            } else if ($("#hex").classList.contains("ivt")) {
                if ((parseInt(num.value, 16) << 1).toString(2).length > lsn) {
                    num.value = parseInt((parseInt(num.value, 16) << 1).toString(2).slice((parseInt(num.value, 16) << 1).toString(2).length - lsn,
                        (parseInt(num.value, 16) << 1).toString(2).length), 2).toString(16);
                } else num.value = (parseInt(num.value, 16) << 1).toString(16);
            } else if ($("#oct").classList.contains("ivt")) {
                if ((parseInt(num.value, 8) << 1).toString(2).length > lsn) {
                    num.value = parseInt((parseInt(num.value, 8) << 1).toString(2).slice((parseInt(num.value, 8) << 1).toString(2).length - lsn,
                        (parseInt(num.value, 8) << 1).toString(2).length), 2).toString(8);
                } else num.value = (parseInt(num.value, 8) << 1).toString(8);
            } else {
                if ((parseInt(num.value, 2) << 1).toString(2).length > lsn) {
                    num.value = parseInt((parseInt(num.value, 2) << 1).toString(2).slice((parseInt(num.value, 2) << 1).toString(2).length - lsn,
                        (parseInt(num.value, 2) << 1).toString(2).length), 2).toString(2);
                } else num.value = (parseInt(num.value, 2) << 1).toString(2);
            }
            break;
        case "RoR":
            dyh(false);
            if ($("#dec").classList.contains("ivt")) num.value = Number(num.value) >>> 1;
            else if ($("#hex").classList.contains("ivt")) num.value = (parseInt(num.value, 16) >>> 1).toString(16);
            else if ($("#oct").classList.contains("ivt")) num.value = (parseInt(num.value, 8) >>> 1).toString(8);
            else num.value = (parseInt(num.value, 2) >>> 1).toString(2);
            break;
        case "Not":
            dyh(false);
            if ($("#dec").classList.contains("ivt")) num.value = ~Number(num.value);
            else if ($("#hex").classList.contains("ivt")) num.value = (~parseInt(num.value, 16)).toString(16);
            else if ($("#oct").classList.contains("ivt")) num.value = (~parseInt(num.value, 8)).toString(8);
            else num.value = (~parseInt(num.value, 2)).toString(2);
            break;
        case "Add":
            $("#tjb").innerHTML += ("<span contenteditable='true'>" + num.value + "</span><hr />");
            $("#tle").innerHTML = "计数=" + ($("#tjb").innerHTML.split("<hr>").length - 1);
            num.value = "";
            break;
        case "∑x":
            var sxm = 0;
            for (var sxi in $("#tjb").innerHTML.split("<hr>")) {
                if ($("#tjb").innerHTML.split("<hr>")[sxi] != "") sxm = sxm + Number($("#tjb").innerText.split("\n")[sxi]);
            }
            num.value = sxm;
            break;
        case "∑x^2":
            var sxm = 0;
            for (var sxi in $("#tjb").innerHTML.split("<hr>")) {
                if ($("#tjb").innerHTML.split("<hr>")[sxi] != "") sxm = sxm + Number($("#tjb").innerText.split("\n")[sxi]) ** 2;
            }
            num.value = sxm;
            break;
        case "x":
            var sxm = 0;
            for (var sxi in $("#tjb").innerHTML.split("<hr>")) {
                if ($("#tjb").innerHTML.split("<hr>")[sxi] != "") {
                    sxm = sxm + Number($("#tjb").innerText.split("\n")[sxi]) / ($("#tjb").innerHTML.split("<hr>").length - 1);
                }
            }
            num.value = sxm;
            break;
        case "x^2":
            var sxm = 0;
            for (var sxi in $("#tjb").innerHTML.split("<hr>")) {
                if ($("#tjb").innerHTML.split("<hr>")[sxi] != "") {
                    sxm = sxm + Number($("#tjb").innerText.split("\n")[sxi]) ** 2 / ($("#tjb").innerHTML.split("<hr>").length - 1);
                }
            }
            num.value = sxm;
            break;
        case "σn":
            var sxm = 0;
            for (var sxi in $("#tjb").innerHTML.split("<hr>")) {
                if ($("#tjb").innerHTML.split("<hr>")[sxi] != "") sxm = sxm + Number($("#tjb").innerText.split("\n")[sxi]) ** 2;
            }
            var sxn = 0;
            for (var sxi in $("#tjb").innerHTML.split("<hr>")) {
                if ($("#tjb").innerHTML.split("<hr>")[sxi] != "") sxn = sxn + Number($("#tjb").innerText.split("\n")[sxi]);
            }
            num.value = Math.sqrt(sxm / ($("#tjb").innerHTML.split("<hr>").length - 1) - (sxn ** 2) /
                ($("#tjb").innerHTML.split("<hr>").length - 1) ** 2);
            break;
        case "σn-1":
            var sxm = 0;
            for (var sxi in $("#tjb").innerHTML.split("<hr>")) {
                if ($("#tjb").innerHTML.split("<hr>")[sxi] != "") {
                    sxm = sxm + Number($("#tjb").innerText.split("\n")[sxi]) ** 2;
                }
            }
            var sxn = 0;
            for (var sxi in $("#tjb").innerHTML.split("<hr>")) {
                if ($("#tjb").innerHTML.split("<hr>")[sxi] != "") {
                    sxn = sxn + Number($("#tjb").innerText.split("\n")[sxi]);
                }
            }
            num.value = Math.sqrt(sxm / ($("#tjb").innerHTML.split("<hr>").length - 2) - (sxn ** 2) /
                ($("#tjb").innerHTML.split("<hr>").length - 2) ** 2);
            break;
        case "CAD":
            $("#tjb").innerHTML = "";
            $("#tle").innerText = "计数=0"
            break;
        default:
            num.value = num.value + val;
            jgl = false;
            break;
    }
    try {
        dyh(false);
        if ($("#prv").innerHTML.indexOf(";") != -1) throw new Error("");
    } catch (err) {
        $("#prv").innerHTML = "错误";
    }
}

function ch(cjz) {
    if (prg) {
        if (cjz == "dec") {
            dyh(false);
            num.value = parseInt($("#pre").innerText.replace(/\s/g, ""), 2);
            $("#dec").classList.add("ivt");
            $("#hex").classList.remove("ivt");
            $("#oct").classList.remove("ivt");
            $("#bin").classList.remove("ivt");
            for (i = 2; i <= 9; i++) $("#s" + i).style.display = "inline-block";
            for (i = 0; i < ["a", "b", "c", "d", "e", "f"].length; i++) {
                $("#s" + ["a", "b", "c", "d", "e", "f"][i]).style.display = "none";
            }
        } else if (cjz == "hex") {
            dyh(false);
            num.value = parseInt($("#pre").innerText.replace(/\s/g, ""), 2).toString(16);
            $("#hex").classList.add("ivt");
            $("#dec").classList.remove("ivt");
            $("#oct").classList.remove("ivt");
            $("#bin").classList.remove("ivt");
            for (i = 0; i < 14; i++) {
                $("#s" + ["2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"][i]).style.display =
                    "inline-block";
            }
        } else if (cjz == "oct") {
            dyh(false);
            num.value = parseInt($("#pre").innerText.replace(/\s/g, ""), 2).toString(8);
            $("#oct").classList.add("ivt");
            $("#hex").classList.remove("ivt");
            $("#dec").classList.remove("ivt");
            $("#bin").classList.remove("ivt");
            for (i = 2; i <= 7; i++) $("#s" + i).style.display = "inline-block";
            for (i = 0; i < ["8", "9", "a", "b", "c", "d", "e", "f"].length; i++) {
                $("#s" + ["8", "9", "a", "b", "c", "d", "e", "f"][i]).style.display = "none";
            }
        } else if (cjz == "bin") {
            dyh(false);
            num.value = parseInt($("#pre").innerText.replace(/\s/g, ""), 2).toString(2);
            $("#bin").classList.add("ivt");
            $("#hex").classList.remove("ivt");
            $("#oct").classList.remove("ivt");
            $("#dec").classList.remove("ivt");
            for (i = 0; i < 14; i++) {
                $("#s" + ["2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"][i])
                    .style.display = "none";
            }
        } else if (cjz == "b1") {
            $("#b1").classList.add("ivt");
            $("#b2").classList.remove("ivt");
            $("#b3").classList.remove("ivt");
            $("#fb").style.display = "inline-block";
            $("#fb2").style.display = "inline-block";
        } else if (cjz == "b2") {
            $("#b2").classList.add("ivt");
            $("#b1").classList.remove("ivt");
            $("#b3").classList.remove("ivt");
            $("#fb").style.display = "none";
            $("#fb2").style.display = "inline-block";
        } else {
            $("#b3").classList.add("ivt");
            $("#b2").classList.remove("ivt");
            $("#b1").classList.remove("ivt");
            $("#fb").style.display = "none";
            $("#fb2").style.display = "none";
        }
    }
}

function cgebi(civ) {
    if ($("#bi" + civ).innerText == "0") $("#bi" + civ).innerText = "1";
    else $("#bi" + civ).innerText = "0";
    if ($("#hex").classList.contains("ivt")) {
        num.value = parseInt($("#bis").innerText.replace(/\s/g, ""), 2).toString(16);
    } else if ($("#oct").classList.contains("ivt")) {
        num.value = parseInt($("#bis").innerText.replace(/\s/g, ""), 2).toString(8);
    } else if ($("#bin").classList.contains("ivt")) num.value = parseInt($("#bis").innerText.replace(/\s/g, ""), 2).toString(2);
    else {
        num.value = parseInt($("#bis").innerText.replace(/\s/g, ""), 2);
        if ($("#bis").innerText.replace(/\s/g, "")[0] == "1") {
            var tbi = $("#bis").innerText.replace(/\s/g, "");
            tbi = (parseInt(tbi, 2) - 1).toString(2);
            tbi = tbi.replace("1", "-");
            tbi = tbi.split("");
            for (i = 1; i <= 31; i++) {
                if (tbi[i] == "0") tbi[i] = "1";
                else tbi[i] = "0";
            }
            tbi = tbi.join("");
            num.value = parseInt(tbi, 2);
        }
    }
}

function set(a) {
    a.classList.add("set");
    if (a.id == "hip") {
        $("#jbt").classList.remove("set");
        $("#hsp").style.display = "block";
        $("#jyi").style.display = "none";
    } else {
        $("#hip").classList.remove("set");
        $("#hsp").style.display = "none";
        $("#jyi").style.display = "block";
    }
}

function rqj(a) {
    $(".jsa")[a].style.display = "block";
    if (a == 0) $(".jsa")[1].style.display = "none";
    else $(".jsa")[0].style.display = "none";
}

function cck() {
    var zt = (new Date($("#startDate").value) - new Date($("#endDate").value)) / 86400000;
    if ((new Date($("#startDate").value) - new Date($("#endDate").value)) > 0) $("#czh").innerText = zt + "天";
    else $("#czh").innerText = -zt + "天";
    var riqi = $("#startDate").value.split("-");
    for (let v = 0; v < riqi.length; v++) riqi[v] = Number(riqi[v]);
    var jia = [Number($("#year").value), Number($("#month").value), Number($("#day").value)];
    var ping = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var run = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var nian;
    if ($("#ad").checked) {
        riqi[0] += jia[0];
        riqi[1] += jia[1];
        riqi[2] += jia[2];
        do {
            riqi[0] += (riqi[1] - riqi[1] % 12) / 12;
            riqi[1] = riqi[1] % 12;
            if (!riqi[1]) riqi[1] = 12;
            if ((riqi[0] % 4 == 0 && riqi[0] % 100 != 0) || riqi[0] % 400 == 0) nian = run;
            else nian = ping;
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
        while (riqi[2] < 0 || riqi[1] < 0 || riqi[0] < 0) {
            if ((riqi[0] % 4 == 0 && riqi[0] % 100 != 0) || riqi[0] % 400 == 0) nian = run;
            else nian = ping;
            if (riqi[1] <= 0) {
                riqi[0] += ((riqi[1] - riqi[1] % 12) / 12) - 1;
                riqi[1] = riqi[1] % 12 + 12;
            }
            if (riqi[2] <= 0) {
                riqi[2] += nian[riqi[1] - 1];
                riqi[1]--;
            }
            if (riqi[1] <= 0) {
                riqi[0] += ((riqi[1] - riqi[1] % 12) / 12) - 1;
                riqi[1] = riqi[1] % 12 + 12;
            }
        }
    }
    $("#jsb").innerText = riqi[0] + "年" + riqi[1] + "月" + riqi[2] + "日";
}

function fo(v) {
    for (var b of $(".hie span")) b.classList.remove("foc");
    v.classList.add("foc");
}