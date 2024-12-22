// chapter no 6

// Question no1
// var a = 10;
// document.write("Result: <br> The value of a is: " + a + "<br>............................................<br><br>");
// document.write("The value of ++a is: " + ++a + "<br>Now the value of a is: " + a + "<br><br>");
// document.write("The value of a++ is: " + a++ + "<br>Now the value of a is: " + a + "<br><br>");
// document.write("The value of --a is: " + --a + "<br>Now the value of a is: " + a + "<br><br>");
// document.write("The value of a-- is: " + a-- + "<br>Now the value of a is: " + a + "<br><br>");

// Question no2
// var a = 2, b =1   
// var Result = --a - --b + ++b + b--; 
// document.write("a is = " + a + ":<br> b is = " + b + ":<br> The value of Result is: " + Result + "<br>............................................<br><br>")

// Question no3
// let userName = ("Please enter your name:");
// if (userName) {
//     document.write("Hello, " + userName + "! Welcome!");
// }
//  else{
//     document.write("Hello! Welcome!");
// }

// Question no5
// var a = prompt("Enter a number to show its multiplication table:");
// if (a) {
//     for (var i = 1; i <= 10; i++) {
//         document.write(a + " x " + i + " = " + a * i + "<br>");
//     }
// } else {
//         document.write("Please enter a valid number!");
//     }
    
// Question no6
// document.write("<h1>Subject Total Marks Obtained Marks Percentage</h1>");
// var sub1 = prompt("Enter first subject name:");
// var sub2 = prompt("Enter second subject name:");
// var sub3 = prompt("Enter third subject name:");
// var totalMarks = 100;
// var sub1Marks = +prompt("Enter first subject marks:");
// var sub2Marks = +prompt("Enter second subject marks:");
// var sub3Marks = +prompt("Enter third subject marks:");
// var totalObtMarks = sub1Marks + sub2Marks + sub3Marks;
// var percentage = (totalObtMarks / (totalMarks * 2)) * 100;
// var percentages = (sub1 / (totalMarks * 2)) * 100;
// var percentagess = (sub2 / (totalMarks * 2)) * 100;
// var percentagesss = (sub3 / (totalMarks * 2)) * 100;
// document.write( sub1 + "---" +totalMarks+ "---" +sub1Marks+ "---" +percentages+ "<br> " + sub2 + "---" +totalMarks+ "---" +sub2Marks+ "---" +percentagess+ "<br>" + sub3 + "---" +totalMarks+ "---" +sub3Marks+ "---" +percentagesss+ "<br>Total Marks: " + totalMarks + "<br>Obtained Marks: " + totalObtMarks + "<br>Percentage: " + percentage.toFixed(2) + "%");
