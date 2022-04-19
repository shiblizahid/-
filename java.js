// var r = parseFloat(prompt("Enter The Value Of r : "));
// var h = parseFloat(prompt("Enter The Value Of h : "));
// var res4 = (3.14*r)*(r+(h*h+r*r));
// document.write("<h3> The Area Of Cone Is : " + res4 + "<br/>" + "<br/>" + "<h3/>");


// var res5 = (2*3.14*r*h)+(2*3.14*r*r);
// document.write("<h3> The Area Is : " + res5 + "<br/>" + "<br/>" + "<h3/>");


// var res6 = 3.14*r*r*h;
// document.write(" <h3> The Velocity Is : " + res6 + "<br/>" + "<br/>" + "<h3/>");

// var a = parseFloat(prompt("Enter The Value Of a : "));
// var b = parseFloat(prompt("Enter The Value Of b : "));
// var res1 = (a*a*a) + (3*a*a*b) + (3*a*b*b) + (a*a*a);
// document.write("<h3> The Answere Of the Formula Is :" + res1 + "<br/>" + "<br/>" + "<h3/>");

// var a1 = parseFloat(prompt("Enter The Value Of a : "));
// var vf = parseFloat(prompt("Enter The Value Of Final Veocity : "));
// var vi = parseFloat(prompt("Enter The Value Of Initial Veocity : "));
// var res2 = (vf*vf) - (vi*vi) / (2*a1);
// document.write(" <h3> The Speed Is : " + res2 + "<br/>" + "<br/>" + "<h3/>");

// var t = parseFloat(prompt("Enter The Value Of Time : "));
// var res3 = (vi*t) + (1*a*t*t) / 2;
// document.write("<h3> The 2nd Speed Is : " + res3 + "<br/>" + "<br/>" + "<h3/>");

var names = prompt("Enter Name : ");
var eng = parseFloat(prompt("English Marks : "));
var urdu = parseFloat(prompt("Urdu Marks : "));
var phy = parseFloat(prompt("Physics Marks : "));
var chem = parseFloat(prompt("Chemistry Marks : "));
var comp = parseFloat(prompt("Computer Marks : "));
var total = eng+urdu+phy+chem+comp
document.write("<h3>" + names + " your marks are : " + total + "<h3/>")
var per = (total/250) * 100;
document.write("<h3>" + names + " your % is : " + per + "%" + "<h3/>")