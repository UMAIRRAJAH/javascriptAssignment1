// Chapter:1

// 1. Write a script to greet your website visitor using JS alert box.
alert("Welcome to our website!");

// 2. Write a script to display following message on your webpage:
alert("Eror! please enter your password.")

// 3.Write a script to display following message on your webpage: (Hint : Use line break)
alert("Welcome To JS Land......\n happy coding!");

//  4.Write a script to display following messages in sequence:
alert("Welcome To JS Land...... ");

// 5.Generate the following message through browser’s developer console:
const a = "hello i can run js through my web browser console";
console.log(alert(a));

// 6.Make use of alerts in your new/existing HTML & CSS project.
 function showAlert() {
      var myText = "This can be whatever text you like!";
      alert(myText);
}
// 7. Practice placement of <script></script> element infollowing sections of your project in exercise 6:

 //You can see this work on the HTML page
// chapter :2

// 1.Declare a variable called username.
var username;
document.write(username);

//2.Declare a variable called myName & assign to it a string that represents your Full Name
var myName = "Muhammad Umair Asghar";
document.write(myName);

//  3.           Write script to a) Declare a JS variable, titled message. b) Assign “Hello World” to variable message c) Display the message in alert box.
var message;
message = "Hello World";
alert(message);

//4.Write a script to save student’s bio data in JS variables and show the data in alert boxes.
var studentname = prompt("Enter your Name")
alert(studentname);
var age = "I am 15 Years old"
alert(age);
var studentstudies = "certified Mobile Application Development";
alert(studentstudies);

//5.Write a script to display the following alert using one JS variable:
var b = "PIZZA\n PIZZ  \n PIZ  \n PI \n P "
alert(b);

//6.Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)
var email = "example@example.com";
alert("My email addres is" + " " + email);

//7.Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:
var a = "A smarter way to learn JavaScript";
alert("I am Trying to learn that" + a);

// 8.Store following string in a variable and show in alert and browser through JS “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”
var a = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert(a);


// chapter:3

//   1.          Declare a variable called age & assign to it your age. Show your age in an alert box.

var age = "15";
alert("I am" + " " + age + " " + "years old");

// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.
var N = prompt("please enter your times");
document.write("You have visited this site " + N + " times.")

//  3.         Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
var a = 1999;
document.write("my birth year is " + " " + a + "<br>");
document.write("data type of my declared variable is number");

//  4.           A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: a. Visitor’s name b. Product title c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
var username = prompt("Enter your username");
var product = prompt("Enter the product you want to buy");
var quantity = prompt("Please enter the quantity you wish");
document.write("<strong>" + username + "</strong>" + " " + "order" + " " + quantity + " " + product + " " + "on XYZ Clothing store");


// chapter 4

// 1.Declare 3 variables in one statement
var $firstname;
var fist_name;
var firstName;

// 2. Declare 5 legal & 5 illegal variable names. legal variables:
var My_variable;
var $my_variable;
var _my_variable;
var My_variable_example;
var myVariableExample

//illegal variable:
// var ++my_variable;
// var % my_variable;
// var #my_varibale;
// var ~my_variable;
// var 1my_variable;
// var @my_variable

//    3.  . Display this in your browser     a) A heading stating “Rules for naming JS variables”     b) Variable names can only contain ______, ______,     ______ and ______.      For example $my_1stVariable      c) Variables must begin with a ______, ______ or      _____. For example $name, _name or name     d) Variable names are case _________      e) Variable names should not be JS
document.write("<h1>" + "Rules for naming JS variables" + "</h1>")
document.write(" Variable names can only contain  numbers, ,dollar ,signs and underscores . For example $my_1stVariable<br>")
document.write("Variables must begin with a $my_variable, My_variableor myVariableExample . For example $name, _name or name <br>")
document.write("Variable names are case sensitive.<br>");
document.write("Variable names should not be JS Keywords.<br>");

// Chapter 5

//      1.       Write a program that take two numbers & add them in a new variable. Show the result in your browser.
var a = 3;
var b = 5;
var c = a + b;
document.write("Sum of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c);

// 2. Repeat task1 for subtraction, multiplication, division & modulus.
var a = 3;
var b = 5;
var c = a + b;
document.write("Addition  of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c + "<br>");
var a = 8;
var b = 5;
var c = a - b;
document.write("Substraction of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c + "<br>");
var a = 3;
var b = 5;
var c = a * b;
document.write("Multiplication of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c + "<br>");
var a = 9;
var b = 3;
var c = a / b;
document.write("Division  of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c + "<br>");
var a = 7;
var b = 3;
var c = a % b;
document.write("Remainder of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c);

//    3.         Do the following using JS Mathematic Expressionsa. Declare a variable. b. Show the value of variable in your browser like “Value after variable declaration is: ??”. c. Initialize the variable with some number.d. Show the value of variable in your browser like “Initial value: 5”. e. Increment the variable. f. Show the value of variable in your browser like “Value after increment is: 6”. g. Add 7 to the variable. h. Show the value of variable in your browser like “Value after addition is: 13”. i. Decrement the variable. j. Show the value of variable in your browser like “Value after decrement is: 12”. k. Show the remainder after dividing the variable’s value by 3. l. Output : “The remainder is : 0”.
var a;
document.write("Value after variable declaration is" + " " + a + "<br>");

a = 5;
document.write("Initial value :" + " " + a + "<br>");
a = a + 1;

document.write("Value after increment is:" + " " + a + "<br>");
a = a + 7;

document.write("Value after addition is :" + " " + a + "<br>");
a = a - 1;
document.write("Value after decrement is :" + " " + a + "<br>");
var b = a % 3;
document.write("The remainder is:" + " " + b);


//      4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:

var a = 5;
var b = 600;
document.write("Total cost to buy " + a + " tickets to a movie is " + a * b + " PKR");

//     5.        Write a script to display multiplication table of any number in your browser. E.g document.write("Table of 4 <br>");
var a = 4;
var b;
for (b = 1; b <= 10; b++) {
      var c = a * b;
      document.write(a + "x" + b + "=" + c + "<br>");
}

//       6.      The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. a. Store a Celsius temperature into a variable. b. Convert it to Fahrenheit & output “NNoC is NNoF”. c. Now store a Fahrenheit temperature into a variable. d. Convert it to Celsius & output “NNoF is NNoC”.
var c = 25;
var f = 70;
var a = (f - 32) * 5 / 9;
var b = (c * 9 / 5) + 32;
document.write(c + "<sup>0</sup>C is" + " " + b + "<sup>0</sup>F" + "<br>");
document.write(f + "<sup>0</sup>F is" + " " + a + "<sup>0</sup>C");

//         7.    Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables. a. Price of item 1 b. Price of item 2 c. Ordered quantity of item 1 d. Ordered Quantity of item 2 e. Shipping charges Compute the total cost & show the receipt in your browser.
var p1 = 650;
var p2 = 100;
var i1 = prompt("Enter Quaintity of Item 1 you want to buy");
var i2 = prompt("Enter quantity of item 2 you want to buy");
var sum1 = p1 * i1;
var sum2 = p2 * i2;
var t = sum1 + sum2;
document.write("Price of item 1 is" + " " + p1 + "<br>");
document.write("Quantity of item 1 is" + " " + i1 + "<br>");
document.write("Price of item 2 is" + " " + p2 + "<br>");
document.write("Quantity of item 2 is" + " " + i2 + "<br>");
document.write("Shipping charges 100" + "<br><br>");
document.write("Total Sum" + " " + t);

//       8.      Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
document.write("<h1>Marks Sheet</h1>");
var i2 = prompt("Enter your Marks");
var b = 980;
var sum = i2 * 100 / 980;
document.write("total mark is " + b + "<br>");
document.write("Mark Obtained: " + i2 + "<br>");
document.write("percentage: " + sum + "<br>");

//     9.        Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
document.write("<h1>Currency  in PKR</h1>" + "<br><br><br><br>");
var us = prompt("enter the amount of US Dollars you want to convert");
var ksr = prompt("enter the amount of Riyals you want to convert");
var conversion1 = us * 104.80;
var conversion2 = ksr * 28;
var total = conversion1 + conversion2;
document.write("Total currency in PKR:" + " " + total);
//      10.       Write a program to initialize a variable with some number and do arithmetic in following sequence: a. Add 5b. Multiply by 10 c. Divide the result by 2 Perform all calculations in a single expression.
            var x = +prompt("enter the number you want to calculate");
            var sum = ((x + 5) * 10) / 2;
            document.write(sum);

//   11.           The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable. b. Store their birth year in a variable. c. Calculate their 2 possible ages based on the stored values. Output them to the screen like so: “They are either NN or NN years old”.
document.write("<h1>Age Calculator</h1>" + "<br><br><br><br>");
var a = +prompt("enter your birth Year");
var b = 2021;
var sum = b - a;
document.write("current Year" + b + "<br>");
document.write("birth Year: " + a + "<br>");
document.write("Your Age is  " + sum + "<br>");

//      12.       The Geometrizer: Calculate properties of a circle. a. Store a radius into a variable.             b. Calculate the circumference based on the radius, andoutput “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
var r = +prompt("enter theradius of circle");
var circum = 2 * 3.142 * r;
var area = 3.142 * r * r;
document.write("Radius of Circle is:" + " " + r + "<br>");
document.write("The circumference is:" + " " + circum + "<br>");
document.write("The area is:" + " " + area);

//      13.       The Lifetime Supply Calculator: Ever wonder howmuch a “lifetime supply” of your favorite snack is?Wonder no more.a. Store your favorite snack into a variableb. Store your current age into a variable. c. Store a maximum age into a variable. d. Store an estimated amount per day (as a number). e. Calculate how many would you eat total for the rest of your life. Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.

document.write("<h1>The Lifetime Supply Calculator</h1>" + "<br><br><br>");
var a = prompt("Enter Your Favourite Snake: ");
var b = +prompt("Your Current Age: ");
var c = +prompt("Estimated Maximum Age: ");
var d = +prompt(" Enter the  Amount of snack per day you want: ");
document.write("favourite snack: " + a + "<br>");
document.write("Current Age: " + b + "<br>");
document.write("Estimated Maximum Age:" + c + "<br>");
document.write(" Amount of snack per day: " + d + "<br>");


document.write("You will need " + (c - b) * d + " " + a + " to last you until the ride old age of " + c);

// CHAPTER 6 to 8

// 1.Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
var a = +prompt("Enter number a");
document.write("Result: <br>The value of a is:" + a + "<br>........................................<br><br>")
a = ++a;
document.write("The value of ++a is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + a + "<br>");
a = a + 1;
document.write("Now the value of a is: " + a + "<br><br>");
a = --a;
document.write("The value of --a is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + a + "<br>");
a = a - 1;
document.write("Now the value of a is: " + a + "<br><br>");

//    2.         What will be the output in variables a, b & result afterexecution of the following script: var a = 2, b = 1; var result = --a - --b + ++b + b--; Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--;

var a = +prompt("Enter value of a");
var b = +prompt("Enter value of b");
document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");
var result = --a - --b + ++b + b--;
document.write("result is " + result);

//    3.         Write a program that takes input a name from user & greet the user.

var name = prompt("Please Enter Your Good Name");
document.write(name + "!" + " Welcome to our website");

//    4.         Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
var a = +prompt("Enter the number of table to display");
document.write("Table of " + a + "<br>");
var b;
for (b = 1; b <= 10; b++) {
      var c = a * b;
      document.write(a + "x" + b + "=" + c + "<br>");
}

// 5.Now calculate total marks and percentage and show the result in browser like this.(Hint: user table);
var subject1 = prompt("Enter subject 1 name", "Biology");
var subject2 = prompt("Enter subject 2 name", "Chemistry");
var subject3 = prompt("Enter subject 3 name", "Physics");
var totalMarks = 100;
var totalMarks1 = 300;
var sub1Obt = +prompt("Enter " + subject1 + " Obtained marks")
var sub2Obt = +prompt("Enter " + subject2 + " Obtained marks")
var sub3Obt = +prompt("Enter " + subject3 + " Obtained marks")
var sub1Per = (sub1Obt / totalMarks) * 100;
var sub2Per = (sub2Obt / totalMarks) * 100;
var sub3Per = (sub3Obt / totalMarks) * 100;
var totalSubject = sub1Obt + sub2Obt + sub3Obt;
var percentage = (totalSubject / totalMarks1) * 100;

document.write("<table border='5px'>")
document.write("<tr>")
document.write("<th>")
document.write("Subject")
document.write("</th>")
document.write("<th>")
document.write("Total Marks")
document.write("</th>")
document.write("<th>")
document.write("Obtained Marks")
document.write("</th>")
document.write("<th>")
document.write("Percentage")
document.write("</th>")
document.write("</tr>")

document.write("<tr>")
document.write("<td>")
document.write(subject1)
document.write("</td>")
document.write("<td>")
document.write(totalMarks)
document.write("</td>")
document.write("<td>")
document.write(sub1Obt)
document.write("</td>")
document.write("<td>")
document.write(sub1Per + "%")
document.write("</td>")
document.write("</tr>")

document.write("<tr>")
document.write("<td>")
document.write(subject2)
document.write("</td>")
document.write("<td>")
document.write(totalMarks)
document.write("</td>")
document.write("<td>")
document.write(sub2Obt)
document.write("</td>")
document.write("<td>")
document.write(sub2Per + "%")
document.write("</td>")
document.write("</tr>")


document.write("<tr>")
document.write("<td>")
document.write(subject3)
document.write("</td>")
document.write("<td>")
document.write(totalMarks)
document.write("</td>")
document.write("<td>")
document.write(sub3Obt)
document.write("</td>")
document.write("<td>")
document.write(sub3Per + "%")
document.write("</td>")
document.write("</tr>")

document.write("<tr>")
document.write("<td>")
document.write("yourMark")
document.write("</td>")
document.write("<td>")
document.write(totalMarks1)
document.write("</td>")
document.write("<td>")
document.write(totalSubject)
document.write("</td>")
document.write("<td>")
document.write(percentage + "%")
document.write("</td>")
document.write("</tr>")
document.write("</table>")


// javascript-chapter9-11

//    1.   Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this:“Welcome to city of lights”

var a = prompt("Enter the city name");
if (a == "karachi") {
      document.write("Welcome to city of lights");
}
else {
      document.write("Welcome to " + a + " city");
}
// 2. Write a program to take “gender” as input from user. If the  user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
var gender = prompt("Your GENDER");
if (gender == "male") {
      document.write("GOOD MORNING SIR")
} else {
      document.write("GOOD MORNING MISS")
}
//3.             Write a program to take input color of road traffic signal from the user & show the message according to this table:
var a = prompt("Please enter signal color");
if (a == "Red") {
      document.write("Must Stop");
}
else if (a == "Yellow") {
      document.write("Ready To Move");
}
else if (a == "Green") {
      document.write("Move Now");
}
else {
      document.write("Wrong Color")
}
//   4.          Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”.

var a = prompt("please enter fuel quantity remaining");
if (a <= 0.25) {
      document.write("Please refill the fuel in your car");
}
else {
      document.write("you can drive more but refil before you have less than 0.25 liters left");
}
//     5.  Run this script, & check whether alert message would be displayed or not. Record the outputs.
// a. 
var a = 4;
if (++a === 5) {
      alert("given condition for variable a is true");
}
document.write("a. Is True");
// b.
var b = 82;
if (b++ === 83) {
      alert("given condition for variable b is true");
}
document.write("b. is not true");
// c.
var c = 12;
if (c++ === 13) {
      alert("condition 1 is true");
}
if (c === 13) {
      alert("condition 2 is true");
}

if (++c < 14) {
      alert("condition 3 is true");
}
if (c === 14) {
      alert("condition 4 is true");
}
document.write("c. Is True");
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
      alert("The cost equals");
}
document.write("d. Is True")
if (true) {
      alert("True");
}
if (false) {
      alert("False");
}
document.write("e is true")
if ("car" < "cat") {
      alert("car is smaller than cat");
}
document.write("f is true");

//     6.        Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table: Show the total marks, marks obtained, percentage, grade & remarks like:
document.write("<h1>Marks Sheet</h1><br><br><br>");
document.write("Total Marks : 300 <br>");
var mo = +prompt("Enter Obtained Marks");
var percentage = (mo / 300) * 100;
document.write("Marks obtained : " + mo + "<br>")
document.write("Percentage : " + percentage + "%<br>");

if (percentage >= 80 && percentage < 100) {
      document.write("Grade : A1 <br>");
      document.write("Remarks : Excellent");
}
else if (percentage >= 70 && percentage < 80) {
      document.write("Grade : A<br>");
      document.write("Remarks : Good");


} else if (percentage >= 60 && percentage < 70) {
      document.write("Grade : B<br>");
      document.write("Remarks : You need to improve");

} else if (percentage < 60) {
      document.write("Grade : Fail<br>");
      document.write("Remarks : Sorry");
} else {
      document.write("enter your valid percentage")
}
//       7.      Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. a. If user guesses the same number, show “Bingo! Correct answer”. b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
var a = +prompt("Guess the Number");
var b = 3;
if (a == b) {
      document.write("Bingo! Correct answer");
} else if (a == b + 1) {
      document.write("Close Enough");
} else {
      document.write("Try Again");
}
//        8.     Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
var a = +prompt("Enter the number to check wether it is multiply by 3");
if (a % 3 == 0) {
      document.write("Provided Number is Divisible by 3");
} else {
      document.write("Not divisible by 3");
}
//        9.     Write a program that checks whether the given input is an even number or an odd number.
var a = +prompt("Enter your Number");
if (a % 2 == 0) {
      alert("This is an Even Number");


} else {
      alert("This is an Odd Number")
}

// 10.            Write a program that takes temperature as input and shows a message based on following criteria a. T > 40 then “It is too hot outside.” b. T > 30 then “The Weather today is Normal.”c. T > 20 then “Today’s Weather is cool.” d. T > 10 then “OMG! Today’s weather is so Cool.” var a=+prompt("Enter TEMPERATURE TODAY IN KARACHI");

if (a >= 40 && a < 60) {
      document.write("It is too hot outside.");
} else if (a >= 30 && a < 40) {
      document.write("The Weather today is Normal");
} else if (a >= 20 && a < 30) {
      document.write("Today’s Weather is cool.");
} else if (a >= 10 && a < 20) {
      document.write("OMG!Today’s weather is so Cool.");
} else if (a < 10) {
      document.write("OMG!Today’s weather is very Cool.");
} else {
      document.write("Enter Your Valid Temperature");
}
  //       11.      Write a program to create a calculator for +,-,*, / & %  using if statements. Take the following input: a. First number b. Second number c. Operation (+, -, *, /, %) Compute & show the calculated result to user.
            var a = +prompt("Enter 1st Number");
            var b = prompt("Enter the mathematical operator eg: +,-,*,/,%");
            var c = +prompt("Enter 2nd Number");
            if (b == "+") {
                  document.write(a + c);
            } else if (b == "-") {
                  document.write(a - c);
            } else if (b == "*") {
                  document.write(a * c);
            } else if (b == "/") {
                  document.write(a / c);
            } else if (b == "%") {
                  document.write(a % c);
            } else {
                  document.write("Please enter correct values");
            }

//CHAPTER 11 TO 13.

//       1.      Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).
var a = prompt("Enter Your letter");
if (a == "a") {
      document.write("65");
} else if (a == "b") {
      document.write("66");
}
else if (a == "c") {
      document.write(67)
} else if (a == "d") {
      document.write(68)
} else if (a == "e") {
      document.write(69)
} else if (a == "f") {
      document.write(70)
} else if (a == "g") {
      document.write(71)
} else if (a == "h") {
      document.write(72)
} else if (a == "i") {
      document.write(73)
} else if (a == "j") {
      document.write(74)
} else if (a == "k") {
      document.write(75)
} else if (a == "l") {
      document.write(76)
} else if (a == "m") {
      document.write(77)
} else if (a == "n") {
      document.write(78)
} else if (a == "o") {
      document.write(79)
} else if (a == "p") {
      document.write(80)
} else if (a == "q") {
      document.write(81)
} else if (a == "r") {
      document.write(82)
} else if (a == "s") {
      document.write(83)
} else if (a == "t") {
      document.write(84)
} else if (a == "u") {
      document.write(85)
} else if (a == "v") {
      document.write(86)
} else if (a == "w") {
      document.write(87)
} else if (a == "x") {
      document.write(88)
} else if (a == "y") {
      document.write(89)
} else if (a == "z") {
      document.write(90)
} else if (a == "A") {
      document.write(97)
} else if (a == "B") {
      document.write(98)
}
else if (a == "C") {
      document.write(99)
} else if (a == "D") {
      document.write(100)
} else if (a == "E") {
      document.write(101)
} else if (a == "F") {
      document.write(102)
} else if (a == "G") {
      document.write(103)
} else if (a == "H") {
      document.write(104)
} else if (a == "I") {
      document.write(105)
} else if (a == "J") {
      document.write(106)
} else if (a == "K") {
      document.write(107)
} else if (a == "L") {
      document.write(108)
} else if (a == "M") {
      document.write(109)
} else if (a == "N") {
      document.write(110)
} else if (a == "O") {
      document.write(111)
} else if (a == "P") {
      document.write(112)
} else if (a == "Q") {
      document.write(113)
} else if (a == "R") {
      document.write(114)
} else if (a == "S") {
      document.write(115)
} else if (a == "T") {
      document.write(116)
} else if (a == "U") {
      document.write(117)
} else if (a == "V") {
      document.write(118)
} else if (a == "W") {
      document.write(119)
} else if (a == "X") {
      document.write(120)
} else if (a == "Y") {
      document.write(121)
} else if (a == "Z") {
      document.write(122)
} else {
      document.write("Please enter Your Correct letter")
}
//2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
var a = +prompt("Enter 1st Number for comparision");
var b = +prompt("Enter 2nd number for comparision");
if (a > b) {
      document.write(a + " is greater than " + b);
} else {
      document.write(b + " is greater than " + a);
}
//  3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.
var a = +prompt("Enter number to check it is negative positive or zero??");
if (a < 0) {
      document.write(a + " is nagative number");
} else if (a > 0) {
      document.write(a + " is positive number");
} else {
      document.write(a + " is zero");
}
//   4.  Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise.

var vowel = prompt("Enter single charachter to check, is it vowel??");
if (vowel === "a") {
      document.write(vowel + " is vowel");
} else if (vowel === "e") {
      document.write(vowel + " is vowel");
} else if (vowel === "i") {
      document.write(vowel + " is vowel");
} else if (vowel === "o") {
      document.write(vowel + " is vowel");
} else if (vowel === "u") {
      document.write(vowel + " is vowel");
} else {
      document.write("False");
}
//       5.         Write a program thata. Store correct password in a JS variable.b. Asks user to enter his/her passwordc. Validate the two passwords:i. Check if user has entered password. If not, then give message “ Please enter your password” ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show“Incorrect password” otherwise.
var password = prompt("Enter your password");
if (password == "worldcup") {
      document.write("Correct Password");
} else {
      document.write("Incorrect Password")
}
//6.This if/else statement does not work. Try to fix it: var greeting; var hour = 13; if (hour < 18) { greeting = "Good day"; else greeting = "Good evening"; }
var greeting;
var hour = 13;

if (hour < 18) {
      document.write("Good day");
}
else {
      document.write("Good evening");
}
//          7.   Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements var hour = 13;


var time = 1900;
if (time >= 0000 && time < 1200) {
      document.write("Good Morning")
} else if (time >= 1200 && time < 1700) {
      document.write("Good Afternoon")
} else if (time >= 1700 && time < 2100) {
      document.write("Good Evening")
} else if (time >= 2100 && time < 2359) {
      document.write("Good Night")
}
//CHAPTER 14 TO 17
//     1.        Declare an empty array using JS literal notation to store student names in future.
var arr = ["engineer.junaid", "Umair Rajah", "lieutenent.faizan", "hassaan"], ;
document.write(arr);
//        2.     Declare an empty array using JS object notation to store student names in future.
var arr = new Array("engineer.junaid", "Umair Rajah", "lieutenent.faizan", "hassaan");
document.write(arr);
// 3. Declare and initialize a strings array
var a = ["a", "b", "c", "d"];
document.write(a);
// 4. Declare and initialize a numbers array.
var a = [1, 2, 3, 4, 5];
document.write(a);
// 5. Declare and initialize a boolean array
var boolean = [true, false];
document.write(boolean);
//6. Declare and initialize a mixed array.
var mixed = ["umair", 0, true];
document.write(mixed);
//         7.    Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:

document.write("<h1>Qualification</h1><br><br><br>");

var student = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", " M. Phil", "PhD"];


student.forEach(function (value) {
      document.write(value + "<br>");
});
document.write("<br><br><br>")
student.forEach(function (value, index) {
      document.write(index + ")" + value + "<br>");
});
//    8.    Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:
var ary = new Array();

for (var g = 0; g <= 2; g++) {
      ary[g] = prompt("Enter The Student Name")
}


for (var a = 0; a <= 2; a++) {

}
var myary = new Array();

for (var g = 0; g <= 2; g++) {
      myary[g] = prompt("enter your no");
}


for (var a = 0; a <= 2; a++) {

}
var per1 = (myary[0] * 100) / 500;
var per2 = (myary[1] * 100) / 500;
var per3 = (myary[2] * 100) / 500;
document.write("score of " + ary[0] + " is " + myary[0] + ". Percentage:" + per1 + "<br>");
document.write("score of " + ary[1] + " is " + myary[1] + ". Percentage:" + per2 + "<br>");
document.write("score of " + ary[2] + " is " + myary[2] + ". Percentage:" + per3 + "<br>");
//     9.        Initialize an array with color names. Display the array elements in your browser. a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser. b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser. c. Add two more color to the beginning of the array. Display the updated array in your browser. d. Delete the first color in the array. Display the updated array in your browser.e. Delete the last color in the array. Display the updated array in your browser. f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser
var a = ["white", "yellow", "pink", "blue", "green", "lime"];
document.write(a + "<br>")
a.unshift("purple");
document.write(a + "<br>");
a.push("orange" + "<br>");
document.write(a);
a.splice(0, 0, "brown", "gray");
document.write(a + "<br>");
a.shift();
document.write(a + "<br>");
a.pop();
document.write(a + "<br>")
a.splice(4, 0, ",maroon", "coral");
document.write(a + "<br>")
a.splice(5);
document.write(a);

//       10.      Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
var ary = [320, 230, 480, 120];
document.write("score of Students : " + ary + "<br>");
var b = ary.sort();
document.write("ordered Scores of Students :" + b);
//         11.    Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
document.write("Cities List: " + "<br>");
var a = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write(a + "<br>");
var b = a.slice(-3, -1)
document.write(b + "<br>");
//         12.    Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)
var arr = ["This ", "is ", "my ", "cat "];
document.write(arr + "<br>")
var b = arr.join(" ");
document.write(b);
//           13.  Create a new array. Store values one by one in such a waythat you can access the values in the order in which they were stored. (FIFO-First In First Out);
var a = ["Keyboard", "Mouse", "Printer", "Monitor"];
a.forEach(loops);
function loops(value, index) {
      document.write("Out:<br>"
            + "" + value + "<br>")
}
//           14.  Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out);
var a = ["Keyboard", "Mouse", "Printer", "Monitor"];
var b = a.reverse();
document.write(b + "<br>")
a.forEach(loops);
function loops(value, index) {
      document.write("Out:<br>"
            + "" + value + "<br>")
}
//        15.     Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method.
var a = ["Apple", "Samsung", "Motorolla", "Nokia", "Sony", "Haier"];
document.write("<select ><option >" + a[0] + "</option><option >" + a[1] + "</option><option>" + a[2] + "</option><option >" + a[3] + "</option></option><option >" + a[4] + "</option></option><option >" + a[5] + "</option></select>");


// CHAPTER 17 TO 20;
//       1.      Declare and initialize an empty multidimensional array.(Array of arrays)
var ary = [
      ["Engineer.junaid", "Umair Rajah", "Lieutenent.faizan", "Hassaan"],
      ["Engineer.junaid", "Umair Rajah", "Lieutenent.faizan", "Hassaan"],
      ["Engineer.junaid", "Umair Rajah", "Lieutenent.faizan", "Hassaan"],
      ["Engineer.junaid", "Umair Rajah", "Lieutenent.faizan", "Hassaan"]


]
document.write(ary[0] + "<br>" + ary[1] + "<br>" + ary[2] + "<br>" + ary[3]);
//       2.      Declare and initialize a multidimensional array representing the following matrix:
var ary = [
      [0, 1, 2, 3],
      [1, 0, 1, 2],
      [2, 1, 0, 1]

]
document.write("<table border='0px' cellspacing='0'>")
for (var a = 0; a < 3; a++) {
      document.write("<tr>")
      for (var b = 0; b < 4; b++) {
            document.write("<td>" + ary[a][b] + "</td>");
      }
      document.write("</tr>");
}
// 3. Write a program to print numeric counting from 1 to 10.
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.write(a + "<br>");

for (a = 1; a <= 10; a++) {
      document.write(a + "<br>")
}
//   4.          Write a program to print multiplication table of anynumber using for loop. Table number & length should be taken as an input from user.
var a = +prompt("Enter a number to show its multiplication table");
var range = +prompt("Enter length multiplication table");
document.write("Table Of " + a + "<br><br>");
for (var b = 1; b <= range; b++) {
      var c = a * b;
      document.write(a + " x " + b + " = " + c + "<br>");
}
//    5.         Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”];
var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
fruits.forEach(function (value) {
      document.write(value + "<br>");
});
document.write("<br><br><br>")
fruits.forEach(function (value, index) {
      document.write("Element at index " + index + ":" + value + "<br>");
});
//    6.         Generate the following series in your browser. See example output. a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write("counting<br>");
for (var i = 1; i <= 15; i++) {
      document.write(i + ",");
}
document.write("<br><br><br>reverse counting<br>");
for (var i = 10; i >= 1; i--) {
      document.write(i + ",");
}
document.write("<br><br><br>Even<br>");
for (var i = 0; i <= 20; i++) {
      if (i % 2 == 0) {
            document.write(i + ",");
      }


}
document.write("<br><br><br>Odd<br>");
for (var i = 0; i <= 20; i++) {
      if (i % 2 != 0) {
            document.write(i + ",");
      }


}
document.write("<br><br><br>Series<br>");
for (var i = 1; i <= 20; i++) {
      if (i % 2 == 0) {
            document.write(i + "k,");
      }


}
//          7   You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example:

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var myFood = prompt("Welcome to RAJAH Bakery.What do you want to order sir/ma'am? ");
var matchFound = "no";

for (var i = 0; i < 1; i++) {
      if (myFood === A[0]) {
            document.write(" cake is <b>Available</b> at index 0  at our  bakery");
            matchFound = "yes";
      } else if (myFood === A[1]) {
            document.write(" apple pie is <b>Available</b> at index 1  at our  bakery");
            matchFound = "yes";
      } else if (myFood === A[2]) {
            document.write(" cookie is <b>Available</b> at index 2  at our bakery");
            matchFound = "yes";
      } else if (myFood === A[3]) {
            document.write(" chips is <b>Available</b> at index 3  at our bakery");
            matchFound = "yes";
      } else if (myFood === A[4]) {
            document.write(" patties is <b>Available</b> at index 4  at our bakery");
            matchFound = "yes";
      }

}

if (matchFound === "no") {
      document.write("We are Sorry," + myFood + " is not <b>Available </b> in our bakery!");
}
//     8.        Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].
var a = [24, 53, 78, 91, 12];
document.write(a + "<br>");
var max = a[0];

for (var i = 0; i < a.length; i++) {
      if (a[i] >= max) {
            max = a[i];
      }
}
document.write(max);
//      9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12];
var a = [24, 53, 78, 91, 12];
document.write(a + "<br>");
var min = a[0];

for (var i = 0; i < a.length; i++) {
      if (a[i] <= min) {
            min = a[i];
      }
}
document.write(min);
//        10.     Write a program to print multiples of 5 ranging 1 to 100.

for (var a = 5; a <= 100; a = a + 5) {

      document.write(a + ",");
}