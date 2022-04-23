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

// var names = prompt("Enter Name : ");
// var eng = parseFloat(prompt("English Marks : "));
// var urdu = parseFloat(prompt("Urdu Marks : "));
// var phy = parseFloat(prompt("Physics Marks : "));
// var chem = parseFloat(prompt("Chemistry Marks : "));
// var comp = parseFloat(prompt("Computer Marks : "));
// var total = eng+urdu+phy+chem+comp
// document.write("<h3>" + names + " your marks are : " + total + "<h3/>")
// var per = (total/250) * 100;
// document.write("<h3>" + names + " your % is : " + per + "%" + "<h3/>")


// course registration

// var cou = parseInt(prompt("How Many Course Studied : "));
// var li = prompt("Do You Want Library Membership? ");//1500
// var sp = prompt("Do You Want Sports Membership? ");//2500
// var ca = prompt("Do You Want Canteen Membership? ");//2500
// var shs = prompt("Do You Want Shuttle Service Membership? ");//4000

// var fee = cou * 15000;
// if (li == no) {
//     var totalfee = fee + 2500 + 2500 + 4000;
// }
// else{
//     var totalfee = fee + 1500 + 2500 + 2500 + 4000;
// }

// if (sp == no) {
//     var totalfee = fee + 1500 + 2500 + 4000;
// }
// else{
//     var totalfee = fee + 1500 + 2500 + 2500 + 4000;
// }

// if (ca == no) {
//     var totalfee = fee + 1500 + 2500 + 4000;
// }
// else{
//     var totalfee = fee + 1500 + 2500 + 2500 + 4000;
// }

// if (shs == no) {
//     var totalfee = fee + 1500 + 2500 + 2500;
// }
// else{
//     var totalfee = fee + 1500 + 2500 + 2500 + 4000;
// }

// document.write("The Fee Of Your Courses Are : " + fee + "<br/>" + "<br/>" );
// document.write("Your Total Fee Is : " + totalfee + "<br/>" + "<br/>" );


var eng = parseFloat(prompt("Enter Your English Marks : "));
var urdu = parseFloat(prompt("Enter Your Urdu Marks : "));
var comp = parseFloat(prompt("Enter Your Computer Marks : "));
var chem = parseFloat(prompt("Enter Your Chemistry Marks : "));
var phy = parseFloat(prompt("Enter Your Physics Marks : "));

var totalmarks = eng + urdu + comp + chem + phy;
var percentage = (totalmarks * 100) / 500;

if (percentage >= 80) {
    document.write("You Have Got A+" + "<br/>" + "<hr/>")
}
else if (percentage >= 70){
    document.write("You Have Got A" + "<br/>" + "<hr/>")
}
else if (percentage >= 60){
    document.write("You Have Got B" + "<br/>" + "<hr/>")
}
else if (percentage >= 50){
    document.write("You Have Got C , Your FAIL" + "<br/>" + "<hr/>")
}

document.write("Your Total Marks Are : " + totalmarks + "<br/>" + "<hr/>");
document.write("Your Percentage Is : " + percentage + "<br/>" + "<hr/>");



var email = prompt("Enter Email : " );
var psw = prompt("Enter Password : " );
if (email == "oxyshibli@gmail.com" && psw == "123" ) {
    document.write("Welcome Oxy")
}
else{
    document.write("Inavalid Email Or password");
}